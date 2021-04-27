import { Link } from 'gatsby';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import React from 'react';
import styled from 'styled-components';

const WrappedSocials = styled.ul`
  margin: 2rem 2rem auto 0;
  padding: 4rem 2rem;
  font-size: 4rem;
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
`;
export default function SocialMedia() {
  return (
    <WrappedSocials>
      <li>
        <Link to="https://www.instagram.com">
          <FaGithub />
        </Link>
      </li>
      <li>
        <Link to="https://www.instagram.com">
          <FaLinkedinIn />
        </Link>
      </li>
      <li>
        <Link to="https://www.instagram.com">
          <FaInstagram />
        </Link>
      </li>
    </WrappedSocials>
  );
}
