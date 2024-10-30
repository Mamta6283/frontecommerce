import React, { createContext, useEffect, useState }  from "react";
import all_product from '../components/Assets/all_product'

export const ShopContext = createContext(null);
const getDefaultCart=()=>{
    let cart ={}
    for (let index = 0; index <all_product.length+1; index++) {
       
        cart[index]=0;
    }
    return cart;
}
const ShopContextProvider=(props)=>{
    const [cartItem,setCartItem]=useState(getDefaultCart)
    // const[all_product,setAll_product]=useState([])

    // useEffect(()=>{
    //     fetch('http://localhost:4000/allproducts')
    //     .then((res)=>res.json())
    //     .then((data)=>setAll_product(data))

        // if(localStorage.getItem('auth-token')){
        //     fetch('http://localhost:4000/getcart',{
        //         method:"POST",
        //         headers:{
        //             Accept:"application/json",
        //             "auth-token":`${localStorage.getItem('auth-token')}`,
        //             'Content-Type':"application/json"
        //         },
        //         body:"",

        //     }).then((res)=>res.json())
        //     .then((data)=>setCartItem(data))
        // }
    // },[])

    // Use async/await for fetching data
//   useEffect(() => {
//     const fetchData = async () => {
//       try { 
//         // Fetch all products
//         const resProducts = await fetch("http://localhost:4000/allproducts");
//         if (!resProducts.ok) throw new Error("Failed to fetch products");
//         const products = await resProducts.json();
//         setAll_product(products);

//         // Fetch user cart if authenticated
//         const authToken = localStorage.getItem("auth-token");
//         if (authToken) {
//           const resCart = await fetch("http://localhost:4000/getcart", {
//             method: "POST",
//             headers: {
//               Accept: "application/json",
//               "auth-token": authToken,
//               "Content-Type": "application/json",
//             },
//           });
//           if (!resCart.ok) throw new Error("Failed to fetch cart");
//           const cartData = await resCart.json();
//           setCartItem(cartData);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

    // console.log(cartItem)

    const addToCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItem)
        if(localStorage.getItem('auth-token'))
        {
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-type':"application/json"
                },
                body:JSON.stringify({"itemId":itemId}),
            }).then((res)=>res.json())
            .then((data)=>console.log(data))
  
        }
    }
  
 const removeFromCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-type':"application/json"
                },
                body:JSON.stringify({"itemId":itemId}),
            }).then((res)=>res.json())
            .then((data)=>console.log(data))
        }
    }  

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItem)
        {
             if(cartItem[item]>0)
             {
                let itemInfo=all_product.find((product)=>product.id===Number(item))
                totalAmount+=itemInfo.new_price*cartItem[item]
             }
           
        }
        console.log(totalAmount)
        return totalAmount;
    }
    
    const getTotalCartItems=()=>{
        let  totalItem=0;
        for(const item in cartItem)
        {     
            if(cartItem[item]>0)
            {    
             totalItem+=cartItem[item]  
            }    
       }    
       console.log(totalItem)
        return totalItem;
    }   

    const contextValue={getTotalCartItems,all_product,cartItem ,addToCart,removeFromCart,getTotalCartAmount}
    return(
        <ShopContext.Provider value={contextValue }>
            {props.children}
        </ShopContext.Provider>

    )
}
export default ShopContextProvider;







