import React from 'react';
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
function Hero(props) {
    return (

        <div className='hero'>
            
            <div className='hero-left'>
              <h2>NEW ARRIVALS ONLY</h2>
              <div>
                 <div className='hero-hand-icon'>
                 <p>new</p>
                 <img src={hand_icon} alt="" />
                 </div>
                 <p>Collections</p>
                 <p>for everyone</p>
            </div>
            <div className='hero-latest-btn'>
                  <div>latest Collections</div>
                  <img src={arrow} alt="" />
            </div>
            
            </div>
           
            

            <div className='hero-right'>
             <img src={hero_image} alt="" width="560px" />
            </div>
        </div>
    );
}

export default Hero;