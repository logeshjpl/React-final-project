import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section10.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import { Dropdown } from 'bootstrap';
//import img14 from './img14.jpg';
//import img13 from './img13.jpg';
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownContext from 'react-bootstrap/esm/DropdownContext';
 
function Section10(){
    return(
        <div className='section10'><Container>
            <Row>
                <Col md={6}>
                <Col>
                                     
                                     <Card  className='s10'>
                                 
                                       <Card.Body>
                                         <Card.Title></Card.Title>
                                         <Card.Text>
                      <p className='sss10'>What looked like a small patch?</p>
                      <p className='sss10'>Truly it was a great journey.and in it I met with many.<br></br>Whom to know was to love but
                         whom never could i see <br></br>for life has not space enough</p>
                                 
                        
                                         </Card.Text>
                                      
                                       </Card.Body>
                                       <div className='ic10 mx-auto'> <AiOutlineDown/> </div> 
                                     </Card>  
                                                         </Col>
                                                         <Col>
                                     
                                     <Card  className='pad10'>
                                 
                                       <Card.Body>
                                         <Card.Title></Card.Title>
                                         <Card.Text>
                                 <p className='ss10'>Above five feet square?</p>
                                         </Card.Text>
                                     
                                       </Card.Body> <div className='icc10 mx-auto'> <AiOutlineRight/> </div> 
                                     </Card>
                                                         </Col>
                                                         <Col>
                                     
                                     <Card  className='pad10'>
                                 
                                       <Card.Body>
                                         <Card.Title></Card.Title>
                                         <Card.Text>
                                  <p className='ss10'>Was moving across the sand?</p>
                                         </Card.Text>
                                        
                                       </Card.Body> <div className='icc10 mx-auto'> <AiOutlineRight/> </div> 
                                     </Card>
                                                         </Col>
                </Col>
                <Col md={6}>
               <div className='pp10'> <p className='ssss10'> F.A.Q.</p>
                    <h1>Frequently <br></br> Asked Questions</h1>
                    <p className='pa1'>Apparently we had reached a greaat height in the <br></br>atmosphere, 
                    for the sky was a dead black.</p>
                    <p className='p10'>Though the gravity still dragged at him,his muscles were making <br></br>great effort to adjust.
                        After the daily classes he no longer collapsed<br></br> immediately in to the bed</p>
                        </div> 
                </Col>
            </Row>
        </Container>

        </div>
    );
}
export default Section10;