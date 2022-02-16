import React, { useState } from 'react';
import '../styles/_reset.css';
import '../styles/_base.css';
import SignInModal from './components/Modals/SignInModal';
import SignUpModal from './components/Modals/SignUpModal';
import CartBar from './components/Cart/CartBar';

const App = () => {

  const [cartToggle, setCartToggle] = useState(false);
  const [signInModalToggle, setSignInModalToggle] = useState(true);
  const [signUpModalToggle, setSignUpModalToggle] = useState(false);

  return (
    <>
      <div>This is Huy</div>
      {cartToggle && <CartBar setCartToggle={setCartToggle}/>}
      {signInModalToggle && <SignInModal setSignInModalToggle={setSignInModalToggle} setSignUpModalToggle={setSignUpModalToggle}/>}
      {signUpModalToggle && <SignUpModal setSignInModalToggle={setSignInModalToggle} setSignUpModalToggle={setSignUpModalToggle}/>}
    </>
  );
};

export default App;