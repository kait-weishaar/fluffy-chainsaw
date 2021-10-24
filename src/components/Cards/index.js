import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
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

      // <CRow xs={{ cols: 2, gutter: 0.5 }} md={{ cols: 2 }} className="container justify-content-center">
             


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

  {/* {/* export default Cards;
// //https://www.digitalocean.com/community/tutorials/how-to-create-wrapper-components-in-react-with-props
// function Wrapper(props) { 
//     return <div className="wrapper">{props.children}</div>;
// 

 function Projects () {  
//     return (
//     <>
//     <div className="project">
//     <h1 className="title">Web Development Projects</h1>
//     </div>

//       <Wrapper>
//         {projects.map((project) => (
//           <Cards 
//           name={project.name}
//           key={project.id}
//           image={project.image}
//           github={project.github}
//           deployment={project.deployment}
//           technologies={project.technologies}
//           description={project.description}
//           />
//         ))}
//       </Wrapper>
//     </>
    
//     );
//   } *
  
  
// const ProjectList = ({ category }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentPhoto, setCurrentPhoto] = useState();

  // const projects = [
  //   {
  //     id: 1,
  //     name: "Volley-All",
  //     image: "https://github.com/kait-weishaar/Challenge-2/blob/main/assets/images/pexels-jim-de-ramos-1263426.jpg",
  //     github: "https://github.com/rrcampbell-exe/volley-all",
  //     deployment: "https://volley-all.herokuapp.com/login",
  //     description: "An application to facilitate the management of tavern-league volleyball.",
  //     technologies: "Sequelize  MVC  Javascript  RESTful API  Bootstrap"
  //   },
  //   {
  //     id: 2,
  //     name: "Pirate Advice",
  //     image: "https://github.com/kait-weishaar/Pirate-Advice/blob/main/assets/images/group1.jpg",
  //     github: "https://github.com/kait-weishaar/Pirate-Advice",
  //     deployment: "https://kait-weishaar.github.io/Pirate-Advice/",
  //     description: "An application to share advice from pirates.",
  //     technologies: "Third Party APIS  MVC  Javascript  Bulma  CSS,HTML"
  //   },
  //   {
  //     id: 3,
  //     name: "Horieson",
  //     image: "https://github.com/kait-weishaar/Challenge-2/blob/main/assets/images/horiseon.jpg",
  //     github: "https://github.com/kait-weishaar/Challenge-1-Refactor-Horiseon",
  //     deployment: "https://kait-weishaar.github.io/Challenge-1-Refactor-Horiseon/",
  //     description: "Refactoring existing code to meet accessibility and SEO requirements.",
  //     technologies: "Front End  SEO  CSS Semantic HTML", 
  //   },
  //   {
  //     id: 4,
  //     name: "Run-Buddy",
  //     image: "https://github.com/kait-weishaar/Challenge-2/blob/main/assets/images/run-buddy.jpg",
  //     github: "https://github.com/kait-weishaar/run-buddy",
  //     deployment: "https://kait-weishaar.github.io/run-buddy/",
  //     description: "An application to find a personal trainer.",
  //     technologies: "Front End  Javascript  CSS,HTML",
  //   }
  // ];

  // const currentPhotos = photos.filter((photo) => photo.category === category);

  // const toggleModal = (image, i) => {
  //   setCurrentPhoto({ ...image, index: i });
  //   setIsModalOpen(!isModalOpen);
  // };



   // <Row xs={1} md={2} className="g-4">
      //       {/* {Array.from({ length: 4 }).map((_, idx) => ( 
      //         <Col>
      //           <Card>
      //             <Card.Img variant="top" src={props.image} />
      //             <Card.ImgOverlay>
      //                   <Card.Body>
      //                     <Card.Title className="project-title">{props.name}</Card.Title>
      //                     <Card.Text className="project-description">
      //                         {props.description}
      //                     </Card.Text>
      //                         <br></br>
      //                     <Card.Text className="project-technologies">
      //                         {props.technologies}
      //                     </Card.Text>    
      //                     <Card.Link href="#">Deployment</Card.Link>
      //                     <Card.Link href="#">Github</Card.Link>
      //                   </Card.Body>
      //             </Card.ImgOverlay>
      //           </Card>
      //         </Col>
      //       ))
      // </Row>

      // <Card className="card"> 
      //     <div className="img-container">
      //       <img alt={props.name} src={props.image}/>
      //     </div>
      //     <div className="content">
      //       <ul>
      //         <li>
      //           <p className="project-title">{props.name}</p>
      //         </li>
      //         <li>
      //         <p className="project-description">{props.description}</p>
      //         </li>
      //         <li>
      //           <div className="project-icons">
      //           <a href={props.github}><img src="https://img.icons8.com/windows/32/000000/github.png"/></a> 
      //           <a href={props.deployment}><img src="https://img.icons8.com/windows/32/000000/application-window.png" alt="app-icon" id="port-icon"/></a> 
      //           </div>
      //         </li>
      //         <li>
      //         {props.technologies}
      //         </li>
      //       </ul>
      //     </div>
      //   </Card>



      // <CCol xs>
      //                     <CCard className="w-50">
      //                       <CCardImage orientation="top" src="https://github.com/rrcampbell-exe/volley-all/blob/main/screenshot-login.png?raw=true" />
      //                       <CCardBody>
      //                         <CCardTitle>Volley-All</CCardTitle>
      //                         <CCardSubtitle className="mb-2 text-medium-emphasis">Sequelize  MVC  Javascript  RESTful API  Bootstrap</CCardSubtitle>
      //                         <CCardText>
      //                             An application to facilitate the management of tavern-league volleyball.
      //                         </CCardText>
      //                         <CCardLink href="https://github.com/rrcampbell-exe/volley-all">Github</CCardLink>
      //                         <CCardLink href="https://volley-all.herokuapp.com/login">Deployment</CCardLink>
      //                       </CCardBody>
      //                       <CCardFooter>
      //                         <small className="text-medium-emphasis">Group Project</small>
      //                       </CCardFooter>
      //                     </CCard>
      //                   </CCol>
      //                   <CCol xs className="mb-5">
      //                     <CCard className="w-50">
      //                       <CCardImage orientation="top" src="https://github.com/kait-weishaar/Challenge-2/blob/main/assets/images/group1.jpg?raw=true" />
      //                       <CCardBody>
      //                         <CCardTitle>Pirate Advice</CCardTitle>
      //                         <CCardSubtitle className="mb-2 text-medium-emphasis">Third Party APIS  MVC  Javascript  Bulma  CSS,HTML</CCardSubtitle>
      //                         <CCardText>
      //                             An application to share advice from pirates....no one said it was good advice
      //                         </CCardText>
      //                         <CCardLink href="https://github.com/kait-weishaar/Pirate-Advice">Github</CCardLink>
      //                         <CCardLink href="https://kait-weishaar.github.io/Pirate-Advice/">Deployment</CCardLink>
      //                       </CCardBody>
      //                       <CCardFooter>
      //                         <small className="text-medium-emphasis">Group Project</small>
      //                       </CCardFooter>
      //                     </CCard>
      //                   </CCol>
      //                   <CCol xs>
      //                     <CCard className="w-50">
      //                       <CCardImage orientation="top" src="https://github.com/kait-weishaar/Challenge-2/blob/main/assets/images/run-buddy.jpg?raw=true" />
      //                       <CCardBody>
      //                         <CCardTitle>Run-Buddy</CCardTitle>
      //                         <CCardSubtitle className="mb-2 text-medium-emphasis">Front End  Javascript  CSS,HTML</CCardSubtitle>
      //                         <CCardText>
      //                           An application to find a personal trainer.
      //                         </CCardText>
      //                         <CCardLink href="https://github.com/kait-weishaar/run-buddy">Github</CCardLink>
      //                         <CCardLink href="https://kait-weishaar.github.io/run-buddy/">Deployment</CCardLink>
      //                       </CCardBody>
      //                     </CCard>
      //                   </CCol>
                        
      //                   <CCol xs>
      //                     <CCard className="w-50">
      //                       <CCardImage orientation="top" src="https://github.com/kait-weishaar/Challenge-2/blob/main/assets/images/horiseon.jpg?raw=true" />
      //                       <CCardBody>
      //                         <CCardTitle>Horiseon</CCardTitle>
      //                         <CCardSubtitle className="mb-2 text-medium-emphasis">Front End  SEO  CSS Semantic HTML</CCardSubtitle>
      //                         <CCardText>
      //                             Refactoring existing code to meet accessibility and SEO requirements.
      //                         </CCardText>
      //                         <CCardLink href="https://github.com/kait-weishaar/Challenge-1-Refactor-Horiseon">Github</CCardLink>
      //                         <CCardLink href="https://kait-weishaar.github.io/Challenge-1-Refactor-Horiseon/">Deployment</CCardLink>
      //                       </CCardBody>
      //                     </CCard>
 //                   </CCol>*/}