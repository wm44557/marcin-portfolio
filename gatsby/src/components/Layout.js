import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';

const ContentStyles = styled.div`
  background: white;
  padding: 2rem;
`;
const SiteBorderStyles = styled.div`
  max-width: 1200px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
  background-color: rgba(20, 19, 19, 0.75);
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(64, 64, 64, 0.55);
  -moz-box-shadow: 0px 0px 5px 0px rgba(64, 64, 64, 0.55);
  box-shadow: 0px 0px 5px 0px rgba(64, 64, 64, 0.55);
  display: grid;
  grid-template-columns: auto 1fr;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5em;
  }
`;
export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <SiteBorderStyles>
        <Nav />
        {children}
      </SiteBorderStyles>
    </>
  );
}
