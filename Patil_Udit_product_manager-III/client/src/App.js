import React from 'react';
import SingleProduct from './components/SingleProduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductUpdate from './components/ProductUpdate'
import Main from './views/Main';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/products/:id" element={<SingleProduct/>}/>
          <Route path="/products/edit/:id" element={<ProductUpdate/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
