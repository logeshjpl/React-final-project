import React from 'react';
import './Signup.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import 'bootstrap/dist/css/bootstrap.min.css';

       function Signup() {
        const [inputs, setInputs] = useState({});
      
        const handleChange = (event) => {
          const name = event.target.name;
          const value = event.target.value;
          setInputs(values => ({...values, [name]: value}))
        }
      
        const handleSubmit = (event) => {
          event.preventDefault();
          console.log(inputs);
        }
return (
<Container><Row><div className='sign'>

<h1 className='h'>Sign Up</h1>
<form onSubmit={handleSubmit}>
<label className='label'>Enter your name:</label><br></br>
  <input type="text" className='input' name='username'  value={inputs.username || ""} 
  onChange={handleChange}/><br></br><br></br>

  <label className='label'>Mobile number:</label><br></br>
  <input className='input' type="Nummber"  name='mobilenumber'  value={inputs.mobilenumber || ""} 
  onChange={handleChange}/><br></br><br></br>
   

  <label className='label'>Email:</label><br></br>
  <input className='input' type="Email"  name='email' value={inputs.email || ""} 
  onChange={handleChange} /><br></br><br></br>

  <label className='label'>Password:</label><br></br>
  <input className='input' type="password"  name='password'  value={inputs.password || ""} 
  onChange={handleChange} /><br></br><br></br>


  <label className='label'>Confirm Password:</label><br></br>
  <input className='input' type="password"   name='confirmpassword' value={inputs.confirmpassword || ""} 
  onChange={handleChange}/><br></br><br></br>
   

  <input className='submit' type="submit" name='submit' />

</form></div></Row></Container>
);
}
export default Signup;

