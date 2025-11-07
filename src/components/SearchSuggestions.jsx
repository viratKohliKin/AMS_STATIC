import React from 'react';
import { allProducts } from '../config/products';
import './SearchSuggestions.css';

const SearchSuggestions = ({ searchQuery, onSelect }) => {
  if (!searchQuery || searchQuery.length < 2) return null;

  const suggestions = allProducts.filter(product => {
    const searchLower = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower) ||
      (product.description && product.description.toLowerCase().includes(searchLower)) ||
      (product.brands && product.brands.some(brand => brand.toLowerCase().includes(searchLower)))
    );
  }).slice(0, 5); // Limit to 5 suggestions

  if (suggestions.length === 0) return null;

  return (
    <div className="search-suggestions">
      {suggestions.map((product) => (
        <div
          key={product.id}
          className="suggestion-item"
          onClick={() => onSelect(product)}
        >
          <div className="suggestion-icon">
            {product.icon || '📦'}
          </div>
          <div className="suggestion-content">
            <div className="suggestion-name">{product.name}</div>
            <div className="suggestion-category">
              {product.category} • ₹{product.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchSuggestions;