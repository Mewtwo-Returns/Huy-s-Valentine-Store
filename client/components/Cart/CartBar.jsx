import React from 'react';
import { BsBoxArrowRight } from 'react-icons/bs';
import { IoCartOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import '../../../styles/cart.css'

const CartBar = (props) => {

  // const items = useSelector((state) => state.cart.items);
  // const cart = items.map((item, idx) => {
  //   <CartItem item={item} key={idx}/>;
  // });

  const item = 
  {name:'rurubear', price:'69.69', 
    imgSrc:'https://www.google.com/search?q=bear&newwindow=1&rlz=1C1CHBF_enUS926US926&sxsrf=APq-WBu2R_ng5aKE7R3bT9SSEzRqOAlW8w:1644955957241&tbm=isch&source=iu&ictx=1&vet=1&fir=4pmHKW_ibk5lHM%252C_44HmSV8bjuyUM%252C%252Fm%252F01dws%253Bcl-N6jp1kdRVFM%252CT0ykaEdayPVliM%252C_%253Be9Cdbm42G0KSyM%252C9AZ3Ofag3gKqnM%252C_%253BvDvfzY6M55wL5M%252CjY3Eu-hQkjMyVM%252C_%253Bwygrv1m1Nx-HPM%252CiIpysUGamGsiyM%252C_%253BtLEHQpVh-uvdeM%252C7gW1Yg3rpR3ykM%252C_%253BkX2jrdsVcSaZ4M%252Cenu_UdVHllKHPM%252C_&usg=AI4_-kRnQC64-EINJOIe5W7NOSy6mxfzZQ&sa=X&ved=2ahUKEwj4iIK8woL2AhWrd98KHV-gB7oQ_B16BAg6EAE#imgrc=4pmHKW_ibk5lHM',
  };
  const cart = [<CartItem item={item} key='1'/>];

  return (
    <div id="cart-sidebar">
      <IconContext.Provider value={{className: 'minimize-cart', size:'1.5em'}}>
        <BsBoxArrowRight onClick={() => props.setExpandedPost(false)}/>
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
        <p id="subtotal">Subtotal: <span>$5</span></p>
        <p id="shipping">Shipping: <span>$5</span></p>
        <p id="tax">Tax: <span>$5</span></p>
        <p id="total">Total: <span>$5</span></p>
      </div>
      <div id="button-bar">
        <button id="secondary-button" className="form-button" onClick={console.log('TODO')}>Checkout</button>
      </div>
    </div>
  );
};

export default CartBar;