import React, { useEffect, useState } from 'react';
import './popular.css'
import data_product from '../Assets/data'
import Items from '../items/Items';
function Popular(props) {
    const[popularProducts,setPopularProducts]=useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/popularinwomen')
        .then((res)=>res.json())
        .then((data_product)=>setPopularProducts(data_product))
    },[])
    return (
        <div className='popular'>
            <h1>POPULAR IN WOMENS</h1>
            <hr></hr>
            <div className='popular-item'>
                {data_product.map((items,i)=>{
                  return <Items key={i} id={items.id} name={items.name}
                  image={items.image} new_price={items.new_price} old_price={items.old_price}></Items>
                })}
            </div>
        </div>
    );
}

export default Popular;