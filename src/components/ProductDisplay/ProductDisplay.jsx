import React, { useContext } from "react";
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import Button from 'react-bootstrap/Button';
import { Shopcontext } from "../../context/Shopcontext";


function ProductDisplay(props){
          const {product}=props;
          const {addToCart}=useContext(Shopcontext)
    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
               <div className="productdisplay-img-list">
               <img src={product.image} alt="" />
                  <img src={product.image} alt="" />
                  <img src={product.image} alt="" />
               </div>
               <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt="" />
               </div>
            </div>
            <div className="productdisplay-right">
               <h1>{product.name}</h1>
               <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon}alt="" />
                <img src={star_icon}alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
               </div>
               <div className="productdisplay-right-prices">
                <div className="productdisplay-oldprice">
                    ${product.old_price}
                </div>
                <div className="productdisplay-newprice">
                    ${product.new_price}
                </div>
               </div>
               <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea quas vero inventore odio, nam reprehenderit nulla voluptatum ipsam quos.
               </div>
               <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
               </div>
        
            <Button onClick={()=>{addToCart(product.id)}} variant="dark" style={{width:"150px" ,marginBottom:"30px"}}>ADD TO CART</Button>
        
               <p className="right-category"><span>Category :</span>Women , T-Shirt , CropTop</p>
               <p className="right-category"><span>Tags :</span>Modern , Latest</p>
            </div>

        </div>
    )
}
export default ProductDisplay;