import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavStyles = styled.nav`
  margin: 4rem;
  margin-left: 0;
  border-right: 2px solid var(--darkGrey);
  padding: 2rem;
  padding-left: 0;
  ul {
    margin: 0;
    padding: 0;
    text-align: left;
    list-style: none;
  }
  li {
    --translateX: 5px;
    transform: translateX(var(--translateX));
    margin-bottom: 4rem;
    &:hover {
      --translateX: 15px;
    }
    &:last-child {
      padding-bottom: clamp(10rem, 25vw, 30rem);
    }
    transition: 0.3s;
  }
  span {
    display: none;
  }
  .active {
    color: var(--grey);

    span {
      display: inline-block;
      margin-right: 5px;
    }
  }
  a {
    color: var(--darkGrey);
    font-size: 2.5rem;
    text-decoration: none;
    display: block;
    &:hover {
      color: var(--green);
    }

    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            <span># </span>about me
          </Link>
        </li>
        <li>
          <Link to="/resume" activeClassName="active">
            <span># </span>resume
          </Link>
        </li>
        <li>
          <Link to="/projects" activeClassName="active">
            <span># </span>projects
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName="active">
            <span># </span>contact
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
}
