// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './components/Navi';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/Product';
import Cart from './pages/cart'
import LoginSignUp from './pages/LoginSignUp'
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png'
import Category from './pages/Category'
import Login from './pages/Login';
import { useState } from 'react';
import React from 'react';




function App() {
  const[currentForm,setCurrentForm]=useState('Login');
    
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  

  return (
    <div >
      
     <BrowserRouter>
     <Navi/>
     <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/men' element={<Category banner={men_banner} category="men"/>}/>
      <Route path='/women' element={<Category  banner={women_banner}  category="women"/>}/>
      <Route path='/kids' element={<Category  banner={kid_banner}  category="kid"/>}/> 
      <Route path='/product' element={<Product/>}>
        <Route path=':id' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
       <Route path='/Login' element={<>{currentForm === 'Login' ? <Login onFormSwitch={toggleForm}/> : <LoginSignUp onFormSwitch={toggleForm}/>}</>}/>
      <Route path="/signup" element={<>{currentForm === 'Login' ? <Login onFormSwitch={toggleForm}/> : <LoginSignUp onFormSwitch={toggleForm}/>}</>} /> 
     </Routes>
     <Footer/>
     </BrowserRouter>

    </div>
  );
}

export default App;
