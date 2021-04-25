import React from 'react';
import styled from 'styled-components';
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa';
import { RiGatsbyLine } from 'react-icons/ri';
import { BsPhone } from 'react-icons/bs';
import { SiCplusplus } from 'react-icons/si';
import { Link } from 'gatsby';
import SEO from '../components/SEO';
import nextIcon from '../assets/images/next.svg';
import nestIcon from '../assets/images/nest.svg';

const Container = styled.div`
  display: grid;
  margin: 3rem;
  margin-top: 7rem;
  grid-template-columns: 1fr auto;
  position: relative;
  .borderleft {
    border-left: 3px solid var(--darkGrey);
    position: absolute;
    top: 0;
    bottom: 10%;
  }

  @media (max-width: 850px) {
    .borderleft {
      display: none;
    }
  }
`;

const RightSide = styled.div`
  margin-left: 6rem;
   .fi {
    display: inline-block;
    padding: 0.6rem;
    transform: rotate(-3deg) translateY(2rem) translateX(-0.5rem);
  }
  h1 {
    font-size: 5rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 10px;
  }
  h2 {
    margin-top: 2rem;
    font-weight: 400;
    color: var(--green);

    span {
      color: var(--grey);
    }
  }
  p {
    margin-top: 2rem;
    font-weight: 300;
  }
  h3 {
    margin-top: 3rem;
    font-weight: 400;
    padding: 1rem 0;
    border-bottom: 3px solid var(--darkGrey);
  }
  ul {
    list-style: none;
    padding: 0;
    margin-right: 4rem;
    max-height: 500px;
    overflow: auto;
  }
  .nav {
    color: var(--darkGrey);

`;
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  .mark {
    display: inline-block;
    transform: rotate(3deg);
    font-size: 2rem;
    margin-right: 1rem;
    margin-bottom: 4px;
    font-weight: 400;
  }
  .sec {
    transform: rotate(-3deg);
  }
  .thi {
    transform: rotate(3deg);
  }
  .for {
    transform: rotate(-4deg);
  }
  .text {
    font-size: 1.7rem;
    font-weight: 300;
  }
  .icon {
    display: flex;
    font-size: 6rem;
    margin-right: 1.5rem;
    align-items: center;
  }
  li {
    display: flex;
    color: var(--grey);
    flex-direction: row;
    margin-top: 3rem;
  }
  img {
    color: white;
    font-size: 2rem;
    width: 20rem;
  }
`;
const LeftSideDiv = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: var(--green);
`;
const LeftSide = styled.div`
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    list-style: none;
    margin-top: 10rem;
    font-size: 4rem;
    padding: 4rem 2rem;
    border-right: 3px solid var(--darkGrey);
    li {
      margin-bottom: 4rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
    a {
      color: var(--grey);
      transition: 0.3s;
      &:hover {
        color: var(--green);
      }
    }
  }
`;
export default function FirstPage() {
  return (
    <Container>
      <SEO title="About me" />
      <div className="borderleft" />
      <RightSide>
        <h1> Marcin Wrzos</h1>
        <h2>
          23 years <span> / </span>Szczecin <span> / </span>student IT
        </h2>
        <p>
          Hi, I am Marcin. I am currently a 3rd year IT student at ZUT in
          Szczecin. I am a person with a sense of humor who pursues my targets.
          Exactly 2 years ago I set myself he goal of becoming a web developer
          and since then i have been scrupulously deepening my knowledge in this
          field. In my free time I code on youtubelive or do some coding
          courses. My hobby is football and tenis.
        </p>
        <h3>
          <span className="mark fi">## my services</span>
        </h3>
        <ServicesGrid>
          <ul>
            <li>### development</li>
            <li className="nav">### database</li>
            <li className="nav">### tools</li>
          </ul>
          <div>
            <ul>
              <li>
                <span className="icon">
                  <FaReact />
                </span>
                <span className="text">
                  <span className="mark">React</span>
                  (styled components, redux,mobx, axios, unit tests, GraphQl) +
                  TS/ES6
                </span>
              </li>
              <li>
                <span className="icon">
                  <RiGatsbyLine />
                </span>
                <span className="text">
                  <span className="mark sec">Gatsby</span>+ SanityIO (headless
                  cms), fetching data from api, creating graphiql nodes, SEO,
                  writing hooks
                </span>
              </li>
              <li>
                <span className="icon">
                  <img src={nextIcon} alt="" />
                </span>
                <span className="text">
                  <span className="mark thi">NextJs</span>+ KeystoneJS (Node
                  graphql server & TS & mongodb), Apollo Client mutations,
                  fetching caching, loading
                </span>
              </li>
              <li>
                <span className="icon">
                  <FaNodeJs />
                </span>
                <span className="text">
                  <span className="mark for">NodeJs</span>+ express, ajax, rest
                  api, authentication, schemas, email, mvc, middleware + mongodb
                </span>
              </li>
              <li>
                <span className="icon">
                  <FaPhp />
                </span>
                <span className="text">
                  <span className="mark thi">PHP</span> MVC, Routing, +
                  composer, guzzle
                </span>
              </li>
              <li>
                <span className="icon">
                  <img src={nestIcon} alt="" />
                </span>
                <span className="text">
                  <span className="mark thi">NestJs</span>(NodeJS framework) in
                  learning.. + MySQL & MariaDB or mongoose + TS,CRON auth,
                  validation, emails
                </span>
              </li>
              <li>
                <span className="icon">
                  <FaPython />
                </span>
                <span className="text">
                  <span className="mark sec">Python</span> Pandas, numpy,
                  matplotlib, scikit-learn
                </span>
              </li>
              <li>
                <span className="icon">
                  <BsPhone />
                </span>
                <span className="text">
                  <span className="mark for">React Native</span>
                  Simple apps, not complicated
                </span>
              </li>
              <li>
                <span className="icon">
                  <SiCplusplus />
                </span>
                <span className="text">
                  <span className="mark thi">C++</span>
                  Very often used in college, object, data structures
                </span>
              </li>
            </ul>
          </div>
        </ServicesGrid>
      </RightSide>
      <LeftSide>
        <LeftSideDiv />
        <ul>
          <li>
            <Link to="https://www.instagram.com">
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com">
              <FaLinkedinIn />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com">
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </LeftSide>
    </Container>
  );
}
