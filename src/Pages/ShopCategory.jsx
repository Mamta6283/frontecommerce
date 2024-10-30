import React, { useContext } from 'react';
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Items from '../components/items/Items';

function ShopCategory(props) {
    const {all_product}=useContext(ShopContext)
    // const{category}=props
    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexsort">
                <p>
                    <span>Showing 1-12</span>out of 36 products
                </p>
                <div className="shopcategory-sort">
                    sort by<img src={dropdown_icon} alt=''></img>
                </div>
         </div>
                <div className="shopcategory_product">
                     {all_product.map((items,i)=>{
                        if(props.categoryall===items.category){
                            return <Items key={i} id={items.id} name={items.name}
                            image={items.image} new_price={items.new_price} old_price={items.old_price}></Items>
                        
                        }
                        else{
                            return null;
                        }
                    })} 
                  
                </div>
               <div className="shopcategory-loadmore">
                Explore More
               </div>
           
        </div>
    );
}

export default ShopCategory;