import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

export const Wrapper = styled.div`
  .next-button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(25%);
    z-index: 999;
  }
  .prev-button {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(25%);
    z-index: 999;
  }
  .swiper-pagination-bullet-active {
    background-color: var(--primary) !important;
    opacity: 1 !important;
  }
  .swiper-pagination-bullet {
    background-color: var(--darkGrey);
    opacity: 0.7;
    margin: 10px 4px !important;
  }
  .group {
    color: var(--black);
    text-align: center;
    text-transform: uppercase;
    width: 80%;
    margin: 0 auto;
    font-weight: 800;
    font-size: 1.2rem;
    svg {
      transform: translateY(15%);
      padding-right: 0.5rem;
      font-size: 1.5rem;
    }
  }
`;
export const NameWrapper = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1.5rem;

  span {
    font-size: 3rem;
    font-size: clamp(2rem, 5vw, 4rem);
  }
`;
export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 1.5rem;
  font-size: 1.6rem;
  font-size: clamp(1rem, 2vw, 1.6rem);
  span {
    font-size: 1.8rem;
    font-size: clamp(1.3rem, 2vw, 1.8rem);
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    button {
      padding: 2px;
      margin-bottom: 10px;
    }
  }
`;
export const LeftContent = styled.div`
  width: 97%;

  p {
    margin-top: 0;
    padding: 0;
    padding-right: 10px;
    border-right: 2px solid var(--darkGrey);
  }
`;
export const RightContent = styled.div`
  width: 90%;

  p {
    margin-top: 0;
    border-right: 2px solid var(--darkGrey);
  }
  .name {
    margin: 0;
    padding: 0;
    margin-top: 10px;
    color: var(--darkGrey);
    font-size: 1.2rem;
    font-size: clamp(1rem, 2vw, 1.2rem);

    font-weight: 600;
    border: none;
    font-style: italic;
  }
`;
export const TechItem = styled.div`
  span {
    font-size: 1.6rem;
    font-size: clamp(1rem, 2vw, 1.5rem);
  }
  &:first-child {
    margin-top: 0.5rem;
  }
  &:hover {
    .svg {
      &.primary {
        filter: invert(27%) sepia(15%) saturate(2992%) hue-rotate(134deg)
          brightness(97%) contrast(86%);
      }
      &.secondary {
        filter: invert(25%) sepia(99%) saturate(863%) hue-rotate(157deg)
          brightness(101%) contrast(91%);
      }
      &.tertiary {
        filter: invert(38%) sepia(65%) saturate(443%) hue-rotate(164deg)
          brightness(95%) contrast(82%);
      }
      &.quaternary {
        filter: invert(49%) sepia(22%) saturate(668%) hue-rotate(201deg)
          brightness(96%) contrast(90%);
      }
      &.quinary {
        filter: invert(55%) sepia(16%) saturate(826%) hue-rotate(253deg)
          brightness(95%) contrast(94%);
      }
      &.senary {
        filter: invert(88%) sepia(17%) saturate(5478%) hue-rotate(291deg)
          brightness(87%) contrast(93%);
      }
    }
    & .text {
      transition: 0.1s;
      background-color: var(--${(props) => props.color});
      padding: 0.3rem;
      margin-left: 10px;
    }
    & .icon {
      transition: 0.1s;
      color: var(--${(props) => props.color});
    }
    & .mark {
      transition: 0.1s;
      background-color: var(--black);
      margin: 1rem;
    }
  }
`;
export const ImgStyled = styled(Img)`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  transform: translateY(6px);
  filter: invert(72%) sepia(0%) saturate(12%) hue-rotate(210deg)
    brightness(113%) contrast(96%);
  @media (max-width: 700px) {
    width: 20px;
    height: 20px;
  }
`;
export const StyledLinkIco = styled(Link)`
  font-size: 2rem;
  font-size: clamp(1.5rem, 2vw, 2rem);
  cursor: pointer;
  margin-bottom: 3rem;
  transition: 0.3s;
  span {
    margin-left: 1rem;
    font-size: 1rem;
    cursor: pointer;
    font-size: clamp(1rem, 1.3vw, 2rem);
  }
  a {
    color: var(--grey);
  }
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    a {
      color: var(--primary);
    }
  }
`;
export const StyledDivIco = styled.span`
  font-size: 2rem;
  font-size: clamp(1.5rem, 2vw, 2rem);
  cursor: pointer;
  margin-bottom: 3rem;
  transition: 0.3s;
  color: var(--darkGrey);
  width: auto;
  span {
    margin-left: 1rem;
    font-size: 1rem;
    cursor: pointer;
    font-size: clamp(1rem, 1.3vw, 2rem);
  }

  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    color: var(--primary);
  }
`;
export const IcoWrapper = styled.div`
  margin-bottom: 2rem;
`;
export const InfoWrapper = styled.div`
  border-top: 1px solid var(--grey);
  width: 60%;
  padding: 10px;
  margin: 5px;
  p {
    border: none;
    font-size: 1.3rem;

    font-size: clamp(1.3rem, 2vw, 1.6rem);
  }
`;
