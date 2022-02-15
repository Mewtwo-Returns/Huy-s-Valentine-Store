import React from 'react';
import '../styles/_reset.css';
import '../styles/_base.css';
import '../styles/styles.css';
// import SignInModal from './components/Modals/SignInModal';
import ProductCard from './components/ProductCard';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import huyBanner from './assets/huyBanner.png';
import roses from './assets/roses.jpeg';

const App = () => {

  return (
    
      <BrowserRouter>
      {/* <ProductCard/> */}
        <div className='grid-container'>
  
          <header className='header'>
            <div className='brand'>
              {/* <button onClick={openMenu}>&#9776;</button> */}
              <Link to='/'>Huy's Valentine Shop</Link>
              {/* <div style={{display: 'flex', alignItems: 'center'}} > <button type='button' className="btn btn-primary" onClick={() => {console.log('hi')}}><span className="bi bi-heart-fill"></span>
                  All
                <span className="bi bi-heart-fill"></span></button>
              </div>   */}
            </div>
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
                <button type='button' className="btn btn-primary" onClick={() => {console.log('hi')}}><span className="bi bi-heart-fill"></span>
                  All
                <span className="bi bi-heart-fill"></span></button>
           
                <button type='button' className="btn btn-primary" onClick={() => {console.log('hi')}}><span className="bi bi-heart-fill"></span>
                  Clothing
                <span className="bi bi-heart-fill"></span></button>
         
                <button type='button' className="btn btn-primary" onClick={() => {console.log('hi')}}><span className="bi bi-heart-fill"></span>
                  Micellaneous
                <span className="bi bi-heart-fill"></span></button>
         
                <button type='button' className="btn btn-primary" onClick={() => {console.log('hi')}}><span className="bi bi-heart-fill"></span>
                  Chocolate
                <span className="bi bi-heart-fill"></span></button>
           
                <button type='button' className="btn btn-primary" onClick={() => {console.log('hi')}}><span className="bi bi-heart-fill"></span>
                  Cards
                <span className="bi bi-heart-fill"></span></button>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
           </div>
          </nav>
        {/* <img src='building.jpg' align='left' /> */}
          {/* Main Content Section */}
          {/* <div className='content'>
            <main className='main'> */}
              {/* <Route path='/all' component={RegisterContainer} />
              <Route path='/card' component={SigninContainer} />
              <Route path='/miscellaneous' component={ProfileContainer} />
              <Route path='/clothing' exact component={ProductsContainer} />
              <Route path='/' exact component={HomeContainer} /> */}
          {/* <body> */}
            {/* <div className="gfg"> */}
            {/* <img  src={roses}> */}
            <div id='bannerimage'>
            <img src={huyBanner} />
            </div>
            {/* </img> */}
              {/* <h3 className="first-txt">
                GeeksforGeeks
              </h3>
      
              <h3 className="second-txt">
                A computer science portal
              </h3>
            </div>
          </body> */}
            {/* </main>
          </div> */}
        <footer className='footer'>Copyright &#169; 2019 Huy's Instagram/Tiktok. All rights reserved.</footer>
      </div>
    </BrowserRouter>
  ); 
  }



export default App;