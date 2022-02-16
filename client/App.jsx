import React, { useState } from 'react';
import '../styles/_reset.css';
import '../styles/_base.css';
import '../styles/_transitions.css';
import '../styles/styles.css';
// import SignInModal from './components/Modals/SignInModal';
import ProductCard from './components/ProductCard';
import Banner from './components/banner.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import huyBanner from './assets/huyBanner.png';
// import roses from './assets/roses.jpeg';
import All from './pages/All';
import Shop from './pages/Shop';
import SignInModal from './components/Modals/SignInModal';
import SignUpModal from './components/Modals/SignUpModal';
import LetterModal from './components/Modals/LetterModal';
import {CSSTransition} from 'react-transition-group';
import CartBar from './components/Cart/CartBar';
import '../styles/cart.css';
// import huywelcomingu from './assets/huywelcomingu.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { RiChatHeartFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';

const App = () => {

  const [cartToggle, setCartToggle] = useState(false);
  const [signInModalToggle, setSignInModalToggle] = useState(false);
  const [signUpModalToggle, setSignUpModalToggle] = useState(false);
  const [letterModalToggle, setLetterModalToggle] = useState(false);
  const firstName = useSelector((state) => state.user.firstName);

  return (
    <BrowserRouter>
      <CSSTransition in={cartToggle} timeout={0} classNames="expanded-transition" unmountOnExit appear>
        <CartBar setCartToggle={setCartToggle}/>
      </CSSTransition>
      {signInModalToggle && <SignInModal setSignInModalToggle={setSignInModalToggle} setSignUpModalToggle={setSignUpModalToggle}/>}
      {signUpModalToggle && <SignUpModal setSignInModalToggle={setSignInModalToggle} setSignUpModalToggle={setSignUpModalToggle}/>}
      {letterModalToggle && <LetterModal setLetterModalToggle={setLetterModalToggle}/>}
       
      {/* <ProductCard/> */}
      <div className='grid-container'>
        
        <header className='header'>
          {/* <div className='brand'> */}
          {/* <button onClick={openMenu}>&#9776;</button> */}
          <a href="/" className="title">HUY&apos;S VALENTINE SHOP</a> 
          <BiUserCircle className="icon" size={80} onClick={() => setSignInModalToggle(true)} style={{alignSelf: 'flex-end' , bottom: 8, position:'absolute' , right:125}}/>
          <AiOutlineShoppingCart className="icon" size={75} onClick={() => setCartToggle(true)}
            style={{alignSelf: 'flex-end' , position:'absolute' , bottom: 11, right:50 }}/> 
            <p style={{textShadow: 'none', fontFamily: 'Cute Font', alignItem: 'center', alignSelf: 'flex-end', position:'absolute',  right:250, bottom: 20, fontSize: '5rem', letterSpacing:"1px"}}>Welcome, {firstName ? firstName : 'Guest'}</p>
              
          <div className='header-links'>
            {/* <Link to='/cart'>
                Cart {cartItems.length > 0 ? `(Items: ${cartItems.reduce((a, c) => a + c.qty, 0)})` : 'is empty'}
              </Link> */}
            {/* {user ? <Link to='/profile'>{user.first_name}</Link> : <Link to='/signin'>Sign In</Link>}
              {user && user.isAdmin && (
                <div className='dropdown'>
                <Link to='/orders'>Admin</Link>
                <ul className='dropdown-content'>
                <li>
                <Link to='/orders'>Orders</Link>
                <Link to='/products'>Products</Link>
                </li>
                </ul>
                </div>
              )} */}
          </div>
        </header>
  
        {/* <div id='box'>
            <button className='button'>All</button>
          </div>   */}
        {/* Category Section */}
        <nav className='sidebar'>
          <div id='navbar'>
            <Link to='/all'>
              <button type='button' className="navbtn" onClick={() => <Link to='/all'/>}><span className="bi bi-heart-fill"></span>
                &nbsp;ALL&nbsp;
                <span className="bi bi-heart-fill"></span></button>
            </Link>
            <Link to='/clothing'>
              <button type='button' className="navbtn" onClick={() => <Link to='/clothing'/>}><span className="bi bi-heart-fill"></span>
                &nbsp;CLOTHING&nbsp;
                <span className="bi bi-heart-fill"></span></button>
            </Link>
            <Link to='/miscellaneous'>
              <button type='button' className="navbtn" onClick={() => <Link to='/micellaneous'/>}><span className="bi bi-heart-fill"></span>
                &nbsp;MICELLANEOUS&nbsp;
                <span className="bi bi-heart-fill"></span></button>
            </Link>
            <Link to='/chocolate'>
              <button type='button' className="navbtn" onClick={() => <Link to='/chocolate'/>}><span className="bi bi-heart-fill"></span>
                &nbsp;CHOCOLATE&nbsp;
                <span className="bi bi-heart-fill"></span></button>
            </Link>
            <Link to='/card'>
              <button type='button' className="navbtn" onClick={() => <Link to='/card'/>}>
                <span className="bi bi-heart-fill"></span>
                &nbsp;CARD&nbsp;
                <span className="bi bi-heart-fill"></span></button>
            </Link>
           
            <RiChatHeartFill type="button" className="navbtn" size={45} style={{marginTop: 0}}onClick={() => setLetterModalToggle(true)}/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
          </div>
        </nav>
        
        {/* <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <img id='img1' src={huyBanner} style={{marginTop: '200px', marginRight: '-100px', width: '550px',height: '800px' }}/>
              
                <div id='quote'>
                Is your name Stretch? Because I feel like a king when I'm next to you...
                </div>
                <img id='img2' src={huyWelcomingU} style={{ marginTop: '160px', marginRight: '250px', width: '600px', height:'800px'}}/>
            </div> */}
          
      </div>

      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/all" element={<All />} />
        <Route path="/clothing" element={<Shop page='clothing' />} />
        <Route path="/miscellaneous" element={<Shop page='miscellaneous' />} />
        <Route path="/chocolate" element={<Shop page='sweets' />} />
        <Route path="/card" element={<Shop page='card' />} />
      </Routes>

      {/* <SignUpModal onCloseButtonClick={() => console.log('todo')} /> */}
      {/* {cartToggle && <CartBar setCartToggle={setCartToggle} />} */}
      <footer className='footer'>Copyright &#169; 2019-2022 Huy&apos;s Instagram/Tiktok. All rights reserved.</footer>
    </BrowserRouter>
  ); 
};

export default App;