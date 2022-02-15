import React from 'react';
import '../../../styles/modalStyles.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { getUsername } from '../../slices/userSlice';
// import logo from '../../assets/danger-pin.png'

const signInModal =  ({onCloseButtonClick}) => {

  const signIn = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    dispatch(getUsername(username, password));
  };

  const dispatch = useDispatch();

  return (
    <div id="modal-overlay">
      <div id="modal-container">
        <AiOutlineCloseCircle class="exit-modal" onClick={(e) => onCloseButtonClick()}/>
        <div id = "login-section">
          <div id="sign-in-header">
            <h1 id="sign-in"> Sign In </h1>
          </div>
          <div id="sign-in-blurb">
            <p>Sign in so you can save items to your wishlists, track your orders, and check out faster!</p>
          </div>
          <form id="user-form">
            <div>
              <label htmlFor="username">USERNAME*</label>
              <input className="form-input" type="text" name="username" placeholder="Enter your username" required/>
            </div>
            <div>
              <label htmlFor="password">PASSWORD*</label>
              <input className="form-input" type="password" name="password" placeholder="Enter your password" required/>
            </div>
            <div id="button-container">
              <button className="form-button" onClick={(e) => signIn(e)}>Sign In</button>
            </div>
          </form>
        </div>
        <div id="signup-section">
          <div id="sign-up-header">
            <h1 id="sign-in"> Sign Up </h1>
          </div>
          <div id="sign-in-blurb">
            <p>Welcome! It&apos;s quick and easy to set up an account</p>
          </div>
          <div id="button-container">
            <button id="signup-button" className="form-button" onClick={console.log('TODO')}>Create an account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signInModal;