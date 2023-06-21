import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsHeartPulse } from "react-icons/bs";
import { TbStethoscope } from "react-icons/tb";
//import Home from '../Navbar/Navbar';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//import img1 from './img.jpg';
//import img2 from './img2.png';
 import img3 from './im.jpg';
 import img33 from './imagg.jpeg';
 import img34 from './imagg.jpeg';
//import Home from '../Navbar/Navbar';
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Header(){

    return(
    
<div className='header'>

    <div>
    <Container fluid>
    
        <Row>
       
            <Col md={5}>
            
              
    
     <div className='ho'>
  
        <p className='c'>MEDICAL</p>
        <h1 className='health'>
            Healthcare <br></br>
            Solutions
        </h1>
        <p className='p1'>
            peep at some distant orb has power to <br></br>rise and purify our
             thoughts like a strain <br></br>of scared music,or a noble picture.
        </p>
        <Button variant="danger" className='bor'>Find Doctors</Button>{' '}
     </div>
            </Col>
            <Col md={7}> 
            <div className='right'>
             <div className='absolute'> </div> 
              {/* <Button variant="" className='button2'>MEDICAL</Button>{' '} */}
             
               </div>
               <div className='absolute1'> 
               {/* <div className='ic1'>  </div> 
           <div className='ic2'>  </div>  */}
            
             
              </div>
              <div><img className='img1' src={img3} alt=""/> </div> 
              <div className='icon1'><BsHeartPulse/></div>
              <div className='icon'><TbStethoscope/></div>
           <div className='ic1'>  </div> 
           <div className='ic2'>  </div> 
           <div><img className='img33' src={img33} alt=''/></div>
           <div><img className='img34' src={img34} alt=''/></div>
                </Col>
        </Row>  
    </Container></div>
</div>
    );
}
export default Header;