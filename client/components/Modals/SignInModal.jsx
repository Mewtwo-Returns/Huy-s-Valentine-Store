import React, {useEffect} from 'react';
import '../../../styles/modalStyles.css';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../../slices/userSlice';
import { IconContext } from 'react-icons';

const signInModal =  ({setSignInModalToggle, setSignUpModalToggle}) => {

  const { isSuccess } = useSelector((state) => state.user);

  const signIn = (e) => {
    e.preventDefault();
    const email = e.target.form[0].value;
    const password = e.target.form[1].value;
    console.log('signin', email, password);
    dispatch(getUsername({email, password}));
  };

  useEffect(() => {
    if (isSuccess) setSignInModalToggle(false);
  }, [isSuccess]);

  const dispatch = useDispatch();

  return (
    <div id="modal-overlay">
      <div id="modal-container">
        <IconContext.Provider value={{className: 'exit-modal', size:'1.9em'}}>
          <AiOutlineClose onClick={(e) => setSignInModalToggle(false)}/>
        </IconContext.Provider>
        <div id = "login-section">
          <h1 className="sign-in"> Sign In </h1>
          <div id="sign-in-blurb">
            <p>Sign in so you can save items to your wishlists, track your orders, and check out faster!</p>
          </div>
          <form id="user-form">
            <div>
              <label htmlFor="email">EMAIL*</label>
              <input className="form-input" type="email" name="email" placeholder="Enter your email" required/>
            </div>
            <div>
              <label htmlFor="password">PASSWORD*</label>
              <input className="form-input" type="password" name="password" placeholder="Enter your password" required/>
            </div>
            <div id="button-container">
              <button id="signin-button" className="form-button" onClick={(e) => signIn(e)}>Sign In</button>
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
            <button id="secondary-button" className="form-button" 
              onClick={() => {setSignUpModalToggle(true);setSignInModalToggle(false);}}>
                Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signInModal;