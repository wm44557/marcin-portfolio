import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 70%;
  height: 600px;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 4rem;
  .info {
    margin-bottom: 0.5rem;
  }
  .mapleSyrup {
    display: none;
  }
  button {
    display: block;
    margin: 0 auto;
    padding: 5px;
    font-size: 14px;
    width: 60%;
    max-width: 400px;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;
export const StyledInputField = styled.div`
  position: relative;
  margin-bottom: 2rem;
  margin-top: 2.5rem;
  :focus {
    outline: none;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }
  label {
    position: absolute;
    left: 0;
    width: 100%;
    font-size: 18px;
    top: 9px;
    color: var(--grey);
    transition: 0.45s;
    z-index: -1;
    letter-spacing: 0.5px;
  }
  input,
  textarea {
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
    border: 0;
    padding: 4px 0;
    border-bottom: 2px solid var(--darkGrey);
    color: var(--primary);
    background-color: transparent;
    &:focus ~ span:before,
    &:focus ~ span:after {
      width: 100%;
      transition: 0.45s;
    }
    &:focus ~ label {
      top: -16px;
      font-size: 14px;
      color: white;
      transition: 0.45s;
      display: inline;
    }
  }
  .hidden {
    display: none;
  }
  textarea {
    height: 200px;
  }
  span {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    z-index: 99;
    &:before,
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: var(--primary);
      transition: 0.45s;
    }
    &:after {
      left: 0;
      right: 0;
    }
  }
`;
