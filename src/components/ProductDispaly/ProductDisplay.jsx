import React, { useContext } from 'react';
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext';
function ProductDisplay(props) {
    const{product}=props
    const {addToCart}=useContext(ShopContext)
    return (
       
        <div className='product-display'>
            <div className="productdisplay-left">
              <div className="product-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
              </div>
              <div className="product-image">
                <img className='productdisplay-main-img' src={product.image} alt="" />
              </div>
            </div>
            <div className="productdisplay-right">
                   <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>

                </div>
                   <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                       <p>${product.old_price}</p>  
                        <div className="productdisplay-right-price-new">
                            ${product.new_price}
                        </div>
                        <div className="productdisplay-right-description">
                        A lightweight usually knitted ,pullover shirt,close-fitting and with a round neckline and short sleeves ,worn as an undershift or outer garment
                        </div>
                        <div className="productdisplay-right-size">
                            <h1>select size</h1>
                            <div className="productdisplay-right-sizes">
                                <div>S</div>
                                <div>M</div>
                                <div>L</div>
                                <div>XL</div>
                                <div>XXl</div>
                            </div>
                        </div>
                        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                        <p className='productdisplay-right-category'>
                            <span>category:</span> Women, To Shirt ,Crop Topp
                        </p>
                        <p className='productdisplay-right-category'>
                            <span>Tags:</span> Modern latest
                        </p>
                    </div>

                   </div>
            </div>
            </div>
       
     
    );
}

export default ProductDisplay;