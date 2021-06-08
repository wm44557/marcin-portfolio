import { Link } from 'gatsby';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import React from 'react';
import styled from 'styled-components';

const WrappedSocials = styled.ul`
  margin: 2rem 2rem auto 0;
  padding: 4rem 2rem;
  font-size: 4rem;
  font-size: clamp(3rem, 4vw, 4rem);

  border-right: 3px solid var(--darkGrey);
  li {
    margin-bottom: 3rem;
    transition: 0.3s;
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
      transform: scale(1.2);
    }
  }

  @media (max-width: 1100px) {
    order: -1;
    display: flex;
    border: none;
    padding: 0;
    margin: 0;
    li {
      margin-bottom: 0;
      padding: 2rem;
      margin-right: 2rem;
      &:last-child {
        margin-right: 0;
      }
    }
    @media (max-width: 850px) {
      padding: 1rem;
      margin-right: 1rem;
      li {
        margin-right: 0;
        padding: 1.5rem;
      }
    }
  }
`;
export default function SocialMedia() {
  return (
    <WrappedSocials>
      <li>
        <Link target="_blank" to="https://github.com/wm44557">
          <FaGithub />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/marcin-wrzos-4789171b0/"
        >
          <FaLinkedinIn />
        </Link>
      </li>
      <li>
        <Link target="_blank" to="https://www.instagram.com/rudybanan/?hl=pl">
          <FaInstagram />
        </Link>
      </li>
    </WrappedSocials>
  );
}
