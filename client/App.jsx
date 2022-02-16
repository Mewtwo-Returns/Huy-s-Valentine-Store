import React, { useState } from 'react';
import '../styles/_reset.css';
import '../styles/_base.css';
import '../styles/_transitions.css';
import SignInModal from './components/Modals/SignInModal';
import SignUpModal from './components/Modals/SignUpModal';
import LetterModal from './components/Modals/LetterModal';
import {CSSTransition} from 'react-transition-group';
import CartBar from './components/Cart/CartBar';
import '../styles/cart.css';

const App = () => {

  const [cartToggle, setCartToggle] = useState(false);
  const [signInModalToggle, setSignInModalToggle] = useState(false);
  const [signUpModalToggle, setSignUpModalToggle] = useState(false);
  const [letterModalToggle, setLetterModalToggle] = useState(true);

  return (
    <div id="app">
      <div>This is Huy</div>
      <button onClick={() => setCartToggle(true)}>
        fdas
      </button>
      <CSSTransition in={cartToggle} timeout={0} classNames="expanded-transition" unmountOnExit appear>
        <CartBar setCartToggle={setCartToggle}/>
      </CSSTransition>
      {signInModalToggle && <SignInModal setSignInModalToggle={setSignInModalToggle} setSignUpModalToggle={setSignUpModalToggle}/>}
      {signUpModalToggle && <SignUpModal setSignInModalToggle={setSignInModalToggle} setSignUpModalToggle={setSignUpModalToggle}/>}
      {letterModalToggle && <LetterModal setLetterModalToggle={setLetterModalToggle}/>}
    </div>
  );
};

export default App;