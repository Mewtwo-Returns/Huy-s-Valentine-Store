import React from 'react';
import '../styles/_reset.css';
import '../styles/_base.css';
import SignInModal from './components/Modals/SignInModal';
import SignUpModal from './components/Modals/SignUpModal';
import CartBar from './components/Cart/CartBar';

const App = () => {

  return (
    <>
      <div>This is Huy</div>
      {/* <SignUpModal onCloseButtonClick={() => console.log('todo')} /> */}
      <CartBar />
    </>
  );
};

export default App;