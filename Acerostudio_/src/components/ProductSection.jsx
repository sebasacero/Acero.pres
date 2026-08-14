import { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';

const SIZES = ['250G', '500G', '1KG'];

export default function ProductSection() {
  const { addItem, buyNow } = useCart();
  const [size, setSize] = useState(SIZES[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const product = {
    name: 'Bourbon Rosado',
    price: 30000,
    image: '/image/bagsbeans.png',
  };

  const handleAdd = () => {
    addItem({ name: product.name, price: product.price, variant: size, qty, image: product.image });
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  const handleBuyNow = () => {
    buyNow({ name: product.name, price: product.price, variant: size, qty });
  };

  return (
    <section className="product-section" id="beans">
      <div className="product-banner">
        <div className="banner-text">BEANS BEANS BEANS BEANS BEANS</div>
      </div>

      <div className="product-container">
        <div className="product-gallery">
          <div className="image-wrapper">
            <button className="nav-btn prev" aria-label="Previous image">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <img src={product.image} alt="The Home Blend Coffee Bag" />
            <button className="nav-btn next" aria-label="Next image">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          <div className="gallery-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">{product.price.toLocaleString('es-CO')}</p>

          <div className="selector-group">
            <p className="selector-label">SIZE</p>
            <div className="size-options">
              {SIZES.map((s) => (
                <button
                  key={s}
                  className={`size-btn ${size === s ? 'active' : ''}`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="purchase-actions">
            <div className="quantity-selector">
              <button className="qty-btn" aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
              <span className="qty-number">{qty}</span>
              <button className="qty-btn" aria-label="Increase quantity" onClick={() => setQty((q) => q + 1)}>+</button>
            </div>

            <button className={`btn-add-cart ${added ? 'added' : ''}`} onClick={handleAdd}>
              {added ? (
                'Added ✓'
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                  Add to cart
                </>
              )}
            </button>
          </div>

          <button className="btn-buy-shop" onClick={handleBuyNow}>
            Buy <span className="shop-logo"></span>
          </button>

          <div className="payment-options-link">
            <a href="#">More payment options</a>
          </div>

          <div className="pickup-status">
            <div className="status-message"></div>
            <a href="#" className="store-info-link">View store information</a>
          </div>
        </div>
      </div>
    </section>
  );
}
