import React, { useContext } from 'react';
import { StyledForm, StyledInputField } from '../styles/ContactStyles';
import useForm from '../utils/UseForm';
import LangContext from '../components/LanguageContext';
import { contactPl, contactEn } from '../data/text';
import SEO from '../components/SEO';

const ContactPage = () => {
  const defaultValues = {
    email: '',
    title: '',
    description: '',
    mapleSyrup: '',
  };
  const {
    values,
    updateValues,
    submitOrder,
    error,
    message,
    loading,
  } = useForm(defaultValues);
  const [current] = useContext(LangContext);
  const text = current === 'pl' ? contactPl : contactEn;
  return (
    <>
      <SEO title="Contact page" />

      <StyledForm onSubmit={(e) => submitOrder(e)} disabled={loading}>
        <div className="info">
          <span className="mark primary normal">Email</span>
          <span>
            <a href="mailto:marwrz36@gmail.com"> marwrz36@gmail.com</a>
          </span>
        </div>
        <div className="info">
          <span className="mark primary normal">{text.phone}</span>
          <span>
            <a href="tel:+48515426655">+48 515426655</a>
          </span>
        </div>
        <br />
        <span className="mark primary normal">{text.form}</span>
        <h3>
          {error && <span className="mark tertiary normal">{error}</span>}
          {message && <span className="mark tertiary normal">{message}</span>}
        </h3>
        <StyledInputField>
          <input
            disabled={loading}
            type="email"
            name="email"
            onChange={updateValues}
            value={values.email}
          />
          <label className={values.email !== '' ? 'hidden' : null}>
            {text.email}
          </label>
          <span />
        </StyledInputField>
        <StyledInputField>
          <input
            type="text"
            disabled={loading}
            name="title"
            onChange={updateValues}
            autoComplete="false"
            value={values.title}
          />
          <label className={values.title !== '' ? 'hidden' : null}>
            {text.title}
          </label>
          <span />
        </StyledInputField>
        <StyledInputField>
          <textarea
            name="description"
            onChange={updateValues}
            autoComplete="false"
            disabled={loading}
            value={values.description}
          />
          <label className={values.description !== '' ? 'hidden' : null}>
            {text.description}
          </label>
          <span />
        </StyledInputField>
        <input
          type="mapleSyrup "
          name="mapleSyrup"
          value={values.mapleSyrup}
          onChange={updateValues}
          className="mapleSyrup"
        />
        <button disabled={loading}>{text.button}</button>
      </StyledForm>
    </>
  );
};

export default ContactPage;
