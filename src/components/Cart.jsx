import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/cartSlice';

import axios from 'axios';
const Cart = () => {
  // const [product_id, setproduct_id] = useState('');
  // const [quantity, setquantity] = useState('');
  const cart = useSelector((state) => state.cartt.cart);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    fetchCartItems();
  }, [cart])

    const fetchCartItems = async () => {
      // const payload = {
      //   product_id:product_id,
      //   quantity:quantity
      // };
      // console.log(payload);
      const token = localStorage.getItem('token');
      if(token){
      try {
        const cartres = await axios.get('https://thebookstore-c7kj.onrender.com/cart',
          {headers:{
            Authorization:`Bearer ${token}`,
          },
        }
        );
        console.log(cartres.data);
        res.data.forEach(item => dispatch(addItem(item)));
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    }
    };
  
  useMemo(() => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.price * item.quantity;
    });
    setTotal(sum);
  }, [cart]);

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <img src='https://i.pinimg.com/564x/81/c4/fc/81c4fc9a4c06cf57abf23606689f7426.jpg' className='cartempimg' alt="Empty cart"/>
        <p className='oops'>OOPS! Your Cart is empty</p>
      </div>
    );
  }
  
  const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
  const deliveryFee = 10.00; 
  const totalWithDelivery = total + deliveryFee;

  return (
    <>
      <div className='cart-container'>
        {cart.map((item) => (
          <div key={item.id} className='product-grid'>
            <div className="product-item">
              <img src={item.image} alt={item.title} width={50} className='product-image' />
              <h3 className='product-title'>{item.title}</h3>
              <p className="product-description">{item.description}</p> 
              <p className="product-category"><b>Category:</b> {item.category}</p> 
              <p className="product-description">{item.author}</p> 
              <p className='product-price'>Price: ${item.price}</p>
              <p className='product-price'>Quantity: {item.quantity}</p>
              <button onClick={() => handleAdd(item)}>+</button> 
              <button onClick={() => handleRemove(item)}>-</button>
            </div>
          </div>
        ))}
      </div>
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
    </>
  );
};
export default Cart;

