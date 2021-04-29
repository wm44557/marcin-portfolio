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
    clear: both;
    --translateX: 5px;
    transform: translateX(var(--translateX));
    margin-bottom: 4em;
    &:hover {
      --translateX: 15px;
    }
    &:last-child {
      padding-bottom: clamp(10rem, 20vw, 30rem);
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
    margin-left: 0;
    margin-top: 1rem;
    border-right: 1px solid var(--darkGrey);
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
      font-size: 3rem;
      text-align: center;
    }
    p {
      display: block;
      font-size: 1.5rem;
      text-align: center;
      margin-top: 0;
    }
    li {
      padding-bottom: 2rem;
    }
  }
`;
