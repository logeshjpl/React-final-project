import React from 'react';
import { CartProvider, useCart } from "react-use-cart";
import './item.css'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
const Item = (props) =>{
  const {addItem} = useCart();
    return(
        <Container>
            <Row>
      <Col md={8} className='float1'>  
<Card>
  <img src={props.img}/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.price}</p>
    <p class="card-text">{props.desc}</p>
    <button class="btn btn-success" onClick={()=>addItem(props.item)}>Book Appointment</button>
  </div></Card>
</Col></Row>
</Container>
    );
};
export default Item;