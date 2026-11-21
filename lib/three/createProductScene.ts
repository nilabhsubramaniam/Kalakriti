import * as THREE from 'three';
import { productViews, type ProductCrop, type ProductView } from '@/lib/commerce/productDetails';

export interface ProductScene {
  view: (view: ProductView) => void;
  rotate: (direction: number) => void;
  zoom: (direction: number) => void;
  dispose: () => void;
}

/** An image-backed presentation surface; no unverified back or depth is modeled. */
export function createProductScene(host: HTMLElement, source: string, crop: ProductCrop, imageAspect: number, onReady: () => void, onFailure: () => void, onChange: () => void): ProductScene {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.domElement.setAttribute('aria-hidden', 'true');
  host.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 20);
  camera.position.z = 4.2;
  const artworkWidth = 2.35 * imageAspect * crop.width / crop.height;
  const geometry = new THREE.PlaneGeometry(artworkWidth, 2.35);
  const texture = new THREE.Texture();
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.offset.set(crop.x, 1 - crop.y - crop.height);
  texture.repeat.set(crop.width, crop.height);
  texture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
  const material = new THREE.MeshBasicMaterial({ map: texture, toneMapped: false });
  const artwork = new THREE.Mesh(geometry, material);
  scene.add(artwork);
  let disposed = false;
  let loaded = false;
  let visible = true;
  let frame = 0;
  let yaw = 0;
  let pitch = 0;
  let zoom = 1;
  let pointer: { id: number; x: number; y: number } | null = null;
  const image = new Image();
  const render = () => {
    frame = 0;
    if (disposed || !loaded || !visible || document.hidden) return;
    artwork.rotation.set(pitch, yaw, 0);
    camera.zoom = zoom;
    camera.updateProjectionMatrix();
    try { renderer.render(scene, camera); } catch { onFailure(); }
  };
  const invalidate = () => { if (!disposed && !frame && visible && !document.hidden) frame = requestAnimationFrame(render); };
  const resize = () => {
    if (disposed) return;
    const { width, height } = host.getBoundingClientRect();
    renderer.setSize(Math.max(1, width), Math.max(1, height));
    camera.aspect = Math.max(1, width) / Math.max(1, height);
    // Keep the complete artwork in view on narrow screens.
    const halfFov = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    camera.position.z = Math.max(2.35 / (2 * halfFov), artworkWidth / (2 * halfFov * camera.aspect)) * 1.16;
    invalidate();
  };
  const lost = (event: Event) => { event.preventDefault(); if (!disposed) onFailure(); };
  const down = (event: PointerEvent) => {
    if (!loaded || !event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return;
    pointer = { id: event.pointerId, x: event.clientX, y: event.clientY };
    host.setPointerCapture(event.pointerId);
  };
  const move = (event: PointerEvent) => {
    if (!pointer || pointer.id !== event.pointerId) return;
    yaw = THREE.MathUtils.clamp(yaw + (event.clientX - pointer.x) * 0.008, -0.9, 0.9);
    // Touch retains vertical page scrolling; mouse can tilt vertically too.
    if (event.pointerType !== 'touch') pitch = THREE.MathUtils.clamp(pitch + (event.clientY - pointer.y) * 0.005, -0.28, 0.28);
    pointer = { id: event.pointerId, x: event.clientX, y: event.clientY };
    onChange(); invalidate();
  };
  const up = () => { const previous = pointer; pointer = null; if (previous && host.hasPointerCapture(previous.id)) host.releasePointerCapture(previous.id); };
  host.addEventListener('pointerdown', down);
  host.addEventListener('pointermove', move);
  host.addEventListener('pointerup', up);
  host.addEventListener('pointercancel', up);
  host.addEventListener('lostpointercapture', up);
  renderer.domElement.addEventListener('webglcontextlost', lost);
  document.addEventListener('visibilitychange', invalidate);
  const observer = new ResizeObserver(resize);
  observer.observe(host);
  const intersection = new IntersectionObserver(entries => { visible = entries[0]?.isIntersecting ?? false; if (visible) invalidate(); });
  intersection.observe(host);
  const timeout = setTimeout(() => { if (!disposed && !loaded) onFailure(); }, 15000);
  image.onload = () => {
    if (disposed) return;
    clearTimeout(timeout);
    texture.image = image; texture.needsUpdate = true;
    loaded = true; resize(); onReady();
  };
  image.onerror = () => { clearTimeout(timeout); if (!disposed) onFailure(); };
  image.src = source;
  resize();
  return {
    view: view => { yaw = view.yaw; pitch = view.pitch; zoom = view.zoom; invalidate(); },
    rotate: direction => { yaw = THREE.MathUtils.clamp(yaw + direction * 0.16, -0.9, 0.9); onChange(); invalidate(); },
    zoom: direction => { zoom = THREE.MathUtils.clamp(zoom + direction * 0.2, productViews[0].zoom, 2); onChange(); invalidate(); },
    dispose: () => {
      if (disposed) return;
      disposed = true; clearTimeout(timeout); cancelAnimationFrame(frame);
      up(); observer.disconnect(); intersection.disconnect();
      host.removeEventListener('pointerdown', down); host.removeEventListener('pointermove', move);
      host.removeEventListener('pointerup', up); host.removeEventListener('pointercancel', up); host.removeEventListener('lostpointercapture', up);
      document.removeEventListener('visibilitychange', invalidate);
      renderer.domElement.removeEventListener('webglcontextlost', lost);
      image.onload = null; image.onerror = null; image.removeAttribute('src');
      geometry.dispose(); material.dispose(); texture.dispose();
      renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove();
    },
  };
}
