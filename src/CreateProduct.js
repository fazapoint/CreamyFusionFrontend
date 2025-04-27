import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function CreateProduct() {
  const [name, setName] = useState('');
  const [Price, setPrice] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const productData = {
      name: name,
      Price: Number(Price)
    };

    axios.post('https://creamyfusionapp.azurewebsites.net/api/products', productData)
      .then(response => {
        setSubmitMessage('Product created successfully!');
        setTimeout(() => {
          navigate('/'); // Redirect to product list after success
        }, 1500);
      })
      .catch(error => {
        console.error("Error creating product:", error);
        setSubmitMessage('Failed to create product. Please try again.');
      });
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>Add New Product</h1>
      <Link to="/">Back to Products</Link>
      
      <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
        <div style={{ margin: '10px 0' }}>
          <label>
            Name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>
        <div style={{ margin: '10px 0' }}>
          <label>
            Initial Price:
            <input 
              type="number" 
              value={Price} 
              onChange={(e) => setPrice(e.target.value)} 
              required
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>
        <button type="submit">Create Product</button>
      </form>
      {submitMessage && <p>{submitMessage}</p>}
    </div>
  );
}

export default CreateProduct;