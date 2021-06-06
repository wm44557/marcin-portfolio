import React from 'react';
import { StyledForm, StyledInputField } from '../styles/ContactStyles';

const Contact = () => (
  <>
    <StyledForm>
      <div className="info">
        <span className="mark primary normal">Email</span>
        <span>
          <a href="mailto:marwrz36@gmail.com"> marwrz36@gmail.com</a>
        </span>
      </div>
      <div className="info">
        <span className="mark primary normal">Telefon</span>
        <span>
          <a href="tel:+48515426655">+48 515426655</a>
        </span>
      </div>
      <br />
      <span className="mark primary normal">Formularz kontaktowy</span>
      <StyledInputField>
        <input type="text" placeholder="" />
        <label>e-mail</label>
        <span />
      </StyledInputField>
      <StyledInputField>
        <input type="text" placeholder="" />
        <label>tytuł</label>
        <span />
      </StyledInputField>
      <StyledInputField>
        <textarea />
        <label>opis</label>
        <span />
      </StyledInputField>
      <button>wyślij wiadomość</button>
    </StyledForm>
  </>
);

export default Contact;
