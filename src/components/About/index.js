import React from 'react';
// import coverImage from '../../assets/cover/cover-image.jpg';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
// import Button from 'react-bootstrap/Button'
function About() {
  return (
    // <section className="my-5">
    //   <h1 id="about">Kait Weishaar</h1>
    //   <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    //   <div className="my-2">
    //     <p>
    //       I'm a full stack web developer and designer, with a background in Architecture and Engineering. I have a Bachelor's of Architecture and a Master's in Structural Engineering, which have helped hone my design thinking and critical problem solving skills.
    //     </p>
    //   </div>
    // </section>

    //above was copied from module, I can do better

        

    
      <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Kait Weishaar</Card.Title>
        <Card.Text>
        I'm a full stack web developer and designer, with a background in Architecture and Engineering.
        I have a Bachelor's of Architecture and a Master's in Structural Engineering, which have helped
         hone my design thinking and critical problem solving skills.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Full Stack Developer</ListGroupItem>
        <ListGroupItem>MERN Stack</ListGroupItem>
        <ListGroupItem>Masters of Engineering</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Deployment</Card.Link>
        <Card.Link href="#">Github</Card.Link>
      </Card.Body>
    </Card>
    
  );
}

export default About;



//  <h1 id="about">Kait Weishaar</h1>
{/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover-image" />
<div className="row justify-content-center" id="about-container">       
<div lg={6} md={12}>
    <center><img src="https://github.com/kait-weishaar/Challenge-2/blob/main/assets/images/crop2.jpg" className="my-image" alt="Kait's Headshot"/></center>
    <p className="title">Full Stack Web Developer</p>
    <h2 className="bio">Bio</h2>
      <p>
      I'm a full stack web developer and designer, with a background in Architecture and Engineering.
      I have a Bachelor's of Architecture and a Master's in Structural Engineering, which have helped hone my design thinking and critical problem solving skills.
      </p>
</div>

</div> */}