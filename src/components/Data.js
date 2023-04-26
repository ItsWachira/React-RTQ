import { useGetAllProductsQuery } from "../features/apiSlice";
import React, { useState } from "react";
import "./product.component.css";

export const Data = () => {
  const { data, error, isLoading, refetch } = useGetAllProductsQuery();
  const [productsData, setProductsData] = useState([]);

  const handleDisplayData = () => {
    refetch();
    setProductsData(data?.products);

  };

  return (
    <div className="product-container">
      <button className="product-button" onClick={handleDisplayData}>
        Display Data
      </button>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <label className="product-label">Products:</label>
      {productsData && productsData.length > 0 && (
        <ul>
          {productsData.slice(0, 4).map((product) => (
            <li className="product-details" key={product.id}>
               
              <p>Name: {product.title}</p>
              <p>Description: {product.description}</p>
              <p>Price: {product.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
