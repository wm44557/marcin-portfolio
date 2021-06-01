import styled from 'styled-components';

export const ProjectGrid = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
`;

export const ProjectStyles = styled.div`
  color: var(--grey);
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--grey);
    overflow: hidden;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.5s;
  }
  .text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    opacity: 1;
  }
  a {
    text-decoration: none;
    color: var(--grey);
  }
  .gatsby-image-wrapper {
    height: 220px;
    position: relative;
  }
  h2 {
    transform: rotate(-2deg);
    text-align: center;
    font-size: 4rem;
    margin-bottom: -2rem;
    position: relative;

    z-index: 2;
    span {
      padding: 5px 15px;
    }
  }
  .description,
  .descriptionmy {
    background: var(--tertiary);
    padding: 0.5rem;
    margin: 2rem;
    margin-top: -3rem;
    z-index: 2;
    position: relative;
    transform: rotate(1deg);
    font-size: 1rem;
    font-size: clamp(1.5rem, 1vw, 1.5rem);
    text-align: center;
  }
  .descriptionmy {
    background: var(--primary);
  }

  .group {
    color: var(--black);
    text-align: center;
    //background: var(--grey);
    text-transform: uppercase;
    width: 50%;
    margin: 0 auto;
    font-weight: 800;
    font-size: 1.2rem;
    svg {
      transform: translateY(15%);
      padding-right: 0.5rem;
      font-size: 1.5rem;
    }
  }

  div.overlayWrapper {
    position: relative;
    &:hover .overlay {
      opacity: 0.8;
    }
  }
`;
