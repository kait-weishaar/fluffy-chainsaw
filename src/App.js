import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import About from './components/About';
import Cards from './components/Cards';
import Contact from './components/Contact';

import './App.css';
import './index.css';
import 'react-bootstrap';

function App() {
  const [currentPage, handlePageChange] = useState('About');
  const displayPage = () => {
    
    //switch case for conditional rendering
    switch(currentPage) {
      case "about": 
      return <About></About>
      case "contact": 
      return <Contact></Contact>
      case "portfolio":
      return  <Cards></Cards>
      default:
        return <About></About>
    }
  }
  return (
    <div>
    <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    <div>
      {
        // conditional rendering
        displayPage()
      }
    </div>
  </div>
);
}

export default App;
