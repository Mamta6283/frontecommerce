import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrums from '../components/BreadCrums/BreadCrums';
import ProductDisplay from '../components/ProductDispaly/ProductDisplay';
import star_icon from "../components/Assets/star_icon.png"
import star_dull_icon from '../components/Assets/star_dull_icon.png'
import Items from '../components/items/Items';
import Description from '../components/Description/Description';
import RelatedProduct from '../components/RelatedProducts/RelatedProduct';
function Product(props) {
    const {all_product}=useContext(ShopContext)
    console.log(all_product)
    const{productId}=useParams()
    
    const product=all_product.find((e)=>e.id=== Number(productId ))
    console.log(product)
    
    return (
        <div>
            {/* <BreadCrums></BreadCrums>
            <ProductDisplay></ProductDisplay> */}

            <BreadCrums product={product}></BreadCrums> 
            <ProductDisplay product={product}></ProductDisplay>
          <Description></Description>
          <RelatedProduct></RelatedProduct>
        </div>
    );
}

export default Product;