import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { IoSchoolSharp, IoLanguageSharp } from 'react-icons/io5';
import { MdWork } from 'react-icons/md';
import { FaCode } from 'react-icons/fa';
import { SiBitcoin } from 'react-icons/si';
import SEO from '../components/SEO';
import {
  Container,
  Circle,
  ImageWrapper,
  LeftWrapper,
  RightWrapper,
  InfoWrapper,
} from '../styles/ResumeStyles';
import { dataResume } from '../data/dataResume';
import { dataText } from '../data/infomeData';

export default function Resume() {
  const { data } = useStaticQuery(graphql`
    {
      data: file(name: { eq: "ja9" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200, quality: 98) {
            src
          }
        }
      }
    }
  `);
  return (
    <Container>
      <SEO title="About me - My Services" />
      <LeftWrapper>
        <Circle>
          <ImageWrapper fluid={data.childImageSharp.fluid} />
        </Circle>
        <InfoWrapper>
          <h1>
            <span className="color">Marcin</span> Wrzos
          </h1>
          <p className="smallText">front & back -end developer</p>

          <div className="wrap">
            <div className="center">
              <h3 className=" ceter mark secondary">#profile</h3>
            </div>
            <p className="profilep">
              I have been programming for myself for several years, now would
              like to share my skills with others and translate it as a work -
              hobby.I am not afraid to ask questions, I like to find solutions
              to problems, it satisfies me. Always cheerful!
            </p>
          </div>

          <div className="wrap">
            <div className="center">
              <h3 className=" ceter mark teritary">#info</h3>
            </div>
            <p className="profilep">
              <b>
                <span className="primaryBold">phone: </span>
              </b>
              <span className="number">
                <a href="tel:+48515426655">+48 515426655</a>
              </span>
            </p>
            <p className="profilep">
              <b>
                <span className="email">email: </span>
              </b>
              <span className="adress">
                <a href="mailto:marwrz36@gmail.com"> marwrz36@gmail.com</a>
              </span>
            </p>
            <p className="profilep">
              <b>
                <span className="adh">adress: </span>
              </b>
              <span className="ad">Gryfino, Poland</span>
            </p>
          </div>
        </InfoWrapper>
        <div className="border" />
      </LeftWrapper>
      <RightWrapper>
        <div>
          <h3>
            <span className="mark myServices tertiary">
              <IoSchoolSharp /> education
            </span>
          </h3>
          <div className="info">
            <h2 className="bold">
              West Pomeranian University of Technology in Szczecin
            </h2>
            <h2 className="primaryBold">Computer Science</h2>
            <span className="smallText">2018-2022</span>
            <p className="smallText">
              I'm in the 6th semester, in October I will be in the 7th. My
              specialization is{' '}
              <span className="primaryBold">
                information systems engineering
              </span>{' '}
              (web development).
            </p>
          </div>
          <div className="info">
            <h2 className="bold">Gesamtschule Talsand in Schwedt / Oder</h2>
            <span className="smallText">2015-2016</span>
            <p className="smallText">
              Polish-German exchange. Extended subjects Computer Science.
            </p>
          </div>
          <div className="info">
            <h2 className="bold">Secondary school in Gryfino</h2>
            <span className="smallText">2014-2015, 2016-2018</span>
          </div>
        </div>
        <div>
          <h3>
            <span className="mark myServices quaternary3">
              <MdWork /> work experience
            </span>
          </h3>
          <div className="info">
            <h2 className="bold">Barman in Greek Restaurant in Germany</h2>
            <span className="smallText">2017-2020</span>
            <p className="smallText">
              Work on the weekends very interesting, contact with people, many
              human stories. Lots of experience.
            </p>
          </div>
        </div>
        <div>
          <h3>
            <span className="mark myServices quinary">
              <IoLanguageSharp /> foregin languages
            </span>
          </h3>
          <div className="info">
            <p className="smallText">
              <span>Polish (native) - English (b2) - German (b2)</span>
            </p>
          </div>
        </div>
        <div>
          <h3>
            <span className="mark myServices quinary">
              <FaCode /> skills
            </span>
          </h3>
          <p className="smallText">
            <div className="info">
              all info in the section
              <span className="primaryBold">about me</span>, generally
              JavaScript is my main, React, Gatsby, NextJS, backend MongoDB,
              express, or Firebase, NodeJS with headelss CMS (sanity or
              keystone). I like used Graphql. At the university I often use php.
            </div>
          </p>
        </div>
        <div>
          <h3>
            <span className="mark myServices quinary">
              <SiBitcoin /> interests
            </span>
          </h3>
          <p className="smallText">
            <span>Chess - Tennis - Blockchain and cryptocurrencies</span>
          </p>
        </div>
      </RightWrapper>
    </Container>
  );
}
