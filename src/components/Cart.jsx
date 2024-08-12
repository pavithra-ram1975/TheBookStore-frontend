import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cartt.cart);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };
  const handleAdd = (item) => {
    dispatch(addItem(item));
  };
  // useEffect(() => {
  //   let sum = 0;
  //   cart.forEach((item) => {
  //     sum += item.price * item.quantity;
  //   });
  //   setTotal(sum);
  // }, [cart]);

  useMemo (()=>{
    let sum = 0;
    cart.forEach((item) => {
      sum += item.price * item.quantity;
    });
    setTotal(sum);
  },[cart]);

  if (cart.length === 0) {
    return (
      <>   
      <img src='https://i.pinimg.com/564x/81/c4/fc/81c4fc9a4c06cf57abf23606689f7426.jpg' className='cartempimg'/>
      <p className='oops'>OOPS! Your Cart is empty</p>;
      </>
    )
  }
  const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
  const deliveryFee = 10.00; 
  const totalWithDelivery = total + deliveryFee;
  return (
    <>
    <div className='cart-container'>{cart.map((item) => (
        <div className='product-grid'>
        <div key={item.id} className="product-item">
          <img src={item.image} alt={item.title} width={50} className='product-image' />
          <h3 className='product-title'>{item.title}</h3>
         <p className="product-description">{item.description}</p> 
          <p className="product-category"><b>Category:</b> {item.category}</p> 
          <p className='product-price'>Price: ${item.price}</p>
          <p className='product-price'>Quantity: {item.quantity}</p>
          <button onClick={() => handleAdd(item)}>+</button> 
          <button onClick={() => handleRemove(item)}>-</button>
        </div>
        </div>
      ))} </div>



      <div className="price-details">
        <h3>Price Details</h3>
        <div className="price-detail-row">
          <span>Subtotal ({totalCount} items):</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="price-detail-row">
          <span>Delivery Fee:</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="price-detail-row">
          <span>Total:</span>
          <span>${totalWithDelivery.toFixed(2)}</span>
        </div>
        <button className="checkout-button">Checkout</button>
      </div>
    {/* </div> */}
    </>
  );
};

export default Cart;
