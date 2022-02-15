import React from 'react';
import '../styles/_reset.css';
import '../styles/_base.css';
// import SignInModal from './components/Modals/SignInModal';
import ProductCard from './components/ProductCard';

const App = () => {

  return (
    <>
      <div>This is Huy</div>
      {/* <SignInModal onCloseButtonClick={() => console.log('todo')} /> */}
      <ProductCard/>
    </>
  );
};

export default App;