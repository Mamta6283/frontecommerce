import React from 'react';
import './NewsLetter.css'

function NewsLetter(props) {
    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offers On Your Emails</h1>
            <p>Subscribe to Our newsletter and stay updated</p>
            <div>
                <input type='email' name='email' placeholder='Your Email Id'/>
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default NewsLetter;