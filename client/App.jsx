import React, { useState } from 'react';
import '../styles/_reset.css';
import '../styles/_base.css';
import SignInModal from './components/Modals/SignInModal';
import SignUpModal from './components/Modals/SignUpModal';
import CartBar from './components/Cart/CartBar';

const App = () => {

  const [cartToggle, setCartToggle] = useState(true);

  return (
    <>
      <div>This is Huy</div>
      {/* <SignUpModal onCloseButtonClick={() => console.log('todo')} /> */}
      {cartToggle && <CartBar setCartToggle={setCartToggle}/>}
    </>
  );
};

export default App;