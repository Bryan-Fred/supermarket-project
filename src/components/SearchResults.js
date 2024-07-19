import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      {results.length > 0 ? (
        results.map((product) => (
          <div key={product.id} className="product-unique">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
