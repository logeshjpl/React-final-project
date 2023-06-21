import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section4.css';
import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import img7 from './img8.jpg'
import Login from '../Login/Login';
import { Link } from 'react-router-dom';

function Section4(){
    return(
        <div className='section4'>
            <Container>
                <Row>
                    <Col md={6}><img className='img7' src={img7} alt=''/></Col>
                    <Col md={6}><div className='s4'><p className='t1'>TIME TABLE</p>
                    <h1>Appointment<br></br>Schedules</h1>
                    <p className='pa1'>Apparently we had reached a great height in the atmosphere.for the sky was dead black</p>
                    <p className='pa'>Through the gravity still dragged at him,his muscles were making great efforts
                         to adjust.After the dailly clases he no longer collapsed immediatly in to bed. </p>
                        
                         <Button variant="danger"  className='border4'><Link className='bu' to={"/product"}>Schedule</Link></Button>
                         </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Section4;