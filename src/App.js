import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import CreateProduct from './CreateProduct';
import UpdateProduct from './UpdateProduct';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;