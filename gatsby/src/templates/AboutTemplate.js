import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/SEO';
import {
  Container,
  LeftWrapper,
  RightWrapper,
  ImageWrapper,
  Circle,
  InfoWrapper,
} from '../styles/AboutStyles';
import { dataText } from '../data/infomeData';
import Services from '../components/Services';
import SocialMedia from '../components/SocialMedia';
import { devData } from '../data/developmentData';
import { dbData } from '../data/databaseData';
import { tData } from '../data/toolsData';

export default function AboutTemplate({ pageContext: { slug } }) {
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
  let aboutData;
  if (slug === 'database') {
    aboutData = dbData;
  } else if (slug === 'tools') {
    aboutData = tData;
  } else {
    aboutData = devData;
  }
  return (
    <Container>
      <SEO title="About me - My Services" />
      <div className="borderleft" />
      <InfoWrapper>
        <h1> {dataText.name}</h1>
        <h2>
          {dataText.old} <span> / </span>
          {dataText.where} <span> / </span>
          {dataText.student}
        </h2>
      </InfoWrapper>
      <LeftWrapper>
        <div className="about">
          <p>{dataText.about}</p>
        </div>
        <h3>
          <span className="mark myServices">## {dataText.sub}</span>
        </h3>
        <Services data={aboutData} />
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
