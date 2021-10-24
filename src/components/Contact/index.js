 import React, { useState } from 'react';
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
