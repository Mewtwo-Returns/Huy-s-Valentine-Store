import React from 'react';
import '../../styles/styles.css';

import huywelcomingu from '../assets/huywelcomingu.png';
import huyBanner from '../assets/huyBanner.png';

const Banner = () => {


  return(
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <img id='img1' src={huyBanner} style={{marginTop: '350px', marginRight: '-300px', width: '550px',height: '800px' }}/>
      
      <div id='quote'>
      Is your name Stretch? Because I feel like a king when I'm next to you...
      </div>
      <img id='img2' src={huywelcomingu} style={{ marginTop: '200px', marginRight: '90px', width: '700px', height:'900px'}}/>
    </div>
  );
};

export default Banner;