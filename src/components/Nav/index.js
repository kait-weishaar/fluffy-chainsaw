import React, {useState} from 'react'; 
// import Navbar from 'react-bootstrap/Navbar';!!!!not rendering with react...
// import Container from 'react-bootstrap/Container';
import {CNavItem, CContainer, CCollapse, CNavbarNav, CNavbarToggler, CNavbarBrand, CNavbar} from '@coreui/react';
import {Link} from 'react-router-dom'



function Nav() {
  
  const [visible, setVisible] = useState(false)
  return (
  
  <>
  <CNavbar expand="lg" colorScheme="light" className="bg-light" className="nav-tabs nav-fill">
    <CContainer fluid className="space-between">
      <CNavbarBrand href="#">Kait Weishaar</CNavbarBrand>
      <CNavbarToggler
        aria-label="Toggle navigation"
        aria-expanded={visible}
        onClick={() => setVisible(!visible)}
      />
      <CCollapse className="navbar-collapse" visible={visible}>
        <CNavbarNav className=" nav nav-tabs nav-fill">
          <CNavItem className='nav-item'>
            <Link to="/" className='nav-link active' >
              About
            </Link>
          </CNavItem>
          <CNavItem className='nav-item'>
            <Link to="/portfolio" className='nav-link'>Portfolio</Link>
          </CNavItem>
          <CNavItem className='nav-item'>
            <Link to="/contact" className='nav-link'>Contact</Link>
          </CNavItem>
          <CNavItem className='nav-item'>
                <a data-testid="resume" href="./Weishaar_Resume_2021.pdf" download="Weishaar-Resume" className='nav-link'>
                  Resume 
                </a>
          </CNavItem>
        </CNavbarNav>
      </CCollapse>
    </CContainer>
  </CNavbar>
</>
);
  
}
export default Nav;



//   <Navbar bg="dark" variant="dark">
  //       <Container>
  //           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  //           <Nav className="me-auto">
  //             <Nav.Item><Link to="/" active>About</Link></Nav.Item>
  //             <Nav.Item><Link to="/portfolio" active>Portfolio</Link></Nav.Item>
  //             <Nav.Item><Link to="/contact" active>Contact</Link></Nav.Item>
  //           </Nav>
  //       </Container>
  // </Navbar>




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


