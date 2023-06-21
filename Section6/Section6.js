import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section6.css';
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
//import img10 from './img10.jpg';
import { FaClinicMedical } from "react-icons/fa";
import {FaBookMedical } from "react-icons/fa";
import { AiOutlineMedicineBox } from "react-icons/ai";
import {GiDoctorFace} from "react-icons/gi";

function Section6(){
    return(
        <div className='section6'>
            <Container>
                <Row>
                    <Col md={3}> 
                  <div className='align'>  <div className='sec6 mx-auto'><div className='se6'><AiOutlineMedicineBox/></div>  </div>
                    <div className='s6'>
                        <h1>12</h1>
                        <p>Years of experience</p>
                    </div></div>
                    </Col>
                    <Col md={3}> <div className='sec6 mx-auto'> <div className='se6'><GiDoctorFace/></div>  </div>
                    <div className='s6'>
                        <h1>465</h1>
                        <p>Medical Specilities</p>
                    </div>
                    </Col>
                    <Col md={3}> <div className='sec6 mx-auto'> <div className='se6'><FaClinicMedical/></div>  </div>
                    <div className='s6'>
                        <h1>740</h1>
                        <p>Modern Rooms</p>
                    </div>
                    </Col>
                    <Col md={3}> <div className='sec6 mx-auto'> <div className='se6'><FaBookMedical/></div>   </div>
                    <div className='s6'>
                        <h1>5,309</h1>
                        <p>Happy Patients</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Section6;