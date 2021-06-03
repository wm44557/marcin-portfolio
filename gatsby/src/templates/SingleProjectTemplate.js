import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import LangContext from '../components/LanguageContext';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Wrapper = styled.div`
  .swiper-pagination-bullet-active {
    background-color: var(--primary) !important;
    opacity: 1 !important;
  }
  .swiper-pagination-bullet {
    background-color: var(--darkGrey);
    opacity: 0.7;
    margin: 10px 4px !important;
  }
`;
const NameWrapper = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;
  span {
    font-size: 3rem;
    font-size: clamp(2rem, 5vw, 4rem);
  }
`;
const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export default function SingleProjectTemplate({ data: { project } }) {
  console.log(project);
  const [current] = useContext(LangContext);
  return (
    <Wrapper>
      <NameWrapper>
        <span className="mark tertiary">{project.name}</span>
      </NameWrapper>
      <Swiper
        spaceBetween={120}
        slidesPerView={1}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          1000: {
            width: 668,
            slidesPerView: 1.3,
          },
          1200: {
            width: 868,
            slidesPerView: 1.4,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {project.image.map((img) => (
          <SwiperSlide>
            <Img fluid={img.asset.fluid} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ContentGrid>
        <div>x</div>
        <div>xd</div>
      </ContentGrid>
    </Wrapper>
  );
}
export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
