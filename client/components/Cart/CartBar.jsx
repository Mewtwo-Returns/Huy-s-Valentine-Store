import React from 'react';
import { BsBoxArrowRight } from 'react-icons/bs';
import { IoCartOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { useSelector, useDispatch } from 'react-redux';
import { checkoutCart } from '../../slices/cartSlice';
import CartItem from './CartItem';
import '../../../styles/cart.css';

const CartBar = ({setCartToggle}) => {

  const dispatch = useDispatch();
  const checkout = () => {
    dispatch(checkoutCart());
    setCartToggle(false);
  };
  const items = useSelector((state) => state.cart.items);
  const cartIsEmpty = items.length === 0;

  let subTotal = 0;
  let cart = [];
  let shipping = 0;
  let calcTax = 0;
  let total = 0;

  if (!cartIsEmpty){
    cart = items.map((item, idx) => {
      subTotal += (item.price * item.quantity);
      return <CartItem item={item} key={idx} id={idx}/>;
    });
  
    shipping = 15;
    calcTax = Number((subTotal * .0975).toFixed(2));
    total = Number(subTotal + shipping + calcTax).toFixed(2);
  }
  

  return (
    <div id="modal-overlay" onClick={(e) => {e.stopPropagation();setCartToggle(false)}}>
      <div id="cart-sidebar">
        <IconContext.Provider value={{className: 'minimize-cart', size:'1.9em'}}>
          <BsBoxArrowRight onClick={() => setCartToggle(false)}/>
        </IconContext.Provider>
        <div id="cart-header">
          <IconContext.Provider value={{size:'2rem'}}>
            <IoCartOutline />
          </IconContext.Provider>
          <span id="your-cart">Your Cart</span>
        </div>
        <div id="cart-items-container">
          {cart}
          {cartIsEmpty && <div id="emptyMsg">No items in cart 😭😭😭. <span>Please support Huy&apos;s Valentine&apos;s Day Shop by buying some items!</span></div>}
        </div>
        <div id="total-summary">
          <p id="subtotal">Subtotal: <span>${subTotal}</span></p>
          <p id="shipping">Shipping: <span>${shipping}</span></p>
          <p id="tax">Tax: <span>${calcTax}</span></p>
          <p id="total">Total: <span>${total}</span></p>
        </div>
        <div id="button-bar">
          <button id="secondary-button" className="form-button" onClick={checkout} disabled={cartIsEmpty}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartBar;