import React, { useContext } from 'react';
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext';
import cross_icon from '../Assets/cross_icon.png'

function CartItems(props) {
    const {all_product,cartItem,removeFromCart,getTotalCartAmount}=useContext(ShopContext)
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
           {all_product.map((e)=>{
            if(cartItem[e.id]>0)
            {
                return  <div>
                <div className="cartitem-format cartitems-format-main ">
                    <img src={e.image} alt=""className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitem-quantity'>{cartItem[e.id]}</button>
                    <p>${e.new_price*cartItem[e.id]}</p>

                    <img src={cross_icon} onClick={()=>{
                        removeFromCart(e.id)
                    }}  className=' cartitem-remove-icon' alt="" />
                </div>
                <hr />
            </div>
            }
            return null;
           })}
           <div className="cartitem-down">
            <div className="cartitem-total">
                <h1>cart Totals</h1>
            <div>
                    <div className="cartitem-totalitem">
                        <p>subtotal </p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                <hr />
                <div className="cartitem-totalitem">
                    <p>shipping fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitem-totalitem">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                  
                </div>
                <div className='cartitem-totalitem'>

                <button >Proceed To check Out</button>
                </div>
            </div>
            {/* <button >Proceed To check Out</button> */}

                
        </div>
           </div>
           <div className="cartitems-promocode">
            <p>If you have promo code Enter it here</p>
            <div className="cartitem-promobox">
                <input type="text" placeholder='promocode' />
                <button>Submit</button>
            </div>
           </div>
        </div>
    );
}

export default CartItems;