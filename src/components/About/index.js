import React from 'react';
// import coverImage from '../../assets/cover/cover-image.jpg';
// import Card from 'react-bootstrap/Card';
// import ListGroupItem from 'react-bootstrap/ListGroupItem';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Button from 'react-bootstrap/Button'
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText} from '@coreui/react';

function About() {
  return (
  
    <CCard className="w-50">
    <div className="">
        <CCardTitle>
            <div className="section-title secondary-border">
                About Kait
            </div>
        </CCardTitle>
        <CCardImage orientation="top" src="https://github.com/kait-weishaar/Challenge-2/blob/main/assets/images/crop2.jpg?raw=true" />
        <CCardBody>
            <CCardText>
                <p className="flex-row">
                I'm a full stack web developer and designer currently based out of Chicago, with a background in Architecture and Engineering.
                I have a Bachelor's of Architecture and a Master's in Structural Engineering, which have helped hone my design thinking and critical problem solving skills.
                </p>
            </CCardText>
        </CCardBody>
    </div>
</CCard>
    
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