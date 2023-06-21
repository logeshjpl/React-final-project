import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section9.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img14 from './img14.jpg';
import img13 from './img13.jpg';
//import { FaClinicMedical } from "react-icons/fa";
//import {FaBookMedical } from "react-icons/fa";
//import { AiOutlineMedicineBox } from "react-icons/ai";
//import {GiDoctorFace} from "react-icons/gi";

function Section9(){
    return(
        <div className='section9'>
            <Container>
                <div className='sec9'>
                    <p className='t1'> OUR BLOG</p>
                    <h1>Recent Articles</h1>
                </div>
                <Row>
               

                    <Col md={4} > <div><p className='position'>DENTAL</p>
                  <h3 className='position1'>Through the gravity still<br></br> dragged at him</h3>
                    <p className='position2'>22 may 2023</p></div> 
                   <div> <img className='img14' src={img14} alt=''/></div>
                    </Col>
                    
                    <Col md={4}><p className='position5'>CARDEOLOGY</p>
                    <h3 className='position3'>His muscles were making<br></br>great effort to adjust</h3>
                    <p className='position4'>22 may 2023</p>

                        <img className='img13' src={img13} alt=''/>
                        </Col>
                    <Col md={4}>
                        <Col>
                
    <Card className='ca1'>

      <Card.Body>
        <Card.Title>EYE CARE</Card.Title>
        <Card.Text>
        <div><h3  className='s9'>After the daily classes he no longer collapsed</h3>
          <p>22 may 2023</p></div>  
        </Card.Text>
    
      </Card.Body>
    </Card>
                        </Col>
                        <Col>
                                     
    <Card  className='ca'>

      <Card.Body>
        <Card.Title>MEDICINE</Card.Title>
        <Card.Text>
   <div> <h3 className='s9'>Only the nightmares got still dragged at him</h3>
          <p>22 may 2023</p></div>  
        </Card.Text>
    
      </Card.Body>
    </Card>
                        </Col>
                    </Col>
                </Row>
<div className='b'><Button variant="danger" className='border9' >More Articles</Button></div>
            </Container>
        </div>
    );
}
export default Section9;
