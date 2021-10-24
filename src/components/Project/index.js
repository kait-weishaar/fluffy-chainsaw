import React from 'react';
// import coverImage from '../../assets/cover/cover-image.jpg';
// import Card from 'react-bootstrap/Card';
// import ListGroupItem from 'react-bootstrap/ListGroupItem';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Button from 'react-bootstrap/Button'
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CCol, CCardLink, CCardSubtitle} from '@coreui/react';


const Project = (props) => {
    return(
                        <CCol xs className="col">
                          <CCard className="w-50 mb-2">
                            <CCardImage orientation="top" src={props.image} />
                            <CCardBody>
                              <CCardTitle>{props.name}</CCardTitle>
                              <CCardSubtitle className="mb-2 text-medium-emphasis">{props.technologies}</CCardSubtitle>
                              <CCardText>{props.description} </CCardText>
                              <CCardLink href={props.github}>Github</CCardLink>
                              <CCardLink href={props.deployment}>Deployment</CCardLink>
                            </CCardBody>
                          </CCard>
                        </CCol>

    );
    }


    export default Project;