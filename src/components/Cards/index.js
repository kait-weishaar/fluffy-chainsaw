import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import {CCardTitle, CCardText, CCardLink, CRow, CCol, CCardImage, CCardBody, CCardFooter, CCard, CCardSubtitle} from '@coreui/react';


  const Cards = () => {
    return (

      <CRow xs={{ cols: 1, gutter: 1 }} md={{ cols: 3 }}>
                        <CCol sm={6}>
                          <CCard className="w-50">
                            <CCardImage orientation="top" src="data:image/jpeg;base64,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" />
                            <CCardBody>
                              <CCardTitle>Volley-All</CCardTitle>
                              <CCardSubtitle className="mb-2 text-medium-emphasis">Sequelize  MVC  Javascript  RESTful API  Bootstrap</CCardSubtitle>
                              <CCardText>
                                  An application to facilitate the management of tavern-league volleyball.
                              </CCardText>
                              <CCardLink href="https://github.com/rrcampbell-exe/volley-all">Github</CCardLink>
                              <CCardLink href="https://volley-all.herokuapp.com/login">Deployment</CCardLink>
                            </CCardBody>
                            <CCardFooter>
                              <small className="text-medium-emphasis">Group Project</small>
                            </CCardFooter>
                          </CCard>
                        </CCol>
                        <CCol sm={6}>
                          <CCard className="w-50">
                            <CCardImage orientation="top" src="https://github.com/kait-weishaar/Challenge-2/blob/main/assets/images/run-buddy.jpg" />
                            <CCardBody>
                              <CCardTitle>Run-Buddy</CCardTitle>
                              <CCardSubtitle className="mb-2 text-medium-emphasis">Front End  Javascript  CSS,HTML</CCardSubtitle>
                              <CCardText>
                                An application to find a personal trainer.
                              </CCardText>
                              <CCardLink href="https://github.com/kait-weishaar/run-buddy">Github</CCardLink>
                              <CCardLink href="https://kait-weishaar.github.io/run-buddy/">Deployment</CCardLink>
                            </CCardBody>
                          </CCard>
                        </CCol>
                        <CCol sm={6}>
                          <CCard className="w-50">
                            <CCardImage orientation="top" src="/images/react.jpg" />
                            <CCardBody>
                              <CCardTitle>Pirate Advice</CCardTitle>
                              <CCardSubtitle className="mb-2 text-medium-emphasis">Third Party APIS  MVC  Javascript  Bulma  CSS,HTML</CCardSubtitle>
                              <CCardText>
                                  An application to share advice from pirates....no one said it was good advice
                              </CCardText>
                              <CCardLink href="https://github.com/kait-weishaar/Pirate-Advice">Github</CCardLink>
                              <CCardLink href="https://kait-weishaar.github.io/Pirate-Advice/">Deployment</CCardLink>
                            </CCardBody>
                            <CCardFooter>
                              <small className="text-medium-emphasis">Group Project</small>
                            </CCardFooter>
                          </CCard>
                        </CCol>
                        <CCol sm={6}>
                          <CCard className="w-50">
                            <CCardImage orientation="top" src="/images/react.jpg" />
                            <CCardBody>
                              <CCardTitle>Horieson</CCardTitle>
                              <CCardSubtitle className="mb-2 text-medium-emphasis">Front End  SEO  CSS Semantic HTML</CCardSubtitle>
                              <CCardText>
                                  Refactoring existing code to meet accessibility and SEO requirements.
                              </CCardText>
                              <CCardLink href="https://github.com/kait-weishaar/Challenge-1-Refactor-Horiseon">Github</CCardLink>
                              <CCardLink href="https://kait-weishaar.github.io/Challenge-1-Refactor-Horiseon/">Deployment</CCardLink>
                            </CCardBody>
                          </CCard>
                        </CCol>
          </CRow>
     
      );
  
  }
  export default Cards;
// //https://www.digitalocean.com/community/tutorials/how-to-create-wrapper-components-in-react-with-props
// function Wrapper(props) {
//     return <div className="wrapper">{props.children}</div>;
// }

// function Projects () {  
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
//   }
  
  
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
      //       {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
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