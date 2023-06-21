import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section2.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import {FaTooth} from "react-icons";
import { FaTooth } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";
import {AiOutlineEye } from "react-icons/ai";
import {GiMedicines } from "react-icons/gi";
import {BiInjection} from "react-icons/bi";
import img5 from './img5.jpg'
import img37 from './imagg.jpeg'

function Section2() {
    return (
        <div className='section2'><div><img className='img37' src={img37} alt=''/></div>
            <div className='par2'>
                <div> <p className='par'>SERVICE</p>               
                    <h1 className='par1'>Our Medical Services</h1></div>
                <div> <Container>
                    <Row>
                        <Col md={6}>
                             <Row>
                                <Col md={4} >
                                    <Card className='card3'>
                                       
                                        <Card.Body>
                                       <div className='fa mx-auto'><div className='fa5' > < FaTooth/> </div></div>
                                
                                   <br></br>
                                            <Card.Text>
                                                Dental
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4}> <Card className='card4'>
                                    
                                    <Card.Body>
                                 <div className='fa2 mx-auto'><div className='fa1' > < GiMedicines/> </div></div>
                                   
                                   <br></br>
                                        <Card.Text>
                                            Medicine
                                        </Card.Text>
                                    </Card.Body>
                                </Card></Col>
                                <Col md={4}> <Card className='card4'>
                                
                                    <Card.Body>
                                  <div className='fa2 mx-auto'>  <div className='fa1' > < FaBriefcaseMedical/> </div></div>
                                 
                                   <br></br>
                                        <Card.Text>
                                            Cardeology
                                        </Card.Text>
                                    </Card.Body>
                                </Card></Col>
                            </Row>  

                            <Row>
                                <Col md={4}> <Card className='card4'>
                                
                                    <Card.Body>
                                     <div className='fa2 mx-auto'><div className='fa1 ' ><AiOutlineEye/></div></div>
                                   
                                   <br></br>
                                    
                                        <Card.Text>
                                            Eye care
                                        </Card.Text>
                                    </Card.Body>
                                </Card></Col>
                                <Col md={4}> <Card className='card4'>
                        
                                    <Card.Body>
                                     <div className='fa2 mx-auto'><div className='fa1' > <BiInjection/></div></div>
                                   
                                   <br></br>
                                    
                                        <Card.Text>
                                            Primary care
                                        </Card.Text>
                                    </Card.Body>
                                </Card></Col>
                                <Col md={4}> <Card className='card4'>
                                
                                    <Card.Body>
                                     <div className='fa2 mx-auto'><div className='fa1' > <FaAmbulance/> </div></div>
                                   
                                   <br></br>
                                        <Card.Text>
                                            Orthopedic
                                        </Card.Text>
                                    </Card.Body>
                                </Card></Col>
                            </Row> 
                        </Col>

                        <Col md={6}>
                         <div>  <img className='img5' src={img5} alt=''/></div> 
                        <Card className='card5'>
                                    <Card.Body>
                                        <Card.Text>
                                        <h1 className='d'>Dental Care Service</h1>
                            <p>As i went on, still getting velocity.The palpitation of night day 
                                and merged into one continuous greyness sky took on a wonderful.</p>
                                <Button variant="danger"  className='border1'>Learn more</Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                        </Col>
                    </Row>
                </Container></div> </div>
        </div>
    );
}
export default Section2;