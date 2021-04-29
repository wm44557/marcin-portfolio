import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/SEO';
import {
  Container,
  LeftWrapper,
  RightWrapper,
  ImageWrapper,
  Circle,
} from '../styles/AboutStyles';
import { dataText } from '../data/infomeData';
import Services from '../components/Services';
import SocialMedia from '../components/SocialMedia';

export default function AboutTemplate() {
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
      <div className="borderleft" />
      <LeftWrapper>
        <h1> {dataText.name}</h1>
        <h2>
          {dataText.old} <span> / </span>
          {dataText.where} <span> / </span>
          {dataText.student}
        </h2>
        <p>{dataText.about}</p>
        <h3>
          <span className="mark myServices">## {dataText.sub}</span>
        </h3>
        <Services />
      </LeftWrapper>
      <RightWrapper>
        <Circle>
          <ImageWrapper fluid={data.childImageSharp.fluid} />
        </Circle>
        <SocialMedia />
      </RightWrapper>
    </Container>
  );
}
