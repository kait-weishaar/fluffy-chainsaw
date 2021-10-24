import React from 'react';
import { CRow} from '@coreui/react';
import Project from '../Project';


const projects = [
  {
    id: 1,
    name: "Volley-All",
    image: "https://github.com/rrcampbell-exe/volley-all/blob/main/screenshot-login.png?raw=true",
    github: "https://github.com/rrcampbell-exe/volley-all",
    deployment: "https://volley-all.herokuapp.com/login",
    description: "An application to facilitate the management of tavern-league volleyball.",
    technologies: "Sequelize  MVC  Javascript  RESTful API  Bootstrap"
  },
  {
    id: 2,
    name: "Pirate Advice",
    image: "https://github.com/kait-weishaar/Challenge-2/blob/main/assets/images/group1.jpg?raw=true",
    github: "https://github.com/kait-weishaar/Pirate-Advice",
    deployment: "https://kait-weishaar.github.io/Pirate-Advice/",
    description: "An application to share advice from pirates.",
    technologies: "Third Party APIS  MVC  Javascript  Bulma  CSS,HTML"
  },
  {
    id: 3,
    name: "Horieson",
    image: "https://github.com/kait-weishaar/Challenge-2/blob/main/assets/images/horiseon.jpg?raw=true",
    github: "https://github.com/kait-weishaar/Challenge-1-Refactor-Horiseon",
    deployment: "https://kait-weishaar.github.io/Challenge-1-Refactor-Horiseon/",
    description: "Refactoring existing code to meet accessibility and SEO requirements.",
    technologies: "Front End  SEO  CSS Semantic HTML", 
  },
  {
    id: 4,
    name: "Run-Buddy",
    image: "https://github.com/kait-weishaar/Challenge-2/blob/main/assets/images/run-buddy.jpg?raw=true",
    github: "https://github.com/kait-weishaar/run-buddy",
    deployment: "https://kait-weishaar.github.io/run-buddy/",
    description: "An application to find a personal trainer.",
    technologies: "Front End  Javascript  CSS,HTML",
  },
  {
    id: 5,
    name: "Weather-App",
    image: "https://github.com/kait-weishaar/Weather-App/blob/main/assets/Capture.PNG?raw=true",
    github: "https://github.com/kait-weishaar/Weather-App",
    deployment: "https://kait-weishaar.github.io/Weather-App/",
    description: "An application to check the weather by city",
    technologies: "Third-Pary APIs  Javascript  CSS,HTML",
  },
  {
    id: 6,
    name: "Budget-Tracker",
    image: "https://github.com/kait-weishaar/furry-guide/blob/main/walkthrough.gif?raw=true",
    github: "https://github.com/kait-weishaar/furry-guide",
    deployment: "https://dry-shore-08980.herokuapp.com/",
    description: "An application to track personal finances",
    technologies: "Back End MongoDB Javascript  CSS,HTML",
  }
];

function Wrapper(props) {return <div className="wrapper">{props.children}</div>; }

  const Cards = () => {

   
    return (

       <CRow xs={{ cols: 2, gutter: 0.5 }} md={{ cols: 2 }} className="container justify-content-center">
             


       <Wrapper className='row row-cols-2 row-cols-md-2'>
       <CRow xs={{ cols: 2, gutter: 0.5 }} md={{ cols: 2 }} className="container justify-content-center">
         {projects.map((project) => (
           <Project 
           name={project.name}
           image={project.image}
           github={project.github}
           deployment={project.deployment}
           technologies={project.technologies}
           description={project.description}
           />
         ))}
         </CRow>
       </Wrapper>
                
          
     
      );
  
  }

  export default Cards;

 