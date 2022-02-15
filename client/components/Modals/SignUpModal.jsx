import React from 'react';
import '../../../styles/modalStyles.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { signup } from '../../slices/userSlice';
// import logo from '../../assets/danger-pin.png'

const signUpModal =  ({onCloseButtonClick}) => {

  const signUp = (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    dispatch(signup(firstName, lastName, username, password));
  };

  const dispatch = useDispatch();

  return (
    <div id="modal-overlay">
      <AiOutlineCloseCircle onClick={(e) => onCloseButtonClick()}/>
      <div id = "login-section">
        <div id="sign-in-header">
          <h1 id="sign-in"> Create An Account </h1>
        </div>
        <div id="sign-in-blurb">
          <p>Welcome to Huy&apos;s Valentine&apos;s Day shop! It&apos;s quick and easy to set up an account.</p>
        </div>
        <form id="user-form">
          <div>
            <label htmlFor="firstName">FIRST NAME</label>
            <input className="form-input" type="text" name="firstName" placeholder="Enter your first name"/>
          </div>
          <div>
            <label htmlFor="lastName">LAST NAME</label>
            <input className="form-input" type="text" name="lastName" placeholder="Enter your last name"/>
          </div>
          <div>
            <label htmlFor="username">USERNAME*</label>
            <input className="form-input" type="text" name="username" placeholder="Enter your username" required/>
          </div>
          <div>
            <label htmlFor="password">PASSWORD*</label>
            <input className="form-input" type="password" name="password" placeholder="Enter your password" required/>
          </div>
          <div id="button-container">
            <button className="form-button" onClick={(e) => signUp(e)}>Sign Up</button>
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
          <button id="signup-button" className="form-button" onClick={console.log('TODO')}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default signUpModal;