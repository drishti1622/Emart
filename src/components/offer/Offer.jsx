import React from "react";
import './offer.css'
import exclusive_image from '../assets/exclusive_image.png';
import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom";



function Offer(){
    return(
        <div className="offer">
           <div className="offer-left text-center ">
            <h1>EXCLUSIVE</h1>
            <h1>Offers For You</h1>
            <p>ONLY BESTSELLERS PRODUCT</p>
            <div className="text-center">
            <Button variant="dark" style={{width:"150px"}}>Check Now</Button>
            </div>
           </div>
           <div className="offer-right">
             <img src={exclusive_image} alt="" />
           </div>
        </div>
    )
}
export default Offer;