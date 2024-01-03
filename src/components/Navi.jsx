import React, { useContext, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/logo.png';
import cart_icon from './assets/cart_icon.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {  faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import { Shopcontext } from "../context/Shopcontext";



function Navi() {
    const [menu, setMenu]=useState("home");
    const {getTotalCartItems}=useContext(Shopcontext) || {};
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary bg-white py-1 shadow-sm">
      <Container >
        <div className="nav-logo">
            <img src={logo} alt="" />
        <Navbar.Brand href="/" className='fw-bold fs-4'>US COLLECTIONS</Navbar.Brand>
        </div>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
           <Nav
            className="mx-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <Link to="/" className="nav-link" onClick={()=>{setMenu("home")}}>Home {menu==="home"? <hr/> : <></>}</Link>
            <Link to='/men' className="nav-link" onClick={()=>{setMenu("men")}}>Men {menu==="men"? <hr/> : <></>}</Link>
            <Link to='/women' className="nav-link" onClick={()=>{setMenu("women")}}>Women {menu==="women"? <hr/> : <></>}</Link>
            <Link to='/kids' className="nav-link" onClick={()=>{setMenu("kid")}}>Kids {menu==="kid"? <hr/> : <></>}</Link>
            
          </Nav>
          
          <div className="nav-cart">
          <Link to="/Login" className="btn btn-outline-dark ms-10"><FontAwesomeIcon icon={faRightFromBracket} transform='left-4'/>Login</Link>
          <Link to='/cart'><img src={cart_icon} className="ms-5" alt="" /></Link>
          <div className="cart-count">{getTotalCartItems()}</div>
            </div> 
           
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  );
}
export default Navi;
