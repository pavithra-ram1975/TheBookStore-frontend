// // import React from "react";
// // import { useParams } from "react-router-dom";

// // const ProductDetails=()=>{
// //     const{productId}=useParams();
// //     return (
// //         // <p>hii</p>
// //     // <div>ProductDetails:{productId}</div>
// // }
// // export default ProductDetails;


// import React from "react";
// import { useParams } from "react-router-dom";
// import { PRODUCTS } from "../constants";
// import { addItem } from "../redux/cartSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import "../App.css";
// const ProductDetails = (props) => {
//   const cart = useSelector((state)=>state.cartt.cart)
//   const isIteminCart = cart.some((item)=> item.id === props.item.id)
//   const dispatch= useDispatch();//


//   const { productId } = useParams();
//   const product = PRODUCTS.find((item) => item.id === productId);

//   if (!product) return <div>Product not found</div>;
// // const cart = useSelector((state)=>state.cartt.cart)
//   const handlecart=()=>{
//     dispatch(addItem(props.item));
//    }

//   return (
//     <div className="productdetails-container">
//     <div className="productdetails-card">
//       <img  src={product.image} alt={product.title} className="ProductDetails-image" />
//       <h2 className="product-title">{product.title}</h2>
//       <p className="product-description">{product.description}</p>
//       <p className="product-category"><b>Category:</b> {product.category}</p>
//       <p className="product-price"><b>Price:</b> ${product.price}</p>
//       <p className="product-author"><b>Author:</b> {product.author}</p>
//       <div className="product-rating">
//         <span><b>Rating:</b> {product.rating.rate} / 5</span>
//         <span>({product.rating.count} reviews)</span>
//         {isIteminCart? (<Link to ="/Cart"><button>Go to Cart</button></Link>):(<button onClick={handlecart}>Add to Bag</button>)}
//         {/* <button onClick={handlecart}>Add to Bag</button> */}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default ProductDetails;
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PRODUCTS } from "../constants";
import { addItem } from "../redux/cartSlice";
import "../App.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = PRODUCTS.find((item) => item.id === productId);

  const cart = useSelector((state) => state.cartt.cart);
  const isItemInCart = cart.some((item) => item.id === product?.id);  // Fixed line
  const dispatch = useDispatch();

  if (!product) return <div>Product not found</div>;

  const handleCart = () => {
    dispatch(addItem(product)); 
  };

  return (
    <div className="productdetails-container">
      <div className="productdetails-card">
        <img
          src={product.image}
          alt={product.title}
          className="ProductDetails-image"
        />
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-category"><b>Category:</b> {product.category}</p>
        <p className="product-price"><b>Price:</b> ${product.price}</p>
        <p className="product-author"><b>Author:</b> {product.author}</p>
        <div className="product-rating">
          <span><b>Rating:</b> {product.rating.rate} / 5</span><span>({product.rating.count} reviews)</span>
        </div>
        <div className="product-details-button">{isItemInCart ? (
          <Link to="/Cart"><button>Go to Cart</button></Link>) : (<button onClick={handleCart}>Add to Bag</button>)} </div>
      </div>
    </div>
  );
};

export default ProductDetails;
