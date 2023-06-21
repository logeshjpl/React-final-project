import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section11.css';
import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import img15 from './unnamed.webp';
//import img13 from './img13.jpg';
//import { FaClinicMedical } from "react-icons/fa";

function Section11(){
    return(
        <div className='section11'>
            <Container>
                <Row>
                    <Col md={6}>
                        <div>
                            <p className='t1'>CONTACT US</p>
                            <h1>Send Us a Message</h1>
                            <input className='input11' placeholder='Your name'/>
                            <input  className='inp11' placeholder='Your email'/>
                            <input  className='inpu11' placeholder='Your message'/>
                          <div>  <Button variant="danger" className='border9' >Submit</Button></div>
                        </div>
                    </Col>
                    <Col md={6}>< img src={img15} className='img15' alt=''/></Col>
                </Row>
            </Container>
        </div>
    );
}
export default Section11;