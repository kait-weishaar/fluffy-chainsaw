import React from 'react';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText} from '@coreui/react';

function About() {
  return (
  
    <CCard className="w-50 about">
    
        <CCardTitle>
            <div className="section-title secondary-border">
                About Kait
            </div>
        </CCardTitle>
        <CCardImage orientation="top" src="https://github.com/kait-weishaar/fluffy-chainsaw/blob/portfolio/src/assets/cropbetter.jpg?raw=true" />
        <CCardBody>
            <CCardText>
                <p className="flex-row">
                I'm a full stack web developer and designer currently based out of Chicago, with a background in Architecture and Engineering.
                I have a Bachelor's of Architecture and a Master's in Structural Engineering, which have helped hone my design thinking and critical problem solving skills.
                </p>
            </CCardText>
        </CCardBody>
    
</CCard>
    
  );
}

export default About;



