import React, { useState } from 'react';


// const ProjectList = ({ category }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentPhoto, setCurrentPhoto] = useState();

  const [projects] = useState([
    {
      "id": 1,
      "name": "Volley-All",
      "image": "https://github.com/kait-weishaar/Challenge-2/blob/main/assets/images/pexels-jim-de-ramos-1263426.jpg",
      "github": "https://github.com/rrcampbell-exe/volley-all",
      "deployment": "https://volley-all.herokuapp.com/login",
      "description": "An application to facilitate the management of tavern-league volleyball.",
      "technologies": "Sequelize  MVC  Javascript  RESTful API  Bootstrap"
    },
    {
      name: 'Pirate Advice',
      category: 'full-stack',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Horiseon',
      category: 'front-end',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Run-Buddy',
      category: 'front-end',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    }
  ]);

  // const currentPhotos = photos.filter((photo) => photo.category === category);

  // const toggleModal = (image, i) => {
  //   setCurrentPhoto({ ...image, index: i });
  //   setIsModalOpen(!isModalOpen);
  // };

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
              <a href={props.github}><img src="https://img.icons8.com/ios/40/000000/github.png" alt="github-icon" id="port-icon"/></a> 
              <a href={props.deployedapp}><img src="https://img.icons8.com/metro/35/000000/cursor.png" alt="app-icon" id="port-icon"/></a> 
              </div>
            </li>
            <li>
            {props.skills}
            </li>
          </ul>
        </div>
      </div>
    );


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
          <ProjectCard 
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
