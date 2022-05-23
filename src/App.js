import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import './App.css';
import Fruits from './props/Fruits';
import { Clothes } from './props/Clothes';
import Profile from './state/Profile';
import Home from './Routing/Home';
import AboutUs from './Routing/AboutUs';
import ContactUs from './Routing/ContactUs';
import Hello from './Routing/Hello';
import Toggle from './toggle/Toggle';
import Form from './form-handling/Form';
import Rendering from './conditional-rendering/Rendering';
 
class App extends Component {
  render() {

    return (
       
    <div className="App">
      {/* <Router>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        
        <Route exact path='/'><Home /></Route>

          <Route path='/'><Home /></Route>
          <Route path='/about'><AboutUs /></Route>
          <Route path='/contact' element={ContactUs}></Route>
          <Route path='/contact'><ContactUs /></Route>
          <Route path='/hello'><Hello /> </Route>
      </Router> */}

      {/* <Fruits juice = "Mango Juice" juiceFlavour ={{flavour:'Mango'}} />
      <Clothes clothType = "Jeans"/> */}

      {/* <Profile /> */}

      {/* <Toggle/> */}
      <Form />
      {/* <Rendering /> */}
    </div>
       
   );
  }
}
 
export default App;