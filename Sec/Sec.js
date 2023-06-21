import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Sec.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Login from '../Login/Login';
//import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import img3 from './im.jpg';
import Home from '../Navbar/Navbar';
//import { Link } from "react-router-dom";
 //import Nav from 'react-bootstrap/Nav';
/// import Navbar from 'react-bootstrap/Navbar';
//import Button from 'react-bootstrap/Button';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsHeartPulse } from "react-icons/bs";
import { TbStethoscope } from "react-icons/tb";
//import Home from '../Navbar/Navbar';
import { useNavigate } from "react-router-dom";


function Sec(){
    return(
    <div className='hom'>  <div className='hh'> <Navbar bg="" expand="lg">
      <Container fluid>
        <Navbar.Brand> <Link to={"/"} className="m"> MED </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">

          <Nav.Link> <Link className='abo' to={"/about"}> About </Link> </Nav.Link>
            <Nav.Link > <Link className='abo' to={"/service"} > Service </Link > </Nav.Link>
            <Nav.Link> <Link className='abo' to={"/doctors"} > Doctors</Link > </Nav.Link>
            <Nav.Link><Link className='abo' to={"/blog"}> Blog</Link > </Nav.Link>
            <Nav.Link><Link className='abo' to={"/contact"} > Contact</Link > </Nav.Link>
            <Nav.Link> <Link className='abo' to={"/appointment"}>Appointment</Link> </Nav.Link>
            <Nav.Link> <Link className='abo1'  to={"/login"}> Login</Link > </Nav.Link>
            <Nav.Link> <Link className='abo2' to={"/cart"}> Cart</Link > </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> </div>
  

   <Row><Col> <div>
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
     </div></Col>
            
         <Col className='fll'>   <div className='rght'>
             <div className='asolute'> </div> 
              {/* <Button variant="" className='button2'>MEDICAL</Button>{' '} */}
             
               </div>
               <div className='asolute1'> 
               <div className='ic1'>  </div> 
           <div className='ic2'>  </div> 
            
             
              </div>
              <div><img className='img1' src={img3} alt=""/> </div> 
              <div className='icon1'><BsHeartPulse/></div>
              <div className='icon'><TbStethoscope/></div>
           <div className='ic1'>  </div> 
           <div className='ic2'>  </div> </Col></Row> 
        

</div>

    );
}
export default Sec;
   