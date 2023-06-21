import React from 'react';
import Home from '../Navbar/Navbar';
import { Outlet } from 'react-router';
//import Header from '../Header/Header';
//import Homepage from '../Homepage/Homepage';

function Routing() {
  return (
    <div>
      <Home/>

      <Outlet />
    </div>
  );
}

export default Routing;
