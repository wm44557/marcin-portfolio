import React, { useContext } from 'react';
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
  LeftSingleWrapper,
  RightSingleWrapper,
  InfoSingleWrapper,
} from '../styles/ResumeStyles';
import { resumePl, resumeEn } from '../data/text';
import LangContext from '../components/LanguageContext';

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
  const [current] = useContext(LangContext);
  const text = current === 'pl' ? resumePl : resumeEn;
  return (
    <Container>
      <SEO title="Resume - My Cv" />
      <LeftWrapper>
        <Circle>
          <ImageWrapper fluid={data.childImageSharp.fluid} />
        </Circle>
        <InfoWrapper>
          <h1>
            <span className="color">Marcin</span> Wrzos
          </h1>
          <p className="smallText">front & back -end developer</p>
          <LeftSingleWrapper>
            <h3 className="mark secondary">#{text.profile}</h3>
            <p>{text.profilep}</p>
          </LeftSingleWrapper>
          <LeftSingleWrapper>
            <h3 className="mark teritary">#info</h3>
            <p>
              <span className="primaryBold">{text.phone}: </span>
              <span className="primaryBorder">
                <a href="tel:+48515426655">+48 515426655</a>
              </span>
            </p>
            <p>
              <span className="secondaryBold">email: </span>
              <span className="secondaryBorder">
                <a href="mailto:marwrz36@gmail.com"> marwrz36@gmail.com</a>
              </span>
            </p>
            <p>
              <span className="quaternaryBold">{text.date}: </span>
              <span className="quaternaryBorder">25.07.1998 ({text.old})</span>
            </p>
            <p>
              <span className="tertiaryBold">{text.adress}: </span>
              <span className="tertiaryBorder">Gryfino, Poland</span>
            </p>
          </LeftSingleWrapper>
        </InfoWrapper>
        <div className="border" />
      </LeftWrapper>
      <RightWrapper>
        <RightSingleWrapper>
          <h3>
            <span className="mark myServices tertiary">
              <IoSchoolSharp /> {text.education}
            </span>
          </h3>
          <InfoSingleWrapper>
            <h1>{text.uni.name}</h1>
            <h2>{text.uni.cat}</h2>
            <span>{text.uni.date}</span>
            <p>
              {text.uni.desc}
              <span>{text.uni.bold} </span>
              {text.uni.desc2}
            </p>
          </InfoSingleWrapper>
          <InfoSingleWrapper>
            <h1>{text.tal.name}</h1>
            <span>{text.tal.date}</span>
            <p>{text.tal.desc}</p>
          </InfoSingleWrapper>
          <InfoSingleWrapper>
            <h1>{text.sec.name}</h1>
            <span>{text.sec.date}</span>
          </InfoSingleWrapper>
        </RightSingleWrapper>
        <div>
          <h3>
            <span className="mark myServices primary3">
              <MdWork /> {text.exp.name}
            </span>
          </h3>
          <InfoSingleWrapper>
            <h1>{text.exp.camp.name}</h1>
            <span>{text.exp.camp.date}</span>
          </InfoSingleWrapper>
        </div>
        <div>
          <h3>
            <span className="mark myServices quaternary3">
              <MdWork /> {text.work.name}
            </span>
          </h3>
          <InfoSingleWrapper>
            <h1>{text.work.gre.name}</h1>
            <span>{text.work.gre.date}</span>
            <p>{text.work.gre.desc}</p>
          </InfoSingleWrapper>
        </div>
        <RightSingleWrapper>
          <h3>
            <span className="mark myServices quinary">
              <IoLanguageSharp /> {text.lang.name}
            </span>
          </h3>
          <InfoSingleWrapper>
            <p>{text.lang.desc}</p>
          </InfoSingleWrapper>
        </RightSingleWrapper>
        <RightSingleWrapper>
          <h3>
            <span className="mark myServices quinary">
              <FaCode /> {text.skills.name}
            </span>
          </h3>
          <InfoSingleWrapper>
            {text.skills.desc}
            <span className="primaryBold">{text.skills.bold}</span>
            {text.skills.desc2}
          </InfoSingleWrapper>
        </RightSingleWrapper>
        <RightSingleWrapper>
          <h3>
            <span className="mark myServices quinary">
              <SiBitcoin /> {text.interests.name}
            </span>
          </h3>
          <InfoSingleWrapper>{text.interests.desc}</InfoSingleWrapper>
        </RightSingleWrapper>
      </RightWrapper>
    </Container>
  );
}
