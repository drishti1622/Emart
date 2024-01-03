import React, { useState } from "react";
import './Css/loginSignUp.css'


function Login(props){
     const[email,setEmail]=useState('');
     const[pass,setPass]=useState('');

     
      
      const handleClick = () => {
        console.log(props);
         props.onFormSwitch("signup");
      };
      

     const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email)
     }
    return(
        <div className="signup">
            <form className="signup-container" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="signup-fields">
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email Address" id="email" name="email"/>
                    <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password"/>
                </div>
                <div className="text-center my-4">
                <button  className="btn btn-dark" type="submit">Login</button></div>
                <p className="login">Don't have an account? <button  onClick={handleClick}>Register here</button></p>
                
            </form>
        </div>
    )
}
export default Login;