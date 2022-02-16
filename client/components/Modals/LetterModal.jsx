import React, { useRef } from 'react';
import '../../../styles/modalStyles.css';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init('user_bhd0Ro6wl5h7aCXuK7G1t');

const signInModal =  ({setLetterModalToggle}) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3uqc0j7', 'template_sisbveo', form.current)
      .then((result) => {
        console.log(result.text);
        setLetterModalToggle(false);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id="modal-overlay">
      <div id="modal-container">
        <IconContext.Provider value={{className: 'exit-modal', size:'1.9em'}}>
          <AiOutlineClose onClick={(e) => setLetterModalToggle(false)}/>
        </IconContext.Provider>
        <div id = "login-section">
          <h1 className="sign-in"> Love Letter </h1>
          <div id="sign-in-blurb">
            <p>Send a love letter to your lonely friends 😢</p>
          </div>
          <form id="user-form" ref={form} onSubmit={sendEmail}>
            <div>
              <label htmlFor="send_to">RECIPIENT EMAIL*</label>
              <input className="form-input" type="email" name="send_to" placeholder="Enter email of recipient" required/>
            </div>
            <div>
              <label htmlFor="from_name">FROM*</label>
              <input className="form-input" type="text" name="from_name" placeholder="Enter your name" required/>
            </div>
            <div>
              <label htmlFor="to_name">TO*</label>
              <input className="form-input" type="text" name="to_name" placeholder="Enter recipient name" required/>
            </div>
            <div>
              <label htmlFor="message">MESSAGE*</label>
              <textarea className="form-input" type="textarea" name="message" placeholder="Send a message" rows="4" cols="50" required/>
            </div>
            <div id="button-container">
              <input type="submit" id="signin-button" className="form-button" value="send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signInModal;