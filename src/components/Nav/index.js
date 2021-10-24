import React, {useState} from 'react'; 
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

