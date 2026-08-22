/** @type {import('next').NextConfig} */
const config = {
  poweredByHeader: false,

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'nilabhsubramaniam.atlassian.net' },
    ],
  },

  async headers() {
    return [
      {
        // Map geometry is large and changes rarely. Without this it is served
        // with `max-age=0, must-revalidate`, so every visit re-fetches it.
        source: '/(.*).geojson',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options',        value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy',        value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          {
            key:   'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default config;
