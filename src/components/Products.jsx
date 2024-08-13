import { PRODUCTS } from "../constants";
import ProductCard from "./Productcard";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/searchSlice";
const Products = (props) => {
  const dispatch = useDispatch()
  useEffect(()=>{
    getProducts();
  },[])

  
  const getProducts = async()=>{
    const res = await axios.get('https://thebookstore-c7kj.onrender.com/getproducts')
    console.log(res.data)
    dispatch(setProducts(res.data))
  };
 

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
