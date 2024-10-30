import React from 'react';
import './Description.css'

function Description(props) {
    return (
        <div className='descriptionbox'>
            <div className="description-navigator">
                <div className="descriptionbox-nav-box">
                  Description
                </div>
                <div className="descriptionbox-nav-box fade"> 
                    Reviews(122)
                    </div>
            </div>
            <div className="description-box-dec">
                <p>A e-commerce website is an online perform that facilitating 
                    buying and selling of products or services over the internet 
                    servers as a virtual marketplace where buisness and individuals showcase their products 
                    interact with customers ,and conduction transactions without the need for a physical presence 
                    e-commerce website have gained imense popularity due to their convenient 
                    accessibility and the global reach they offer 
                </p>
                <p>A e-commerce website is an online perform that facilitating 
                    buying and selling of products or services over the internet 
                    servers as a virtual marketplace where buisness and individuals showcase their products 
                    interact with customers ,and conduction transactions without the need for a physical presence 
                    e-commerce website have gained imense popularity due to their convenient 
                    accessibility and the global reach they offer </p>
            </div>
        </div>
    );
}

export default Description;