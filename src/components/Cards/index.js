import React, { useState } from 'react';


// const ProjectList = ({ category }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentPhoto, setCurrentPhoto] = useState();

  const projects = [
    {
      id: 1,
      name: "Volley-All",
      image: "https://github.com/kait-weishaar/Challenge-2/blob/main/assets/images/pexels-jim-de-ramos-1263426.jpg",
      github: "https://github.com/rrcampbell-exe/volley-all",
      deployment: "https://volley-all.herokuapp.com/login",
      description: "An application to facilitate the management of tavern-league volleyball.",
      technologies: "Sequelize  MVC  Javascript  RESTful API  Bootstrap"
    },
    {
      id: 2,
      name: "Pirate Advice",
      image: "https://github.com/kait-weishaar/Pirate-Advice/blob/main/assets/images/group1.jpg",
      github: "https://github.com/kait-weishaar/Pirate-Advice",
      deployment: "https://kait-weishaar.github.io/Pirate-Advice/",
      description: "An application to share advice from pirates.",
      technologies: "Third Party APIS  MVC  Javascript  Bulma  CSS,HTML"
    },
    {
      id: 3,
      name: "Horieson",
      image: "https://github.com/kait-weishaar/Challenge-2/blob/main/assets/images/horiseon.jpg",
      github: "https://github.com/kait-weishaar/Challenge-1-Refactor-Horiseon",
      deployment: "https://kait-weishaar.github.io/Challenge-1-Refactor-Horiseon/",
      description: "Refactoring existing code to meet accessibility and SEO requirements.",
      technologies: "Front End  SEO  CSS Semantic HTML", 
    },
    {
      id: 4,
      name: "Run-Buddy",
      image: "https://github.com/kait-weishaar/Challenge-2/blob/main/assets/images/run-buddy.jpg",
      github: "https://github.com/kait-weishaar/run-buddy",
      deployment: "https://kait-weishaar.github.io/run-buddy/",
      description: "An application to find a personal trainer.",
      technologies: "Front End  Javascript  CSS,HTML",
    }
  ];

  // const currentPhotos = photos.filter((photo) => photo.category === category);

  // const toggleModal = (image, i) => {
  //   setCurrentPhoto({ ...image, index: i });
  //   setIsModalOpen(!isModalOpen);
  // };
  const Card = () => {
    return (
      <div className="card"> 
          <div className="img-container">
            <img alt={props.name} src={props.image}/>
          </div>
          <div className="content">
            <ul>
              <li>
                <p className="project-title">{props.name}</p>
              </li>
              <li>
              <p className="project-description">{props.description}</p>
              </li>
              <li>
                <div className="project-icons">
                <a href={props.github}><img src="https://img.icons8.com/windows/32/000000/github.png"/></a> 
                <a href={props.deployment}><img src="https://img.icons8.com/windows/32/000000/application-window.png" alt="app-icon" id="port-icon"/></a> 
                </div>
              </li>
              <li>
              {props.technologies}
              </li>
            </ul>
          </div>
        </div>
      );
  
  }
  
//https://www.digitalocean.com/community/tutorials/how-to-create-wrapper-components-in-react-with-props
function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Projects () {  
    return (
    <>
    <div className="project">
    <h1 className="title">full stack projects</h1>
    </div>

      <Wrapper>
        {projects.map((project) => (
          <Card 
          name={project.name}
          key={project.id}
          image={project.image}
          github={project.github}
          deployment={project.deployment}
          technologies={project.technologies}
          description={project.description}
          />
        ))}
      </Wrapper>
    </>
    
    );
  }
  
  export default Projects;
