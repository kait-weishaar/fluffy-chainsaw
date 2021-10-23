import React, { useEffect } from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';
import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'
function Nav(props) {
  // const sections = ['About', 'Portfolio', 'Contact'];

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Item><Link to="/" active>About</Link></Nav.Item>
      <Nav.Item><Link to="/portfolio" active>Portfolio</Link></Nav.Item>
      <Nav.Item><Link to="/contact" active>Contact</Link></Nav.Item>
    </Nav>
    </Container>
  </Navbar>

    // <header className="flex-row px-1">
    //   <h2>
    //     <a data-testid="link" href="/">
    //       <span role="img" aria-label="camera"> 📸</span> Kait Weishaar  |  Full Stack Web Developer
    //     </a>
    //   </h2>
    //   <nav>
    //     <ul className="flex-row">
    //       {/* <li className="mx-2">
    //         <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
    //           About me
    //         </a>
    //       </li> */}

    //       {/* Can I map over the sections of the page to create their li's */}

    //       {sections.map(section => (
    //          <li className="nav-item" key={section}>
    //          <a
    //            href={'#' + section.toLowerCase()}
    //            onClick={() => props.handlePageChange(section)}
    //            className={
    //              props.currentPage === section ? 'nav-link active' : 'nav-link'
    //            }
    //          >
    //            {section}
    //          </a>
    //        </li>
    //       ))}
    //       <li className="mx-2">
    //         <a data-testid="resume" href="../../src/assets/Weishaar_Resume_2021.pdf" download="Weishaar-Resume" >
    //           Resume 
    //         </a>
    //       </li>
    //       {/* <li className="mx-2">
    //         <a data-testid="projects" href="#project" onClick={() => setContactSelected(false)}> //check what I'm calling the project section
    //           Portfolio
    //         </a>
    //       </li>
    //       <li className={`mx-2 ${contactSelected && 'navActive'}`}>
    //         <span onClick={() => setContactSelected(true)}>Contact</span>
    //       </li> */}
          
            
    //       ))
    //     </ul>
    //   </nav>
    // </header>
  );
}

export default Nav;
