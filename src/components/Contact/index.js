 import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import { CForm, CFormLabel, CFormInput, CFormTextarea, CButton} from '@coreui/react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
        const [formState, setFormState] = useState({ name: '', email: '', message: '' });

        const [errorMessage, setErrorMessage] = useState('');
        const { name, email, message } = formState;

        const handleSubmit = (e) => {
          e.preventDefault();
          if (!errorMessage) {
            console.log('Submit Form', formState);
          }
        };

        const handleChange = (e) => {
          if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
              setErrorMessage('Your email is invalid.');
            } else {
              setErrorMessage('');
            }
          } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
          }
        };

        return (

          <CForm onSubmit={handleSubmit}>
                <h2>Send me a message!</h2>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Name</CFormLabel>
                  <CFormInput type="text" id="exampleFormControlInput1" name='Name' placeholder="John Doe" defaultValue={ name } onBlur={ handleChange }/>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput2">Email address</CFormLabel>
                  <CFormInput type="email" id="exampleFormControlInput1" name='Email' placeholder="name@example.com" defaultValue={ email } onBlur={ handleChange }/>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlTextarea1">Message</CFormLabel>
                  <CFormTextarea id="exampleFormControlTextarea1" name='Message' placeholder="Your message" rows="3" defaultValue={ message } onBlur={ handleChange }></CFormTextarea>
                </div>
                { errorMessage && (
                          <div>
                              <p className=" error-text">{ errorMessage }</p>
                          </div>
                  ) }
                  <CButton color="success">Send</CButton>
          </CForm>
      
  );
}

export default ContactForm;


  // <Form onSubmit={handleSubmit}>
        //       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        //         <Form.Label>Name</Form.Label>
        //         <Form.Control type="email" defaultValue={ name } placeholder="John Doe" onBlur={ handleChange }/>
        //       </Form.Group>
        //       <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        //         <Form.Label>Email address</Form.Label>
        //         <Form.Control type="email" defaultValue={ email } placeholder="name@example.com" onBlur={ handleChange }/>
        //       </Form.Group>
        //       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        //         <Form.Label>Message</Form.Label>
        //         <Form.Control as="textarea" rows={3} defaultValue={ message } placeholder="Message" onBlur={ handleChange }/>
        //       </Form.Group>
        //       { errorMessage && (
        //             <div>
        //                 <p className=" error-text">{ errorMessage }</p>
        //             </div>
        //     ) }
        //       <Button variant="primary" type="submit">Submit</Button>
        // </Form>
    // <section>

    //   {/* <h1 data-testid="h1tag">Contact me</h1>
    //   <form id="contact-form" onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="name">Name:</label>
    //       <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email address:</label>
    //       <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
    //     </div>
    //     <div>
    //       <label htmlFor="message">Message:</label>
    //       <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
    //     </div>
    //     {errorMessage && (
    //       <div>
    //         <p className="error-text">{errorMessage}</p>
    //       </div>
    //     )}
    //     <button data-testid="button" type="submit">Submit</button>
    //   </form> */}
    // </section>