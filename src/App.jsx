// import {useState} from 'react';
import Products from './components/Products';
import "./App.css";
import Header from './components/Header';
import Cart from './components/Cart';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from './components/Login';
import ProductDetails from './components/ProductDetails';
// import Search from './components/Search';
import About from './components/About';
import Register from './components/Regsiter';

const App=()=>{
  
  return (
    <>
    <BrowserRouter>
    <Header/>
    {/* <Search/> */}
    <Routes>
      <Route path="/" element ={<Login/>}></Route>
      <Route path="/Register" element ={<Register/>}></Route>
      <Route path="/Products" element ={<Products/>}></Route>
      <Route path="/Products/:productId" element ={<ProductDetails/>}></Route>
      <Route path="/About" element ={<About/>}></Route>
      <Route path="/Cart" element ={<Cart/>}></Route>
    {/* <Header cart={cart}/> */}
    {/* <Products setCart={setCart} cart={cart}/> */}
    </Routes>
    </BrowserRouter>
    </>
  )
};
  export default App;
  
  




