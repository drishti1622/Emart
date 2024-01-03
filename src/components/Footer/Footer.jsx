import React from "react";
import './footer.css'
import footer_logo from '../assets/logo_big.png'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquareInstagram , faPinterest, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'


function Footer(){
    return(
        <div className="footer">
          <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>US COLLECTIONS</p>
          </div>
          <ul className="footer-links">
            <li><Link to='' >Company</Link></li>
            <li><Link to='' >Products</Link></li>
            <li><Link to='' >Offices</Link></li>
            <li><Link to='' >About</Link></li>
            <li><Link to='' >Contact</Link></li>
          </ul>
          <div className="footer-social-icon">
            <div className="icons-container" style={{color:"#ff004f"}}>
            <FontAwesomeIcon icon={faSquareInstagram} />
            </div>
            <div className="icons-container" style={{color:"#b76812"}}>
            <FontAwesomeIcon icon={faPinterest} />
            </div>
            <div className="icons-container"style={{color:"#22b553"}}>
            <FontAwesomeIcon icon={faSquareWhatsapp} />
            </div>
          </div>
          <div className="footer-copyright">
            <hr />
            <p>Copyright &copy; by Drishti | All Rights Reserved</p>
            
          </div>
        </div>
    )
}
export default Footer;