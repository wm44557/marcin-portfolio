import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { BiBookOpen, BiEnvelope } from 'react-icons/bi';
import { IoPersonOutline } from 'react-icons/io5';
import { BsCollection } from 'react-icons/bs';
import { FaRegEnvelopeOpen } from 'react-icons/fa';

const NavStyles = styled.nav`
  margin: 4rem;
  margin-left: 0;
  border-right: 3px solid var(--darkGrey);
  padding: 3rem;
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
    margin-bottom: 4em;
    &:hover {
      --translateX: 15px;
    }
    &:last-child {
      padding-bottom: clamp(10rem, 25vw, 30rem);
    }
    transition: 0.3s;
  }
  .hasz {
    display: none;
  }
  .active {
    color: var(--grey);

    .hasz {
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
  .icon {
    float: right;
    display: inline-block;
    font-size: 4rem;
    margin-left: 2rem;
    transform: translateY(-15%);
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            <span className="hasz"># </span>
            <span>about me</span>
            <div className="icon">
              <IoPersonOutline />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/resume" activeClassName="active">
            <span className="hasz"># </span>
            <span>resume</span>
            <div className="icon">
              <BiBookOpen />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/projects" activeClassName="active">
            <span className="hasz"># </span>
            <span>projects</span>
            <div className="icon">
              <BsCollection />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName="active">
            <span className="hasz"># </span>
            <span>contact</span>
            <div className="icon">
              <FaRegEnvelopeOpen />
            </div>
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
}
