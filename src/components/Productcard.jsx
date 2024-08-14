import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/counterSlice";
import { addItem } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const cart = useSelector((state)=>state.cartt.cart)
  const isIteminCart = cart.some((item)=> item.id === props.item.id)
  const dispatch= useDispatch();
  //to call redux we have to use dispatch 
    // const addItem = () => {
    //     props.setCart([...props.cart,props.item]);
    //     console.log(props.cart)
    // }
    const handleIncrement=()=> {
      // dispatch(increment());
      dispatch(increment(1));
    }
     const handlecart=()=>{
      dispatch(addItem(props.item));
     }


    return (
      
      // < Link to={`/Products/${props.item.id}`}

      <div className="product-card" key={props.item.id}>
        < Link to={`/Products/${props.item.id}`}> <img src={props.item.image} alt={props.item.title} className="product-image" /> 
        <h2 className="product-title">{props.item.title}</h2>
        <p className="product-description">{props.item.description}</p>
        <p className="product-category"><b>Category:</b> {props.item.category}</p>
        <p className="product-price"><b>Price:</b> ${props.item.price}</p>
        <p className="product-author"><b>Author:</b> {props.item.author}</p>
        <div className="product-rating">
          <span><b>Rating:</b> {props.item.rating.rate} / 5</span>
          <span>({props.item.rating.count} reviews)</span>
        </div>  </Link>
        {/* <button onClick={addItem}>Add to Bag</button> */}
        
        {isIteminCart? (<Link to ="/Cart"><button>Go to Cart</button></Link>):(<button onClick={handlecart}>Add to Bag</button>)}
        {/* <button onClick={handlecart}>Add to Bag</button> */}
        {/* <button onClick={handleIncrement}>Increment</button> */}
        {/* <button>Purchase</button> */}
        </div>
    );
  };
  export default ProductCard;
  