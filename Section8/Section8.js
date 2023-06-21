import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section8.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import img10 from './img10.jpg';
//import { FaClinicMedical } from "react-icons/fa";
import {TbStethoscope } from "react-icons/tb";
//import { AiOutlineMedicineBox } from "react-icons/ai";
//import {GiDoctorFace} from "react-icons/gi";


function Section8(){
    return(
        <div className='section8'>
            <Container><Row>
          <Col md={2}>  <div className='sec8'> <div className='se8'><TbStethoscope/></div>   </div></Col>
          <Col md={4}><p className='p8'>SPECIAL</p>
          <h1 className='h8'>Get a Free <br></br> Mediacl</h1>
          </Col>
          <Col md={6}>
    <Card className='s8'>
      <Card.Body>
       <Row>
      <Col ma={7}> <input className='input8' placeholder='Your phone' /> </Col> 
      <Col ma={5}>  <Button variant="danger" className='border8' >Send</Button></Col></Row>
       
      </Card.Body>
    </Card>

          </Col>
            </Row>
            </Container>
        </div>
    );
}
export default Section8;