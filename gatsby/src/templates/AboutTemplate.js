import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import {
  Container,
  LeftWrapper,
  RightWrapper,
  ImageWrapper,
  Circle,
  InfoWrapper,
} from '../styles/AboutStyles';
import Services from '../components/Services';
import SocialMedia from '../components/SocialMedia';
import { aboutPl, aboutEn } from '../data/text';
import LangContext from '../components/LanguageContext';

export default function AboutTemplate({ pageContext: { slug }, data }) {
  const [current] = useContext(LangContext);
  const text = current === 'pl' ? aboutPl : aboutEn;
  return (
    <Container>
      <SEO title="About me - My Services" />
      <div className="borderleft" />
      <InfoWrapper>
        <h1> {text.name}</h1>
        <h2>
          {text.old} <span> / </span>
          {text.where} <span> / </span>
          {text.student}
        </h2>
      </InfoWrapper>
      <LeftWrapper>
        <div className="about">
          <p>{text.about}</p>
        </div>
        <h3>
          <span className="mark myServices">## {text.sub}</span>
        </h3>
        {slug === 'development' && (
          <Services data={data.development} text={text} />
        )}
        {slug === 'database' && <Services data={data.database} text={text} />}
        {slug === 'tools' && <Services data={data.tools} text={text} />}
      </LeftWrapper>
      <RightWrapper>
        <Circle>
          <ImageWrapper fluid={data.file.childImageSharp.fluid} />
        </Circle>
        <SocialMedia />
      </RightWrapper>
    </Container>
  );
}
export const query = graphql`
  query {
    development: allSanityDevelopment(
      sort: { fields: [order], order: [ASC, DESC] }
    ) {
      edges {
        node {
          id
          color
          name
          description
          image {
            asset {
              fluid(maxWidth: 60, maxHeight: 60) {
                ...GatsbySanityImageFluid
                src
              }
            }
          }
        }
      }
    }
    database: allSanityDatabase(sort: { fields: [order], order: [ASC, DESC] }) {
      edges {
        node {
          id
          color
          name
          description
          image {
            asset {
              fluid(maxWidth: 60, maxHeight: 60) {
                ...GatsbySanityImageFluid
                src
              }
            }
          }
        }
      }
    }
    tools: allSanityTools(sort: { fields: [order], order: [ASC, DESC] }) {
      edges {
        node {
          id
          color
          name
          description
          image {
            asset {
              fluid(maxWidth: 60, maxHeight: 60) {
                ...GatsbySanityImageFluid
                src
              }
            }
          }
        }
      }
    }
    file(name: { eq: "ja9" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200, quality: 98) {
          src
        }
      }
    }
  }
`;
