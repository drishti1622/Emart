import React from "react";
import './NewsLetter.css'
import Button from 'react-bootstrap/Button';


function NewsLetter(){
    return(
        <div className="newsletter">
                 <h1 className="display-6 fw-bold text-center">GET EXCLUSIVE OFFERS ON YOUR EMAIL </h1>
                 <p>Subscribe to our NewsLetter and stay updated</p>
                 <div>
                    <input type="email" placeholder="Your Email ID" />
                    <Button variant="dark" style={{width:"150px"}} className="me-3">SUBSCRIBE </Button>
                 </div>

        </div>
    )
}
export default NewsLetter;