import React, { useContext, useRef, useState } from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png'

function Navbar(props) {
    const [menu,setMenu]=useState("shop")
    const {getTotalCartItems}=useContext(ShopContext)
     const menuRef=useRef()
     const dropdown_toggle=(e)=>{
             menuRef.current.classList.toggle('nav-menu-visible')
             e.target.classList.toggle('open')
     }
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div> 
            <img className='nav-dropdown' src={nav_dropdown} alt="" onClick={dropdown_toggle} />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:'none'}}>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
                {/* <li><Link to="/home">Shop</Link></li> */}
                <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:'none'}}>Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{textDecoration:'none'}}>Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
                {/* <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}>Beauty</Link>{menu==="kids"?<hr/>:<></>}</li> */}
                {/* <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}>Home&living</Link>{menu==="kids"?<hr/>:<></>}</li> */}
            </ul>
            
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link to='/login'> <button>Login</button></Link>}
              
               <Link to='/cart'> <img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;