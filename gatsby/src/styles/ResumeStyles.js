import styled from 'styled-components';
import Image from 'gatsby-image';

export const Container = styled.div`
  display: grid;
  margin-top: 2rem;
  margin-bottom: 2rem;
  grid-template-columns: minmax(200px, auto) 1fr;
  position: relative;
  margin-left: -50px;
  .bold {
    font-weight: 800;
  }
  .primaryBold {
    color: var(--primary);
    font-weight: 600;
  }
  .secondaryBold {
    color: var(--secondary);
    font-weight: 600;
  }
  .tertiaryBold {
    color: var(--tertiary);
    font-weight: 600;
  }
  .quaternaryBold {
    color: var(--quaternary);
    font-weight: 600;
  }
  .smallText {
    font-size: 1rem;
    font-size: clamp(1rem, 1vw, 1.5rem);
    text-align: center;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;
export const Circle = styled.div`
  position: relative;
  margin: 0 auto;

  height: 150px;
  width: 150px;
  height: clamp(100px, 20vw, 150px);
  width: clamp(100px, 20vw, 150px);
  border-radius: 50%;
  //background-color: var(--primary);
`;

export const ImageWrapper = styled(Image)`
  position: absolute !important;
  margin: 0 auto;
  top: 0;
  right: 0;
  width: 150px;
  height: 150px;
  height: clamp(100px, 20vw, 150px);
  width: clamp(100px, 20vw, 150px);
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--grey);
`;
export const LeftWrapper = styled.div`
  position: relative;
  padding: 20px;

  .border {
    position: absolute;
    border-right: 3px solid var(--darkGrey);
    top: 100px;
    bottom: 100px;
    right: 25px;
  }
`;

export const InfoWrapper = styled.div`
  margin: 0 auto;

  margin-top: 30px;
  max-width: 380px;
  h1 {
    font-size: 1.5rem;
    font-size: clamp(1.5rem, 2vw, 3rem);
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 10px;
    text-align: center;
    .color {
      color: var(--primary);
      font-weight: 600;
    }
  }
  h3 {
    margin-top: 30px;
    font-size: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
    text-align: center;
  }

  .profilep {
    font-size: 1rem;
    font-size: clamp(1.5rem, 1vw, 2rem);
    text-align: center;
  }
  .wrap {
    margin: 0 auto;
    width: 80%;
  }
  .number {
    border-bottom: 2px solid var(--primary);
  }
  .adress {
    border-bottom: 2px solid var(--secondary);
  }
  .email {
    color: var(--secondary);
    font-weight: 600;
  }

  .ad {
    border-bottom: 2px solid var(--tertiary);
  }
  .adh {
    color: var(--tertiary);
    font-weight: 600;
  }
  //h2 {
  //  font-size: 2rem;
  //  font-size: clamp(1rem, 4vw, 3rem);
  //  margin-top: 1.5rem;
  //  color: var(--green);
  //  span {
  //    color: var(--grey);
  //  }
  //}
`;
export const RightWrapper = styled.div`
  overflow: auto;
  max-height: 800px;
  padding: 10px;
  .myServices {
    display: inline-block;
    padding: 0.6rem;
    transform: rotate(-3deg) translateY(2rem) translateX(-0.5rem);
  }
  span.smallText {
    color: var(--darkGrey);
  }
  div {
    padding: 1rem;
    padding-left: 0;
    padding-top: 0;
  }
  h2 {
    font-size: 1rem;
    font-size: clamp(1.5rem, 1vw, 1.5rem);
    text-transform: uppercase;
  }
  .info {
    padding: 20px;
    text-align: center;
    width: 80%;
    margin: 0 auto;
  }
  p {
    font-size: clamp(1rem, 3.5vw, 2rem);
    margin-top: 2rem;
    margin-bottom: 0;
  }
  h3 {
    margin-top: 1rem;
    padding: 1rem 0;
    border-bottom: 3px solid var(--darkGrey);
    @media (max-width: 450px) {
      .mark {
        font-size: 1.2rem;
      }
      margin-top: -2rem;
    }
    @media (max-width: 850px) {
      border-bottom: 1px solid var(--darkGrey);
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
      padding: 2rem;
      padding-left: 0;
      padding-right: 4rem;
    }
  }
`;
