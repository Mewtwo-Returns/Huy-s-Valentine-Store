import React, { useEffect } from 'react';
import '../../../styles/modalStyles.css';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../slices/userSlice';
import { IconContext } from 'react-icons';

const signUpModal =  ({setSignInModalToggle, setSignUpModalToggle}) => {

  const { isSuccess } = useSelector((state) => state.user);

  const signUp = (e) => {
    e.preventDefault();
    console.log(e);
    const first_name = e.target.form[0].value;
    const last_name = e.target.form[1].value;
    const email = e.target.form[2].value;
    const user_password = e.target.form[3].value;
    dispatch(signup({first_name, last_name, email, user_password}));
  };

  useEffect(() => {
    if (isSuccess) setSignUpModalToggle(false);
  }, [isSuccess]);

  const dispatch = useDispatch();

  return (
    <div id="modal-overlay">
      <div id="modal-container">
        <IconContext.Provider value={{className: 'exit-modal', size:'1.9em'}}>
          <AiOutlineClose onClick={() => setSignUpModalToggle(false)}/>
        </IconContext.Provider>
        <div id = "login-section">
          <h1 className="sign-in"> Create An Account </h1>
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
              <label htmlFor="email">EMAIL*</label>
              <input className="form-input" type="email" name="email" placeholder="Enter your email" required/>
            </div>
            <div>
              <label htmlFor="password">PASSWORD*</label>
              <input className="form-input" type="password" name="password" placeholder="Enter your password" required/>
            </div>
            <div id="button-container">
              <button id="signin-button" className="form-button" onClick={(e) => signUp(e)}>Sign Up</button>
            </div>
          </form>
        </div>
        <div id="signup-section">
          <div id="sign-up-header">
            <h1 id="secondary-sign-in" className="sign-in"> Sign Up </h1>
          </div>
          <div id="secondary-blurb">
            <p>Welcome! It&apos;s quick and easy to set up an account</p>
          </div>
          <div id="button-container">
            <button id="secondary-button" className="form-button" onClick={() => {setSignUpModalToggle(false);setSignInModalToggle(true);}}>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signUpModal;