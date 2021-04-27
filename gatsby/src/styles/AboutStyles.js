import styled from 'styled-components';
import Image from 'gatsby-image';

export const Container = styled.div`
  display: grid;
  margin: 3rem;
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
`;

export const ImageWrapper = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--grey);
  transform: translate(-15px, -5px);
`;
export const LeftSideDiv = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: var(--green);
`;

export const RightSide = styled.div`
  margin-left: 6rem;
  .fi {
    display: inline-block;
    padding: 0.6rem;
    transform: rotate(-3deg) translateY(2rem) translateX(-0.5rem);
  }

  h1 {
    font-weight: 400;
    font-size: 5rem;
    text-transform: uppercase;
    letter-spacing: 10px;
  }
  h2 {
    margin-top: 1.5rem;
    color: var(--green);

    span {
      color: var(--grey);
    }
  }
  p {
    margin-top: 2rem;
    font-weight: 300;
  }
  h3 {
    margin-top: 3rem;
    padding: 1rem 0;
    border-bottom: 3px solid var(--darkGrey);
  }
  ul {
    list-style: none;
    padding: 0;
    margin-right: 4rem;
    max-height: 500px;
    overflow: auto;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  .text {
    font-size: 1.7rem;
    font-weight: 300;
    width: 100%;
  }
  .icon,
  .iconSVG {
    display: flex;
    font-size: 6rem;
    margin-right: 1.5rem;
    align-items: center;
  }
  li {
    display: flex;
    color: var(--grey);
    flex-direction: row;
    margin-top: 3rem;
    cursor: default;

    &:hover {
      .svg {
        fill: var(--primary);
      }
      & .text {
        background-color: var(--primary);
        padding-bottom: 1rem;
      }
      & .icon {
        color: var(--primary);
      }
      & .mark {
        background-color: var(--black);
        margin: 1rem;
      }

      &.sec {
        .svg {
          fill: var(--secondary);
        }
        & .text {
          background-color: var(--secondary);
        }
        & .icon {
          color: var(--secondary);
        }
        & .mark {
          background-color: var(--black);
          margin: 1rem;
        }
      }
      &.ter {
        .svg {
          fill: var(--tertiary);
        }
        & .text {
          background-color: var(--tertiary);
        }
        & .icon {
          background-color: var(--tertiary);
        }

        & .mark {
          background-color: var(--black);
          margin: 1rem;
        }
      }
      &.qua {
        .svg {
          fill: var(--quaternary);
        }
        & .text {
          background-color: var(--quaternary);
        }
        & .icon {
          color: var(--quaternary);
        }
        & .mark {
          background-color: var(--black);
          margin: 1rem;
        }
      }
      &.qui {
        .svg {
          fill: var(--quinary);
        }
        & .text {
          background-color: var(--quinary);
        }
        & .icon {
          color: var(--quinary);
        }
        & .mark {
          background-color: var(--black);
          margin: 1rem;
        }
      }
      &.sen {
        .svg {
          fill: var(--senary);
        }
        & .text {
          background-color: var(--senary);
        }
        & .icon {
          color: var(--senary);
        }
        & .mark {
          background-color: var(--black);
          margin: 1rem;
        }
      }
    }
  }
`;
export const SubNav = styled.ul`
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  margin-top: 0;
  li {
    padding: 0.6rem;
    transition: 0.3s;
    .hasz {
      display: none;
    }
    .active {
      transform: scale(1.1);
      color: var(--Grey);
      .hasz {
        display: inline-block;
        margin-right: 5px;
      }
    }
    a {
      color: var(--darkGrey);
      text-decoration: none;
      &:hover {
        color: var(--green);
      }
    }
  }
`;

export const LeftSide = styled.div`
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
