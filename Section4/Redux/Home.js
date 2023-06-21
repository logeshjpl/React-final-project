import React from 'react';
import Item from './item';
import Data from './Data';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () =>{

    return(
        <div className='hom'>
           <h1 className='h'> All Items</h1>
           <Container><Row>
            <Col md={4} className='float1'>
           
            
            {Data. productData .map((item,index)=>{
                return(
                    <Item 
                    img={item.img}
                     title={item.title}
                      desc={item.desc} 
                      price={item.price}
                      item={item} 
                      key={index}/> 
                )
            })}
            </Col>
            <Col md={4} className='float1'>
           
            
           {Data. productData1 .map((item,index)=>{
               return(
                   <Item 
                   img={item.img}
                    title={item.title}
                     desc={item.desc} 
                     price={item.price}
                     item={item} 
                     key={index}/> 
               )
           })}
           </Col>
           <Col md={4} className='float1'>
           
            
           {Data. productData2 .map((item,index)=>{
               return(
                   <Item 
                   img={item.img}
                    title={item.title}
                     desc={item.desc} 
                     price={item.price}
                     item={item} 
                     key={index}/> 
               )
           })}
           </Col>
            </Row>
         </Container>  
        </div>
    );
}
export default Home;