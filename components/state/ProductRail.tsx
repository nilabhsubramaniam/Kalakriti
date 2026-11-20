import Frame from '@/components/state/Frame';
import type { Craft, Product } from '@/lib/states/types';

const inr = (n: number) => `₹${n.toLocaleString('en-IN')}`;

/**
 * The products belonging to one craft, shown inside that craft's expansion.
 *
 * Products used to live in a separate section that the story linked down to
 * and that linked back up again. Putting them here means the story ends on
 * something buyable instead of on a scroll instruction.
 */
export default function ProductRail({
  products,
  craft,
}: {
  products: Product[];
  craft: Craft;
}) {
  if (products.length === 0) return null;

  return (
    <ul className="kk-st-grid">
      {products.map(product => (
        <li key={product.id} id={product.id} className="kk-st-card">
          <Frame
            image={product.image}
            motif={product.motif ?? craft.motif}
            ratio="1 / 1"
            className="kk-st-card-art"
          >
            {product.tag && <span className="kk-st-card-tag">{product.tag}</span>}
          </Frame>

          <div className="kk-st-card-body">
            <h4 className="kk-st-card-name">{product.name}</h4>
            <p className="kk-st-card-blurb">{product.blurb}</p>
            <p className="kk-st-card-spec">
              {product.spec}
              {product.gi && <span className="kk-st-gi">{product.gi}</span>}
            </p>

            <p className="kk-st-card-foot">
              <span className="kk-st-price">{inr(product.price)} <small className="kk-preview-label">Preview price</small></span>
              {/* No cart exists in this codebase yet. The id is here so
                  wiring one up later is a one-line change. */}
              <button className="kk-st-buy" type="button" data-product-id={product.id} disabled>
                Shopping soon
              </button>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
