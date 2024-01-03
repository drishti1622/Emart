import React, { useContext } from "react";
import './CartItems.css'
import { Shopcontext } from "../../context/Shopcontext";
import remove_icon from '../assets/cart_cross_icon.png';

function CartItems(){
    const {getTotalCartAmount,all_product,cartItems,removeToCart}=useContext(Shopcontext)
    return(
        <div className="cartitem">
          <div className="cartitem-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
         {all_product.map((e)=>{
            if (cartItems[e.id]>0){
                return  <div>
                <div className="cartitem-format cartitem-format-main">
                    <img src={e.image} alt="" className="carticon-producticon" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className="cartitem-quantity">{cartItems[e.id]}</button>
                    <p>${e.new_price * cartItems[e.id]}</p>
                    <img className="cartitem-removeicon" src={remove_icon} onClick={()=>{removeToCart(e.id)}} alt="" />
                </div>
                <hr />
              </div>
            }
            return null;
         })}

         <div className="cartitem-down">
          <div className="cartitem-total">
            <h3>Cart Total</h3>
            <div>
              <div className="cartitem-totalitem">
                <p>SubTotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitem-totalitem">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitem-totalitem">
                <h6>Total</h6>
                <h6>${getTotalCartAmount()}</h6>
              </div>
            </div>
            <button>Proceed to Checkout</button>
          </div>
          <div className="cartitem-promocode">
            <p>If you have a promocode , enter it here</p>
            <div className="cartitem-promobox">
              <input type="text" placeholder="PromoCode"/>
              <button>Submit</button>
            </div>
          </div>
         </div>
        </div>
    )
}
export default CartItems