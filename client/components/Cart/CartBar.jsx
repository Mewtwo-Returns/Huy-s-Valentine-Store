import React from 'react';
import { BsBoxArrowRight } from 'react-icons/bs';
import { IoCartOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { useSelector, useDispatch } from 'react-redux';
import { checkoutCart } from '../../slices/cartSlice';
import CartItem from './CartItem';
import '../../../styles/cart.css';

const CartBar = ({setCartToggle}) => {

  const items = useSelector((state) => state.cart.items);
  console.log(items);
  const subTotal = useSelector((state) => state.cart.subTotal);

  const cart = items.map((item, idx) => {
    return <CartItem item={item} key={idx} id={idx}/>;
  });
  const dispatch = useDispatch();

  const checkout = () => {
    dispatch(checkoutCart());
    setCartToggle(false);
  };

  // const cartObj = {
  //   item: {name:'rurubear', price:'69.69', quantity:2,
  //     imgSrc:'https://www.google.com/search?q=bear&newwindow=1&rlz=1C1CHBF_enUS926US926&sxsrf=APq-WBu2R_ng5aKE7R3bT9SSEzRqOAlW8w:1644955957241&tbm=isch&source=iu&ictx=1&vet=1&fir=4pmHKW_ibk5lHM%252C_44HmSV8bjuyUM%252C%252Fm%252F01dws%253Bcl-N6jp1kdRVFM%252CT0ykaEdayPVliM%252C_%253Be9Cdbm42G0KSyM%252C9AZ3Ofag3gKqnM%252C_%253BvDvfzY6M55wL5M%252CjY3Eu-hQkjMyVM%252C_%253Bwygrv1m1Nx-HPM%252CiIpysUGamGsiyM%252C_%253BtLEHQpVh-uvdeM%252C7gW1Yg3rpR3ykM%252C_%253BkX2jrdsVcSaZ4M%252Cenu_UdVHllKHPM%252C_&usg=AI4_-kRnQC64-EINJOIe5W7NOSy6mxfzZQ&sa=X&ved=2ahUKEwj4iIK8woL2AhWrd98KHV-gB7oQ_B16BAg6EAE#imgrc=4pmHKW_ibk5lHM',},
  //   subtotal: 50, 
  // };
  // const item = cartObj.item;
  // const cart = [<CartItem item={item} key='1'/>];
  // const subTotal = cartObj.subtotal;
  const shipping = 15;
  const calcTax = Number((subTotal * .0975).toFixed(2));
  const total = subTotal + shipping + calcTax;

  return (
    <div id="modal-overlay">
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
        </div>
        <div id="total-summary">
          <p id="subtotal">Subtotal: <span>${subTotal}</span></p>
          <p id="shipping">Shipping: <span>${shipping}</span></p>
          <p id="tax">Tax: <span>${calcTax}</span></p>
          <p id="total">Total: <span>${total}</span></p>
        </div>
        <div id="button-bar">
          <button id="secondary-button" className="form-button" onClick={checkout}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartBar;