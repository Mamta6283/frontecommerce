import React, { useContext } from 'react';
import './BreadCrum.css'
import breadcrum_arrow from '../Assets/breadcrum_arrow.png'
import { ShopContext } from '../../context/ShopContext';
import Items from '../items/Items';

function BreadCrums(props) {
    const {product}=props
   
    return (
        <div className='breadcrum'>
        
            HOME <img src={breadcrum_arrow} alt="" /> SHOP <img src={breadcrum_arrow} alt="" />
            {product.category} <img src={breadcrum_arrow} alt="" />{product.name}
           
        </div>
    );
}

export default BreadCrums;
