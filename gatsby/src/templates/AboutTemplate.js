import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/SEO';
import {
  Container,
  RightSide,
  LeftSide,
  ImageWrapper,
  LeftSideDiv,
} from '../styles/AboutStyles';
import { dataText } from '../data/meDataEn';
import Services from '../components/Services';
import SocialMedia from '../components/SocialMedia';

export default function FirstPage() {
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
      <SEO title="About me" />
      <div className="borderleft" />
      <RightSide>
        <h1> {dataText.name}</h1>
        <h2>
          {dataText.old} <span> / </span>
          {dataText.where} <span> / </span>
          {dataText.student}
        </h2>
        <p>{dataText.about}</p>
        <h3>
          <span className="mark fi">## {dataText.sub}</span>
        </h3>
        <Services />
      </RightSide>
      <LeftSide>
        <LeftSideDiv>
          <ImageWrapper fluid={data.childImageSharp.fluid} />
        </LeftSideDiv>
        <SocialMedia />
      </LeftSide>
    </Container>
  );
}
