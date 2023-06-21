import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section3.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img6 from './img6.jpg'
import img36 from './imagg.jpeg'
import { FaClinicMedical } from "react-icons/fa";

function Section3(){
    return(
        <div className='section3'> <div><img className='img36' src={img36} alt=''/></div>
        <Container>
             <div> <img className='img6' src={img6} alt=''/> </div>
          <div className='pos'>
           <p className='t1'>FEATURES</p>
           <h1>Our Speciality</h1>
           <p>Through the gravity still dragged at him,his muscles<br></br> are making great effort to adjust</p></div>
           
            
             <Card className='card6'>                                
<div className='fa3 mx-auto'><FaClinicMedical className='fa4'/>  </div>
                                        <div className='ct'>
                                        <h3>Online Appointment</h3>
                            <p className='ppp'>what looked like small patches of purple<br></br> grass,above five feet square was moving.</p>
                                <Button variant="danger"  className='bor'>Read more</Button>
                               </div>
                                </Card>
       
                                
       </Container>
                           
        </div>
    );
}
export default Section3;