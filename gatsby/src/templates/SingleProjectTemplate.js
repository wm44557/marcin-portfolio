import React, { useContext, useState } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsPeopleFill, BsPersonFill } from 'react-icons/bs';
import ReactPlayer from 'react-player/lazy';
import { FiYoutube, FiGithub, FiLink } from 'react-icons/fi';
import { HiStatusOnline } from 'react-icons/hi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import LangContext from '../components/LanguageContext';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';
import { singleProjectEn, singleProjectPl } from '../data/text';
import {
  Wrapper,
  ImgStyled,
  TechItem,
  LeftContent,
  RightContent,
  ContentGrid,
  NameWrapper,
  StyledLinkIco,
  IcoWrapper,
  StyledDivIco,
  InfoWrapper,
} from '../styles/SingleProjectStyles';
import SEO from '../components/SEO';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const SingleTechItem = ({ data, text }) => {
  const [current] = useContext(LangContext);
  return (
    <>
      {data.length ? <p className="name">#{text}</p> : null}
      {data.map((skill) => (
        <TechItem color={skill.skills.color} key={skill.description.length}>
          <ImgStyled
            className={`svg ${skill.skills.color}`}
            fluid={skill.skills.image.asset.fluid}
          />
          <span className="text">
            <span className={`mark ${skill.skills.color}`}>
              {skill.skills.name}
            </span>
            <span>
              {current === 'pl' ? skill.descriptionpl : skill.description}
            </span>
          </span>
        </TechItem>
      ))}
    </>
  );
};

export default function SingleProjectTemplate({ data: { project } }) {
  const [current] = useContext(LangContext);
  const [isCollapse, setIsCollapse] = useState(false);
  const [liveCollapse, setLiveCollapse] = useState(false);

  const text = current === 'pl' ? singleProjectPl : singleProjectEn;
  console.log(project.skillsDev);
  return (
    <Wrapper>
      <SEO title={`Project - ${project.name}`} />
      <NameWrapper>
        <span
          className={`mark ${
            project.isGroup ? 'tertiary medium' : 'primary medium'
          }`}
        >
          {project.name}
          {project.isGroup ? (
            <div className="group">
              <BsPeopleFill /> {text.group}
            </div>
          ) : (
            <div className="group">
              <BsPersonFill />
              {text.solo}
            </div>
          )}
        </span>
      </NameWrapper>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            1000: {
              width: 768,
              slidesPerView: 1.1,
            },
            1200: {
              width: 868,
              slidesPerView: 1.1,
            },
          }}
          navigation={{
            nextEl: '.next-button',
            prevEl: '.prev-button',
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {project.image.map((img) => (
            <SwiperSlide key={img.asset.fluid.src}>
              <Img fluid={img.asset.fluid} />
            </SwiperSlide>
          ))}
          <button className="next-button">
            <IoIosArrowForward />
          </button>
          <button className="prev-button">
              <IoIosArrowBack />
          </button>
        </Swiper>
      </div>
      <ContentGrid>
        <LeftContent>
          <div>
            <span
              className={`mark ${
                project.isGroup ? 'tertiary' : 'primary'
              } normal`}
            >
              {text.description}
            </span>
          </div>
          <p>
            {current === 'pl' ? project.descriptionpl : project.description}
          </p>
          <IcoWrapper>
            <StyledLinkIco to={project.github} target="_blank">
              <FiGithub />
              <span>Link do Github</span>
            </StyledLinkIco>
          </IcoWrapper>
          {project.live !== null && (
            <IcoWrapper>
              <StyledDivIco onClick={() => setLiveCollapse(!liveCollapse)}>
                <HiStatusOnline />
                <span>Informacje o live</span>
              </StyledDivIco>
            </IcoWrapper>
          )}
          {liveCollapse && (
            <InfoWrapper>
              {project.userData && (
                <p>
                  <span className="mark primary normal">Testowe konta:</span>{' '}
                  {project.userData}
                </p>
              )}
              <StyledLinkIco to={project.live} target="_blank">
                <FiLink />
                <span>Link do Live</span>
              </StyledLinkIco>
            </InfoWrapper>
          )}
          <button onClick={() => setIsCollapse(!isCollapse)}>
            <FiYoutube
              style={{ transform: 'translateY(4px)', fontSize: '2rem' }}
            />
            Kliknij aby zobaczyć krótkie wideo
          </button>
          {isCollapse && <ReactPlayer width="100%" controls url={project.yt} />}
        </LeftContent>
        <RightContent>
          <div>
            <span
              className={`mark ${
                project.isGroup ? 'tertiary' : 'primary'
              } normal`}
            >
              {text.tech}
            </span>
            <SingleTechItem text="tworzenie" data={project.skillsDev} />
            <SingleTechItem text="dane" data={project.skillsDb} />
            <SingleTechItem text="narzędzia" data={project.skillsTools} />
          </div>
        </RightContent>
      </ContentGrid>
    </Wrapper>
  );
}
export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      name
      id
      isGroup
      description
      descriptionpl
      github
      live
      userData
      yt
      image {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      skillsDev {
        description
        descriptionpl
        skills {
          name
          color
          image {
            asset {
              fluid(maxWidth: 20) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
      skillsDb {
        description
        descriptionpl
        skills {
          name
          color
          image {
            asset {
              fluid(maxWidth: 20) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
      skillsTools {
        description
        descriptionpl
        skills {
          name
          color
          image {
            asset {
              fluid(maxWidth: 20) {
                ...GatsbySanityImageFluid
              }
              _id
            }
          }
        }
      }
    }
  }
`;
