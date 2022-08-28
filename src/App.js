import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './containers/Home';
import Products from './containers/Products';
import NewProduct from './containers/NewProduct';
// import Cart from './containers/Cart'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/productos' element={<Products />}/>
        <Route path='/cargar' element={<NewProduct />}/>
        {/* <Route path='/carrito' element={<Cart />}/> */}
      </Routes>
    </div>
  );
}

export default App;
