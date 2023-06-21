import React, { useState,useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Log.css';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
//import test from "./test";
import { BiCaretUp} from 'react-icons/bi';


const Log = () => {
  const navigate = useNavigate();
  const [errormessage,seterrorMessage]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  // function validateForm() {
  //   return email.length > 0 && password.length > 6;
    
  // }

  // React.useEffect(()=>{
  //   if(localStorage.getItem('auth')) navigate('/login')},[]) 


  // const handleSubmit=(event)=> {
  //   event.preventDefault();
  //   console.log(email,password)
  //   seterrorMessage("")
  //   if( (email !== "logesh.jpl@gmail.com" || password !== "1234567"))
   
  //    return seterrorMessage('Invalid email or password');
    
  //   navigate('/');
    
  //   localStorage.setItem('auth', true);
  //   }
   
  return (
  <div> 
<div><BiCaretUp className="cartt1"/></div>
     <div className="Log">  
    <h2 className='signin'>Sign In</h2>
      <Form >
        <Form.Group size="lg" controlId="email">
          <Form.Label className="empp">Email</Form.Label>
          <Form.Control className="conn"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           
  
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="empp">Password</Form.Label>
          <Form.Control className="conn1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="btnlogin">
        
        <Button className="bld" block="true" size="lg" type="submit">
          Login
        </Button></div>
        <div className="btnlogin">
        <h6 className="asd">Don't have an account? <Link >Signup</Link></h6>
        </div>
        
      </Form>
    </div></div>
  );
}
export default Log;


