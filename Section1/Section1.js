import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section1.css';
import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import img4 from './img4.jpg';
import img35 from './imagg.jpeg';

import {GiPlayButton } from "react-icons/gi";
function Section1(){
    return(
        <div className='sec1'> <div><img className='img35' src={img35} alt=''/></div>
            <Container>
                <Row>
                   <Col md={6}>
                   <div className='ss1'><GiPlayButton className='sss1'/></div>
                    <img className='img4' src={img4} alt=''/></Col>
                   <Col md={6}><div className='t'>  <p className='t1'>ABOUT</p><h1 className='s1'>You Always<br></br>Get Our Help</h1>
                    <p className='pa1'>Apparently we had reached a great height in the <br></br>atmosphere, for the sky was dead black.</p>
                    <p className='pa'>Through the gravity still draged at him,his muscles were making <br></br>great effort to adjust.
                    After the dailly classes he no longer collapsed<br></br> immediatly in to bed.</p>
                    <Button variant="danger"  className='borde1'>Read more</Button></div> 
                    </Col>
                </Row>
                
            </Container>
            

        </div>
    );
}
export default Section1;