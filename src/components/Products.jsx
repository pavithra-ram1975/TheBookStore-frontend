import { PRODUCTS } from "../constants";
import ProductCard from "./Productcard";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/searchSlice";
const Products = (props) => {
  const dispatch = useDispatch()
  useEffect(()=>{
    getProducts();
  },[])

  
  const getProducts = async()=>{
    const res = await axios.get('https://thebookstore-c7kj.onrender.com/products')
    // const res = await axios.get('http:/localhost:2525/products');
    console.log(res.data)
    dispatch(setProducts(res.data))
  };
  const searchlist = useSelector((state)=>state.searchSlice.searchlist)
 

  return (
    <div className="products-grid">
        {/* <div className="products-flex"></div> */}
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} item={product} cart={props.cart} setCart={props.setCart} />
      ))}
    </div>
  );
};

export default Products;
