import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { BiBookOpen } from 'react-icons/bi';
import { IoPersonOutline } from 'react-icons/io5';
import { BsCollection } from 'react-icons/bs';
import { FaRegEnvelopeOpen } from 'react-icons/fa';

const NavStyles = styled.nav`
  margin: 4rem;
  margin-left: 1rem;
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
  .hasz {
    display: none;
  }
  .active {
    color: var(--grey);
    transform: scale(1.1);
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
  p {
    display: none;
  }
  @media (max-width: 600px) {
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
              <p>me</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/resume" activeClassName="active">
            <span className="hasz"># </span>
            <span>resume</span>
            <div className="icon">
              <BiBookOpen />
              <p>cv</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/projects" activeClassName="active">
            <span className="hasz"># </span>
            <span>projects</span>
            <div className="icon">
              <BsCollection />
              <p>prj</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName="active">
            <span className="hasz"># </span>
            <span className="text">contact</span>
            <div className="icon">
              <FaRegEnvelopeOpen />
              <p>ct</p>
            </div>
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
}
