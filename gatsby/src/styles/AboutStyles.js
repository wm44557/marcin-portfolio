import styled from 'styled-components';
import Img from 'gatsby-image';

export const ImgStyled = styled(Img)`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  @media (max-width: 550px) {
    width: 30px !important;
    height: 30px !important;
    .devUl {
      margin-top: 0;
    }
  }
  filter: invert(72%) sepia(0%) saturate(12%) hue-rotate(210deg)
    brightness(113%) contrast(96%);
`;
export const Container = styled.div`
  display: grid;
  margin-top: 2rem;
  margin-bottom: 2rem;
  grid-template-columns: 1fr auto;
  position: relative;

  .borderleft {
    border-left: 3px solid var(--darkGrey);
    position: absolute;
    top: 5%;
    bottom: 5%;
  }

  @media (max-width: 850px) {
    .borderleft {
      display: none;
    }
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const RightWrapper = styled.div`
  margin-top: -10rem;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 850px) {
    margin-left: 0.2rem;
  }
  @media (max-width: 1100px) {
    margin-top: 0rem;
    grid-row-start: 2;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Circle = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  height: clamp(100px, 20vw, 200px);
  width: clamp(100px, 20vw, 200px);
  border-radius: 50%;
  background-color: var(--green);
  @media (max-width: 500px) {
    height: 100px;
    width: 100px;
  }
`;

export const ImageWrapper = styled(Img)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 200px;
  height: 200px;
  height: clamp(100px, 20vw, 200px);
  width: clamp(100px, 20vw, 200px);
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--grey);
  transform: translate(-15px, -5px);
  @media (max-width: 500px) {
    height: 100px;
    width: 100px;
  }
`;

export const LeftWrapper = styled.div`
  margin-left: 6rem;
  grid-column-start: 1;

  .myServices {
    display: inline-block;
    padding: 0.6rem;
    transform: rotate(-3deg) translateY(2rem) translateX(-0.5rem);
  }
  div {
    padding: 1rem;
    padding-left: 0;
    padding-top: 0;
    @media (max-width: 550px) {
      padding: 0;
    }
  }

  p {
    font-size: 1.5rem;
    font-size: clamp(1rem, 2.5vw, 1.8rem);
    @media (max-width: 550px) {
      font-size: 1rem;
    }
    margin-top: 2rem;
    margin-bottom: 0;
  }
  h3 {
    padding: 1rem 0;
    border-bottom: 3px solid var(--darkGrey);
    @media (max-width: 450px) {
      .mark {
        font-size: 1.2rem;
      }
      margin-top: -2rem;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin-right: 0;
    max-height: 500px;
    overflow: auto;
    @media (max-width: 1100px) {
      margin-right: 0;
    }
    @media (max-width: 550px) {
      overflow: visible;
    }
  }
  @media (max-width: 850px) {
    margin-left: 0.2rem;
  }
  @media (max-width: 1100px) {
    order: 1;
  }

  @media (max-width: 450px) {
    .about {
      padding: 0;
    }
  }
`;
export const InfoWrapper = styled.div`
  margin-left: 6rem;

  h1 {
    font-size: 5rem;
    font-size: clamp(2rem, 5vw, 5rem);
    text-transform: uppercase;
    letter-spacing: 10px;
    @media (max-width: 550px) {
      font-size: 2rem;
    }
  }
  h2 {
    font-size: 2rem;
    font-size: clamp(1rem, 4vw, 3rem);
    margin-top: 1.5rem;
    @media (max-width: 550px) {
      font-size: 1rem;
    }
    color: var(--green);
    span {
      color: var(--grey);
    }
  }
  @media (max-width: 850px) {
    margin-left: 0.2rem;
    margin-bottom: 1rem;
  }
`;
export const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  .text {
    font-size: 1.5rem;
    font-size: clamp(1rem, 5vw, 1.5rem);
    font-weight: 300;
    width: 100%;
  }
  .icon,
  .iconSVG {
    display: flex;
    font-size: 6rem;

    font-size: clamp(3rem, 5vw, 6rem);
    margin-right: 1.5rem;
    align-items: center;

    @media (max-width: 550px) {
      .svg {
        width: 30px !important;
        height: 30px !important;
      }
      .devUl {
        margin-top: 0;
      }
    }
  }
`;

export const StyledListItem = styled.li`
  display: flex;
  color: var(--grey);
  flex-direction: row;
  margin-top: 3rem;
  cursor: default;
  align-items: center;
  transition: 0.3s;

  .text {
    font-size: clamp(1rem, 3vw, 1.5rem);
    @media (max-width: 550px) {
      font-size: 1rem;
    }
  }
  .mark {
    font-size: clamp(1.3rem, 3vw, 1.7rem);
    @media (max-width: 550px) {
      font-size: 1.3rem;
    }
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
      padding-bottom: 1rem;
      font-size: clamp(1rem, 3vw, 1.6rem);
      @media (max-width: 550px) {
        font-size: 1rem;
      }
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
export const SubNav = styled.ul`
  display: flex;
  justify-content: space-around;
  overflow: hidden;

  margin-bottom: 1rem;
  li {
    padding: 0.2rem;
    font-size: clamp(1rem, 4vw, 1.7rem);
    @media (max-width: 550px) {
      font-size: 1rem;
    }

    .active {
      font-size: clamp(1.2rem, 4vw, 1.8rem);
      @media (max-width: 550px) {
        font-size: 1.2rem;
      }
      color: var(--grey);
    }
  }
  @media (max-width: 450px) {
    padding: 0;
    margin: 0;
    margin-top: 1.5rem;
    li {
      padding-right: 1rem;
    }
  }
`;
