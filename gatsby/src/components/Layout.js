import React, { useContext } from 'react';
import styled from 'styled-components';
import { IoLanguageSharp } from 'react-icons/io5';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav';
import Typography from '../styles/Typography';
import LangContext from './LanguageContext';

const SiteBorderStyles = styled.div`
  position: relative;
  max-width: 1300px;
  margin: 3rem auto 2rem auto;
  margin-top: clamp(2rem, 10vw, 5rem);
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
    margin-right: 1.5rem;
  }
  .lang {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    transform: translate(10%, -50%) rotate(4deg);
    padding: 1px;
    div {
      margin: 2px;
      margin-left: 10px;
      padding: 3px;
      color: black;
      &:hover {
        border-bottom: 2px solid var(--grey);
        cursor: pointer;
      }
    }
    .active {
      border-bottom: 2px solid var(--grey);
      color: var(--grey);
    }
  }
`;
export default function Layout({ children }) {
  const [current, setCurrent] = useContext(LangContext);

  return (
    <>
      <Typography />
      <GlobalStyles />
      <SiteBorderStyles>
        <div className="mark lang">
          <IoLanguageSharp />
          <div
            className={current === 'pl' ? 'active' : null}
            onClick={() => setCurrent('pl')}
          >
            pl
          </div>
          <div
            className={current === 'en' ? 'active' : null}
            onClick={() => setCurrent('en')}
          >
            en
          </div>
        </div>
        <Nav />
        {children}
      </SiteBorderStyles>
    </>
  );
}
