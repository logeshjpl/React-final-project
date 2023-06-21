import React from 'react';

//import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';


//import { CartProvider } from 'react-use-cart';
import Header from '../Header/Header';
import Section from '../Section/Section'
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
import Section3 from '../Section3/Section3';
import Section4 from '../Section4/Section4';
import Section5 from '../Section5/Section5';
import Section6 from '../Section6/Section6';
import Section7 from '../Section7/Section7';
import Section8 from '../Section8/Section8';
import Section9 from '../Section9/Section9';
import Section10 from '../Section10/Section10';
import Section11 from '../Section11/Section11';
import Section12 from '../Section12/Section12';
import Home from '../Navbar/Navbar';




      {/* <BrowserRouter>
     
    <Routes>
    <Route exact path='/' element={<Header/>}/>
    <Route exact path='/about' element={<Section1/>}/>
    <Route exact path='/service' element={<Section2/>}/>
    <Route exact path='/doctors' element={<Section5/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/signup' element={<Signup/>}/>
    <Route exact path='/blog' element={<Section9/>}/>
    <Route exact path='/appointment' element={<Section4/>}/>
    <Route exact path='/contact' element={<Section11/>}/> */}
    {/* <Route exact path='/product' element={<Product/>}/> */}
    {/* <Route exact path='/cart' element={<Product1/>}/> */}
    {/* </Routes> */}
    function Homepage() {
        return (
          <div style={{position:"relative"}}>
    {/* <Home/> */}
    <Header/>  
    <Section/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
    <Section8/>
    <Section9/>
    <Section10/>
    <Section11/>
    <Section12/>
    {/* // </BrowserRouter> */}
    </div>
  );
}

export default Homepage;
