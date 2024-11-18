import React from 'react';
import './App.css';
import Header from './containers/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
          <Route path='*' element={<div>404 Not Found!</div>} /> {/* Catch-all route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
