import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import {MdOutlineUpdate  } from 'react-icons/md';
import { MdFace2  } from 'react-icons/md';
import { FiMapPin  } from 'react-icons/fi';
import { BsCalendarDate } from 'react-icons/bs';
function Section(){
    return(
      <div className='section'>
        <Container>
            <Row>
                <Col md={3}>
   <Card className='card1'>
      <Card.Body>
        <Card.Title>Opening<br></br> Hours</Card.Title>

        <Card.Text>
         <div className='tex'> <p>Monday-Friday <br></br>
          9am-11am</p>
          <p>Address<br></br>
          Annanagar,<br></br>Coimbatore.</p></div>
        </Card.Text>
      </Card.Body><div className='md'> < MdOutlineUpdate/> </div>
    </Card>
     </Col>
                <Col md={3} ><div> <Card className='card2'>
      <Card.Body>
        <Card.Title>Appoint<br></br>ment</Card.Title>
        <Card.Text>
        <p> peep at some distant orb has power to rise and purify</p><br></br>
        <Button variant="danger"  className='border'>Request</Button>
        </Card.Text>
        
      </Card.Body>  < BsCalendarDate className='md1'/>
    </Card></div> </Col>

                <Col md={3}><div> <Card className='card2'>
      <Card.Body>
        <Card.Title>Find<br></br> Doctors</Card.Title>
        <Card.Text>
        <p> peep at some distant orb has power to rise and purify</p><br></br>
        <Button variant="danger"  className='border'>Doctors</Button>
        </Card.Text>
       
      </Card.Body>  < MdFace2 className='md1'/> 
    </Card></div>  </Col>

    
    <Col md={3}><div> <Card className='card2'>
      <Card.Body>
        <Card.Title>Find <br></br>Locations</Card.Title>
        <Card.Text>
          <p> peep at some distant orb has power to rise and purify</p><br></br>
          <Button variant="danger"  className='border'>Locations</Button>
        </Card.Text>
        
      </Card.Body>  < FiMapPin  className='md1'/> 
    </Card></div>  </Col>
            </Row>
        </Container>
       </div>
    );
}

export default Section;