// src/components/EnhancedProductCategories.jsx
import React, { useState, useMemo } from 'react';
import { allProducts } from '../config/products';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import './EnhancedProductCategories.css';

const PRODUCTS_PER_PAGE = 9;

const EnhancedProductCategories = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBrand, setFilterBrand] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useScrollAnimations();

  // --- Filtering Logic ---
  const filteredList = useMemo(() => {
    let products = allProducts;

    if (searchQuery.trim() !== '') {
      products = products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterBrand) {
      products = products.filter(p =>
        p.brands?.includes(filterBrand)
      );
    }

    return products;
  }, [searchQuery, filterBrand]);

  // --- Pagination Logic ---
  const totalPages = Math.ceil(filteredList.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return filteredList.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  }, [filteredList, currentPage]);

  const handleImageClick = (product) => setSelectedProduct(product);

  const closeProductModal = () => setSelectedProduct(null);

  const handleImageError = (productId) => {
    setImageErrors(prev => ({ ...prev, [productId]: true }));
  };

  return (
    <section id="products" className="section light-bg enhanced-product-categories">
      <div className="container">
        <h2 className="section-title" data-animation="fadeInUp" data-delay="200">
          Our Medical Products
        </h2>
        <p className="section-subtitle" data-animation="fadeInUp" data-delay="300">
          Premium quality medical equipment trusted by healthcare professionals
        </p>

        {/* --- Search & Filter --- */}
        <div className="product-search-filter" data-animation="fadeInUp" data-delay="400">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
          />
          <select value={filterBrand} onChange={(e) => { setFilterBrand(e.target.value); setCurrentPage(1); }}>
            <option value="">All Brands</option>
            {[...new Set(allProducts.flatMap(p => p.brands || []))].map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        {/* --- Products Grid --- */}
        <div className="category-products-grid">
          {paginatedProducts.map(product => (
            <div key={product.id} className="product-card-category" onClick={() => handleImageClick(product)}>
              <div className="product-image-category">
                {product.image && !imageErrors[product.id] ? (
                  <img src={product.image} alt={product.name} onError={() => handleImageError(product.id)} />
                ) : (
                  <div className="product-image-fallback">
                    {product.name.split(' ').map(w => w[0]).join('').toUpperCase()}
                  </div>
                )}
              </div>
              <div className="product-content-category">
                <h4 className="product-name-category">{product.name}</h4>
                <p className="product-description-category">{product.description}</p>
                {product.brands && (
                  <div className="product-brands">
                    <strong>Brands:</strong> {product.brands.join(', ')}
                  </div>
                )}
                <div className="product-features-category">
                  {product.features?.map((feature, i) => (
                    <span key={i} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <div className="product-footer-category">
                  <div className="product-price-category">{product.price}</div>
                  <a
                    href={product.buyLink || '#'}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Product Modal --- */}
        {selectedProduct && (
          <div className="image-modal-overlay" onClick={closeProductModal}>
            <div className="image-modal-content" onClick={e => e.stopPropagation()}>
              <button className="image-modal-close" onClick={closeProductModal}>×</button>
              {/* Product Image */}
              <div className="modal-image-container">
                {selectedProduct.image && !imageErrors[selectedProduct.id] ? (
                  <img src={selectedProduct.image} alt={selectedProduct.name} onError={() => handleImageError(selectedProduct.id)} />
                ) : (
                  <div className="product-image-fallback">
                    {selectedProduct.name.split(' ').map(w => w[0]).join('').toUpperCase()}
                  </div>
                )}
              </div>
              {/* Product Details */}
              <div className="modal-product-details">
                <h3>{selectedProduct.name}</h3>
                <p>{selectedProduct.description}</p>
                {selectedProduct.brands && <p><strong>Brands:</strong> {selectedProduct.brands.join(', ')}</p>}
                {selectedProduct.features && (
                  <p><strong>Features:</strong> {selectedProduct.features.join(', ')}</p>
                )}
                <p className="modal-price">{selectedProduct.price}</p>
                <a
                  href={selectedProduct.buyLink || '#'}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here to Buy
                </a>
              </div>
            </div>
          </div>
        )}

        {/* --- Pagination --- */}
        {totalPages > 1 && (
          <div className="pagination-section">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>Prev</button>
            <span>{currentPage} / {totalPages}</span>
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EnhancedProductCategories;
