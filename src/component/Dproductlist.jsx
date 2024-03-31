import React, { useState, useContext } from "react";
import { ProductContext } from "./ProductContext";
const ProductList = () => {
  const [sortOption, setSortOption] = useState("title");

  const { products } = useContext(ProductContext);

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortedProducts = products.slice().sort((a, b) => {
    if (sortOption === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortOption === "price") {
      return a.price - b.price;
    } else if (sortOption === "rating") {
      return b.rating - a.rating;
    }
  });

  return (
    <div>
      <h2>Product List</h2>
      <label>
        Sort by:
        <select value={sortOption} onChange={handleSortOptionChange}>
          <option value="title">Title</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </label>
      <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price} - Rating: {product.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
