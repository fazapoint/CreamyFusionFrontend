import React from 'react';
import { useParams } from 'react-router-dom';

function UpdateProduct() {
  const { id } = useParams();

  return (
    <div>
      <h1>Update Product</h1>
      <p>Product ID: {id}</p>
      {/* You can build your update form here later */}
    </div>
  );
}

export default UpdateProduct;
