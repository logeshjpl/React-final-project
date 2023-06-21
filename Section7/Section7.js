import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section7.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img10 from './img10.jpg';
import { FaClinicMedical } from "react-icons/fa";

function Section7(){
    return( 
        <div className='section7'>
            <Container>
           <div className='sectio7'>    <p className='t1'>TESTIMONIALS</p>
                <h1>What Our Patients Say</h1> </div> 
                <Row>
                <Col md={6}>
    <Card className='card9'>
    
     <div><Card.Body>
     <div className='s7'> <div className='se7'><FaClinicMedical/></div>  </div>
        <Card.Text className='title'>
    <p className='sec7'> I shall see the face of mars,anyhow,that will be a rare experience.
    It seems to me that a view of the heavenly bodies through a fine telescope,
    as well as tour round the world,should from apart of liberal education.</p>
        </Card.Text>
       
      </Card.Body></div> 
      <Row><Col md={4}> <Card.Img className='img11' variant="top" src={img10} /></Col>
    <Col md={8}><h4 className='setio'>Logesh</h4>
    <p>Office Manager</p>
    </Col>
    </Row> 
    </Card>
</Col>

<Col md={6}>
    <Card className='card9'>

     <div><Card.Body>
     <div className='s7'> <div className='se7'><FaClinicMedical/></div>  </div>
        <Card.Text className='title'>
        <p className='sec7'> I shall see the face of mars,anyhow,that will be a rare experience.
    It seems to me that a view of the heavenly bodies through a fine telescope,
    as well as tour round the world,should from apart of liberal education.</p>
        </Card.Text>
      </Card.Body></div> 
    <Row><Col md={4}> <Card.Img className='img11' variant="top" src={img10} /></Col>
    <Col md={8}><h4 className='setio'>Logesh</h4>
    <p>Office Manager</p>
    </Col>
    </Row> 
    </Card>
</Col>
                </Row>
                <div> <Button variant="danger"  className='borr'>See all</Button></div> 
            </Container>
        </div>
        
    );
}
export default Section7;