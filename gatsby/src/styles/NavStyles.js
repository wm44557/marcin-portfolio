import styled from 'styled-components';

export const NavStyles = styled.nav`
  margin: 4rem 4rem 4rem 1rem;
  padding: 3rem 3rem 3rem 0;
  border-right: 3px solid var(--darkGrey);
  ul {
    margin: 0;
    padding: 0;
    text-align: left;
  }
  li {
    width: 100%;
    clear: both;
    --translateX: 5px;
    transform: translateX(var(--translateX));
    &:hover {
      --translateX: 15px;
    }
    &:last-child {
      padding-bottom: clamp(2rem, 20vw, 10rem);
    }
    transition: 0.3s;
  }

  .active {
    font-size: 2.7rem;
  }
  a {
    font-size: 2.5rem;

    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }
  .icon {
    float: right;
    font-size: 4rem;
    margin-left: 2rem;
    transform: translateY(-15%);
  }
  p {
    display: none;
  }

  @media (max-width: 850px) {
    margin: 1rem 1rem 1rem -0.5rem;
    border-right: 1px solid var(--darkGrey);
    li {
      &:hover {
        transform: scale(1);
      }
    }
    span {
      display: none;
    }
    .active {
      .hasz {
        display: none;
      }
    }
    .icon {
      display: block;
      font-size: 2.5rem;
      font-size: clamp(2rem, 4.5vw, 3rem);

      text-align: center;
    }
    p {
      display: block;
      font-size: 1.5rem;
      font-size: clamp(1.5rem, 2.5vw, 2rem);
      text-align: center;
      margin-top: 0;
    }
    li {
      padding-bottom: 2rem;
    }
  }
  @media (max-width: 400px) {
    padding-right: 1.3rem;
    .icon {
      margin: 0;
      padding: 0;
    }
  }
`;
