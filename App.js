import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import './App.css';
import Header from './Header/Header';
//import Section from './Section/Section';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
//import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
//import Section6 from './Section6/Section6';
import Section5 from './Section5/Section5';
import Home from './Navbar/Navbar';
import Login from './Login/Login';
//import Section7 from './Section7/Section7';
import Signup from './Signup/Signup';
//import Section8 from './Section8/Section8';
import Section9 from './Section9/Section9';
import Section11 from './Section11/Section11';
//import Section12 from './Section12/Section12';
import Product from './Section4/Redux/product';
// import Cart from './Section4/Redux/Cart';
//import Product1 from './Section4/Redux/product1';
import Homepage from './Homepage/Homepage';
import Routing from './Components/Routing';
import Form1 from './Form/Form1';
import Product1 from './Section4/Redux/product1';

function App() {
  return (
    <div className='posi'>
      <BrowserRouter>
      
    <Routes>
    {/* <Route exact path='/' element={<Header/>}/> */}
    <Route path="/" element={<Routing/>}>
    {/* <Route index element={<Homepage/>} /> */}
    <Route exact path='/' element={<Homepage/>}/>
    <Route exact path='/about' element={<Section1/>}/>
    <Route exact path='/service' element={<Section2/>}/>
    <Route exact path='/doctors' element={<Section5/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/signup' element={<Signup/>}/>
    <Route exact path='/blog' element={<Section9/>}/>
    <Route exact path='/appointment' element={<Section4/>}/>
    <Route exact path='/contact' element={<Section11/>}/>
    <Route exact path='/product' element={<Product/>}/>
    <Route exact path='/product1' element={<Product1/>}/>
    <Route exact path='/signin' element={<Form1/>}/>
</Route>
   
    </Routes>
    
    {/* <Section/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
    <Section8/>
    <Section9/>
    <Section11/>
    <Section12/> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
