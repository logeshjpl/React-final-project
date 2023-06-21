import React from 'react';
//import ReactDOM from 'react-dom/client';
//import {useState} from 'react'
import './Form2.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect} from "react";
import { BiCaretUp} from 'react-icons/bi';
//import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import 'bootstrap/dist/css/bootstrap.min.css';

  function Form2() { 
    const initialValues = {username: "",mobilenumber: "",email: "", password: "",confirmpassword: ""};
    const [formValues, setFormValues] = useState(initialValues);
   const [formErrors, setFormErrors] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (event) => {

      const { name,value} = event.target;
      setFormValues(values => ({ ...values, [event.target.name]: event.target.value }));
     
      //setFormValues({...formValues, [name]:value});
      console.log(formValues);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setFormErrors(validate(formValues));
      // setIsSubmit(true);
    };
    
//     useEffect =>(() => {
//       console.log(formErrors);   
// if(Object.keys(formErrors).length===0 && isSubmit){
//   console.log(formValues)
// }
//     },[formErrors]);

    const validate = (values) => {
      const errors = {}
      const regex = /[a-zA-Z]/;
      if(!values.username){
        errors.username = "user name is required";
      }
      //const mobilenumber = /^\d{10}/;
      if(!values.mobilenumber){
        errors.mobilenumber = "mobilenumber is required";
      }
      //const email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if(!values.email){
        errors.email = "email is required";
      }
      //const password =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
      if(!values.password){
        errors.password = "password is required";
      }
    //   elseif(!regex.test(values.password))
    //   {
    //   errors.password = "password is not valid";
    // }
    
      if(values.confirmpassword){
        errors.confirm = "confirmpassword";
      }
  
    }
  return (
    <Container><Row>
      <div><BiCaretUp className="cartt1"/></div>
      <div className='row2'>

      <h1 className='h'>Sign Up</h1>
    <form onSubmit={handleSubmit}>
      <label className='label2'>Enter your name:</label><br></br>
        <input type="text" className='input2' name='username'  value={formValues.username} 
        onChange={handleChange}/><br></br>
      <p>{formErrors.username }</p>
        <label className='label2'>Mobile number:</label><br></br>
        <input className='input2' type="Nummber"  name='mobilenumber' value={formValues.mobilenumber} 
        onChange={handleChange}/><br></br>
         <p>{formErrors.mobilenumber }</p>

        <label className='label2'>Email:</label><br></br>
        <input className='input2' type="Email"  name='email' value={formValues.email} 
        onChange={handleChange} /><br></br>
         <p>{formErrors.email }</p>

        <label className='label2'>Password:</label><br></br>
        <input className='input2' type="password"  name='password' value={formValues.password} 
        onChange={handleChange} /><br></br>
         <p>{formErrors.password }</p>

        <label className='label2'>Confirm Password:</label><br></br>
        <input className='input2' type="password"   name='confirmpassword' value={formValues.confirmpassword} 
        onChange={handleChange}/><br></br>
         <p>{formErrors.confirmpassword }</p>

        <input className='submit2' type="submit" name='submit' />
      
    </form></div></Row></Container>
  );
    }
export default Form2;

