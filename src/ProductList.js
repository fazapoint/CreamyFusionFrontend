import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log('API URL:', apiUrl); // Debug: Check what URL is being used
    axios.get(`${apiUrl}/products`)
      .then(response => {
        console.log('Response:', response.data); // Debug: Check the response
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
        setError("Failed to load products");
        setLoading(false);
      });
  }, [apiUrl]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Smoothie Products</h1>
      <Link to="/create">Add New Product</Link>
      
      <table border="1" style={{ borderCollapse: 'collapse', width: '80%', margin: '20px auto' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price (IDR)</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.currentPrice}</td>
              <td><Link to={`/update/${product.id}`}>Update</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;