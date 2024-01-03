import React, { useState } from "react";
import './Css/loginSignUp.css'


function LoginSignUp(props){
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');
    const[name,setName]=useState('');

    
      const handleClick = () => {
        console.log(props);
         props.onFormSwitch("Login");
      };
      

    const isEmailValid = /\S+@\S+\.\S+/.test(email);
// Example password validation (at least 8 characters)
const isPasswordValid = pass.length >= 8;

    const handleSubmit=(e)=>{
       e.preventDefault();
       if (!isEmailValid || !isPasswordValid) {
        // Handle invalid form data (e.g., show error messages)
        return;
     }
  
     // Continue with form submission logic
     console.log("Name:", name);
     console.log("Email:", email);
     console.log("Password:", pass);
    }
    return(
        <div className="signup">
            <form className="signup-container" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div className="signup-fields">
                    <input value={name} onChange={(e)=>setName(e.target.value)}id="name" name="name" type="text" placeholder="Your Name"  />
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} id="email" name="email" type="email" placeholder="Email Address" />
                    <input value={pass} onChange={(e)=>setPass(e.target.value)} id="password" name="password" type="password" placeholder="Password" />
                </div>
                <div className="text-center my-4">
                <button type="submit" className="btn btn-dark">Continue</button></div>
                <p className="login">Already have an account? <button onClick={handleClick}>Login here</button></p>
                <div className="login-agree">
                    <input type="checkbox" name="" id="" required />
                    <p>By Continuing , I agree the terms and conditions related privacy policy</p>
                </div>
            </form>
        </div>
    )
}
export default LoginSignUp;