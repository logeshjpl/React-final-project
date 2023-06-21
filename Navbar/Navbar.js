import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/esm/NavLink';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import './Navbar.css';
//import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
//import Login from '../Login/Login';
//import { useNavigate } from "react-router-dom";
//import Dropdown from 'react-bootstrap/Dropdown';
//import  { useState } from 'react';
//import Form from "react-bootstrap/Form";
//import { useNavigate } from 'react-router-dom'
//import { useForm } from "react-hook-form";
import Log from '../Log/Log';
import Form2 from '../Form2/Form2';
import { AiOutlineShoppingCart} from 'react-icons/ai';
import { CartProvider, useCart } from "react-use-cart";
import Cart from '../Section4/Redux/Cart';
import { useEffect, useState } from 'react';


  
  function Home(){
    const {
      isEmpty,
        totalUniqueItems,
        cartTotal,
        totalItems,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();

  // navbar scroll
      const [navbarBg, setNavbarBg] = useState('transparent');
    
      useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const navbarHeight = 50; // Adjust this value to match your navbar's height
    
          if (scrollPosition > navbarHeight) {
            setNavbarBg('#f5f5f5'); // Change to the desired background color
          } else {
            setNavbarBg('transparent');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

// mouse over
      const [isDropdownOpen, setDropdownOpen] = useState(false);

      const handleMouseEnter = () => {
        setDropdownOpen(true);
      };
    
      const handleMouseLeave = () => {
        setDropdownOpen(false);
      };
    return(
      <div className='home'> <Navbar bg="" expand="lg" style={{ backgroundColor: navbarBg }}>
      <Container >
        <Navbar.Brand> <Link to={"/"} className="m"> MED </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">

          <NavLink > <Link className='abo' to={"/about"}> About </Link> </NavLink>
            <NavLink > <Link className='abo' to={"/service"} > Service </Link > </NavLink>
            <NavLink> <Link className='abo' to={"/doctors"} > Doctors</Link > </NavLink>
            <NavLink><Link className='abo' to={"/blog"}> Blog</Link > </NavLink>
            <NavLink><Link className='abo' to={"/contact"} > Contact</Link > </NavLink>
           
            <NavLink> <Link className='abo1' to={"/login"}>


            {/* <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p>Login</p>
      {isDropdownOpen && (
        <div className="dropdown-content">
          Dropdown content goes here
          <Log/>
        </div>
      )}
    </div> */}
            <div class="dropdown">
    <p class="dropbtn">Login
      <i class="fa fa-caret-down"></i>
    </p>
    <div class="dropdown-content">
      
    <Log/>
    </div>
  </div>  
            </Link > </NavLink>
            
            <NavLink> <Link className='abo3' to={"/signin"}>        
            <div class="dropdown">
    <p class="dropbtn">Signup
    </p>
    <div class="dropdown-content">
      
    <Form2/>
    </div>
  </div> 
            </Link > </NavLink>
            {/* <Nav.Link> <Link className='abo2' to={"/cart"}> Cart</Link > </Nav.Link> */}
            <NavLink> <Link className='abo2' to={"/appointment"}>Appointment</Link> </NavLink>

            
     <NavLink> <Link className='cart' to={"/product1"}><AiOutlineShoppingCart/>
     <span className='span '><CartProvider>{totalItems}</CartProvider></span>
     </Link> </NavLink>
   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></div> 
    );
}
export default Home;