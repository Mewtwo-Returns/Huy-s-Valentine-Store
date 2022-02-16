import React, { useState } from 'react';
import '../styles/_reset.css';
import '../styles/_base.css';
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
import CartBar from './components/Cart/CartBar';
// import huywelcomingu from './assets/huywelcomingu.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';

const App = () => {

  const [cartToggle, setCartToggle] = useState(false);

  return (
    
      <BrowserRouter>
       
      {/* <ProductCard/> */}
        <div className='grid-container'>
        
          <header className='header'>
            {/* <div className='brand'> */}
              {/* <button onClick={openMenu}>&#9776;</button> */}
              <BiUserCircle className="icon" size={80} style={{alignSelf: "flex-end" , bottom: 8, position:'absolute' , right:125}}/>
              <AiOutlineShoppingCart className="icon" size={75} 
              style={{alignSelf: "flex-end" , position:'absolute' , bottom: 11, right:50 }}/> 
              <a href="/">HUY'S VALENTINE SHOP</a> 
              
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
            <div id='box'>
              <Link to='/all'>
                <button type='button' className="btn btn-primary" onClick={() => <Link to='/all'/>}><span className="bi bi-heart-fill"></span>
                &nbsp;ALL&nbsp;
                <span className="bi bi-heart-fill"></span></button>
              </Link>
              <Link to='/clothing'>
                <button type='button' className="btn btn-primary" onClick={() => <Link to='/clothing'/>}><span className="bi bi-heart-fill"></span>
                &nbsp;CLOTHING&nbsp;
                <span className="bi bi-heart-fill"></span></button>
              </Link>
              <Link to='/miscellaneous'>
                <button type='button' className="btn btn-primary" onClick={() => <Link to='/micellaneous'/>}><span className="bi bi-heart-fill"></span>
                &nbsp;MICELLANEOUS&nbsp;
                <span className="bi bi-heart-fill"></span></button>
              </Link>
              <Link to='/chocolate'>
                <button type='button' className="btn btn-primary" onClick={() => <Link to='/chocolate'/>}><span className="bi bi-heart-fill"></span>
                &nbsp;CHOCOLATE&nbsp;
                <span className="bi bi-heart-fill"></span></button>
              </Link>
              <Link to='/card'>
                <button type='button' className="btn btn-primary" onClick={() => <Link to='/card'/>}>
                  <span className="bi bi-heart-fill"></span>
                &nbsp;CARD&nbsp;
                <span className="bi bi-heart-fill"></span></button>
              </Link>
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
            {cartToggle && <CartBar setCartToggle={setCartToggle} />}
          <footer className='footer'>Copyright &#169; 2019-2022 Huy's Instagram/Tiktok. All rights reserved.</footer>
    </BrowserRouter>
  ); 
  }

export default App;