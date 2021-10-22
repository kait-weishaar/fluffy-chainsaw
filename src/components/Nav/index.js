import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const [About, Portfolio, Contact] = sections;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Kait Weishaar  |  Full Stack Web Developer
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {/* <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li> */}

          {/* Can I map over the sections of the page to create their li's */}

          {sections.map(section => (
             <li className="nav-item" key={section}>
             <a
               href={'#' + section.toLowerCase()}
               onClick={() => props.handlePageChange(section)}
               className={
                 props.currentPage === section ? 'nav-link active' : 'nav-link'
               }
             >
               {section}
             </a>
           </li>
          ))}
          <li className="mx-2">
            <a data-testid="resume" href="../../src/assets/Weishaar_Resume_2021.pdf" download="Weishaar-Resume" onClick={() => setContactSelected(false)}>
              Resume 
            </a>
          </li>
          {/* <li className="mx-2">
            <a data-testid="projects" href="#project" onClick={() => setContactSelected(false)}> //check what I'm calling the project section
              Portfolio
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li> */}
          
            
          ))
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
