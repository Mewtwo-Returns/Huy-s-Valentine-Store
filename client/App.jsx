import React from 'react';
import '../styles/_reset.css';
import SignInModal from './components/Modals/SignInModal';

const App = () => {

  return (
    <>
      <div>This is Huy</div>
      <SignInModal onCloseButtonClick={() => console.log('todo')} />
    </>
  );
};

export default App;