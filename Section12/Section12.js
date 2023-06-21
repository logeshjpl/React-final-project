import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section12.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import img14 from './img14.jpg';
//import img13 from './img13.jpg';
//import { FaClinicMedical } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

 
function Section12(){
    return(
        <div className='section12'>
<Container>
    <Row>
        <Col md={4}><h3 className='me'>MED</h3></Col>
        <Col md={4}><div><input className='i' placeholder='Your email'/><Button variant="danger" className='border12' >subscribe</Button></div></Col>
        <Col  md={4}>
            <div className='square1'> <FaFacebook/><FaTwitter/><FaInstagram/></div> 
            </Col>
     <Row>   <Col className='sq'>  </Col></Row>

    <Row>   <Col md={6}>
        <p>copyrights@2023 Agency. All Rights Reserved</p></Col>   

     <Col md={4}><p className='q'>Terms and conditions</p></Col> 
     <Col md={2}>  <p className='q'>privacy policy</p>
        </Col></Row> 
    </Row>
</Container>
        </div>
    );
}
export default Section12;