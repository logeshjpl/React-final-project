import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section5.css';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img10 from './img10.jpg';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

function Section5(){
    return(
        <div className='section5'><Container>
            <p className='five'>TEAM</p>
            <h1 className='five1'>Our Doctors</h1>
            <Row>
             <Col md={4}>
    <Card className='card8'>
   
     <div className='align'><Card.Body>
     <Card.Img className='img10' variant="top" src={img10} />
        <Card.Title className='title'>Logesh</Card.Title>
        <Card.Text className=''>
        Cardiology
        </Card.Text>
       <div className='square'> <FaFacebook/><FaTwitter/><FaInstagram/></div>
      </Card.Body></div> 
    </Card>
</Col>
                <Col md={4}>     <Card className='card8'>
    
     <div className='align'><Card.Body>
     <Card.Img className='img10' variant="top" src={img10} />
        <Card.Title className='title'>Ragul</Card.Title>
        <Card.Text className=''>
        Cardiology
        </Card.Text>
       <div className='square'> <FaFacebook/><FaTwitter/><FaInstagram/></div>
      </Card.Body></div> 
    </Card></Col>
                <Col md={4}>     <Card className='card8'>
   
     <div className='align'><Card.Body>
     <Card.Img className='img10' variant="top" src={img10} />
        <Card.Title className='title'>Manishankar</Card.Title>
        <Card.Text className=''>
          Cardiology
        </Card.Text>
        <div className='square'>  <FaFacebook/><FaTwitter/><FaInstagram/></div>
      </Card.Body></div> 
    </Card></Col>
   </Row>
            <Button variant="danger"  className='borr'>See all</Button>
            </Container>
        </div>
    );
}
export default Section5;