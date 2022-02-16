import React from 'react';
import '../styles/_reset.css';
import '../styles/_base.css';
import '../styles/styles.css';
// import SignInModal from './components/Modals/SignInModal';
import ProductCard from './components/ProductCard';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import huyBanner from './assets/huyBanner.png';
import huyBanner2 from './assets/huyBanner2.png';
import huyWelcomingU from './assets/huyWelcomingU.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';

const App = () => {

  return (
    
      <BrowserRouter>
        <div className='grid-container'>
        
          <header className='header'>
            {/* <div className='brand'> */}
              {/* <button onClick={openMenu}>&#9776;</button> */}
              <BiUserCircle className="icon" size={80} style={{alignSelf: "flex-end" , bottom: 8, position:'absolute' , right:125}}/>
              <AiOutlineShoppingCart className="icon" size={75} 
              style={{alignSelf: "flex-end" , position:'absolute' , bottom: 11, right:50 }}/> 
              <a href="#">HUY'S VALENTINE SHOP</a> 
              
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
                <button type='button' className="btn btn-primary" onClick={() => <Link to='/all'/>}><span className="bi bi-heart-fill"></span>
                &nbsp;ALL&nbsp;
                <span className="bi bi-heart-fill"></span></button>
           
                <button type='button' className="btn btn-primary" onClick={() => <Link to='/clothing'/>}><span className="bi bi-heart-fill"></span>
                &nbsp;CLOTHING&nbsp;
                <span className="bi bi-heart-fill"></span></button>
         
                <button type='button' className="btn btn-primary" onClick={() => <Link to='/micellaneous'/>}><span className="bi bi-heart-fill"></span>
                &nbsp;MICELLANEOUS&nbsp;
                <span className="bi bi-heart-fill"></span></button>
         
                <button type='button' className="btn btn-primary" onClick={() => <Link to='/chocolate'/>}><span className="bi bi-heart-fill"></span>
                &nbsp;CHOCOLATE&nbsp;
                <span className="bi bi-heart-fill"></span></button>
           
                <button type='button' className="btn btn-primary" onClick={() => <Link to='/card'/>}>
                  <span className="bi bi-heart-fill"></span>
                &nbsp;CARD&nbsp;
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
            {/* <div id='bannerimage'> */}
            {/* <ProductCard/> */}
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              {/* <img id='img1' src={huyBanner} style={{marginTop: '80px', marginRight: '0px', width: '650px',height: '900px' }}/> */}
                <div id='quote'>
                Is your name Stretch? Because I feel like a king when I'm next to you...
                </div>
                <img id='img2' src={huyWelcomingU} style={{ marginTop: '160px', marginRight: '200px', width: '600px', height:'800px'}}/>
            </div>
            {/* </div> */}
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
      </div>
      <footer className='footer'>Copyright &#169; 2019-2022 Huy's Instagram/Tiktok. All rights reserved.</footer>
    </BrowserRouter>
  ); 
  }



export default App;