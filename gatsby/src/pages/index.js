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
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';
import SEO from '../components/SEO';
import { NextLogo, NestLogo } from '../assets/images/icons';

const ImageWrapper = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--grey);
  transform: translate(-15px, -5px);
`;
const LeftSideDiv = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: var(--green);
`;
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
  grid-template-columns: 1fr;
  .flexNav {
    display: flex;
    justify-content: space-around;
    align-content: center;
    overflow: hidden;
    margin-top: 0;
    li {
      padding: 0.6rem;
      justify-content: center;
    }
    border-bottom: 1px solid var(--grey);
    padding-bottom: 1rem;
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
    cursor: default;

    &:hover {
      & .text {
        background-color: var(--primary);
      }
      & .icon {
        color: var(--primary);
      }
      & .mark {
        background-color: var(--black);
        margin: 1rem;
      }

      &.sec {
        & .text {
          background-color: var(--secondary);
        }
        & .icon {
          color: var(--secondary);
        }
        & .mark {
          background-color: var(--black);
          margin: 1rem;
        }
      }
      &.ter {
        .terLogo {
          fill: var(--tertiary);
        }
        & .text {
          background-color: var(--tertiary);
        }

        & .mark {
          background-color: var(--black);
          margin: 1rem;
        }
      }
      &.qua {
        & .text {
          background-color: var(--quaternary);
        }
        & .icon {
          color: var(--quaternary);
        }
        & .mark {
          background-color: var(--black);
          margin: 1rem;
        }
      }
      &.qui {
        & .text {
          background-color: var(--quinary);
        }
        & .icon {
          color: var(--quinary);
        }
        & .mark {
          background-color: var(--black);
          margin: 1rem;
        }
      }
      &.sen {
        .senLogo {
          fill: var(--senary);
        }
        & .text {
          background-color: var(--senary);
        }

        & .mark {
          background-color: var(--black);
          margin: 1rem;
        }
      }
    }
  }
`;

const LeftSide = styled.div`
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    list-style: none;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: 2rem;
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
export default function FirstPage({ data }) {
  console.log(data);
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
          <ul className="flexNav">
            <li className="mark qua">### development</li>
            <li className="mark qui">### database</li>
            <li className="mark ter">### tools</li>
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
              <li className="sec">
                <span className="icon sec">
                  <RiGatsbyLine />
                </span>
                <span className="sec text">
                  <span className="mark sec">Gatsby</span>
                  <span>
                    + SanityIO (headless cms), fetching data from api, creating
                    graphiql nodes, SEO, writing hooks
                  </span>
                </span>
              </li>
              <li className="ter">
                <span className="icon ter">
                  <NextLogo width="60px" height="60px" className="terLogo" />
                </span>
                <span className="text">
                  <span className="mark ter">NextJs</span>+ KeystoneJS (Node
                  graphql server & TS & mongodb), Apollo Client mutations,
                  fetching caching, loading
                </span>
              </li>
              <li className="qua">
                <span className="icon qua">
                  <FaNodeJs />
                </span>
                <span className="text">
                  <span className="mark qua">NodeJs</span>+ express, ajax, rest
                  api, authentication, schemas, email, mvc, middleware + mongodb
                </span>
              </li>
              <li className="qui">
                <span className="icon qui">
                  <FaPhp />
                </span>
                <span className="text">
                  <span className="mark qui">PHP</span> MVC, Routing, +
                  composer, guzzle
                </span>
              </li>
              <li className="sen">
                <span className="icon sen">
                  <NestLogo width="60px" height="60px" className="senLogo" />
                </span>
                <span className="text">
                  <span className="mark sen">NestJs</span>(NodeJS framework) in
                  learning.. + MySQL & MariaDB or mongoose + TS,CRON auth,
                  validation, emails
                </span>
              </li>
              <li className="qui">
                <span className="icon qui">
                  <FaPython />
                </span>
                <span className="text">
                  <span className="mark qui">Python</span> Pandas, numpy,
                  matplotlib, scikit-learn
                </span>
              </li>
              <li className="qua">
                <span className="icon qua">
                  <BsPhone />
                </span>
                <span className="text ">
                  <span className="mark qua">React Native</span>
                  Simple apps, not complicated
                </span>
              </li>
              <li>
                <span className="icon">
                  <SiCplusplus />
                </span>
                <span className="text">
                  <span className="mark">C++</span>
                  Very often used in college, object, data structures
                </span>
              </li>
            </ul>
          </div>
        </ServicesGrid>
      </RightSide>
      <LeftSide>
        <LeftSideDiv>
          <ImageWrapper fluid={data.file.childImageSharp.fluid} />
        </LeftSideDiv>
        <ul className="nav">
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
export const query = graphql`
  {
    file(name: { eq: "ja9" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200, quality: 98) {
          src
        }
      }
    }
  }
`;
