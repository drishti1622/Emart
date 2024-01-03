import React, { createContext, useState } from "react";
import all_product from '../components/assets/all_product'

export const Shopcontext= createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;
        
    }
    return cart;
}

const ShopcontextProvider=(props)=>{
    const[cartItems,setCartItems]=useState(getDefaultCart())

    const addToCart=(id)=>{
        setCartItems((prev)=>({...prev,[id]:(prev[id] || 0)+1}))
        console.log(cartItems);
    }
    const removeToCart=(id)=>{
        setCartItems((prev)=>({...prev,[id]:prev[id]-1}))
    }
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = ()=>{
        let Totalitem=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                Totalitem +=cartItems[item];
            }
        }
        return Totalitem;
    }
    const contextValue={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeToCart};
        return(
            <Shopcontext.Provider value={contextValue}>
                {props.children}
            </Shopcontext.Provider>
        )
}
export default ShopcontextProvider;