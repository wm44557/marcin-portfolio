import React from 'react';
import { Link } from 'gatsby';
import { BiBookOpen } from 'react-icons/bi';
import { IoPersonOutline } from 'react-icons/io5';
import { BsCollection } from 'react-icons/bs';
import { FaRegEnvelopeOpen } from 'react-icons/fa';
import { NavStyles } from '../styles/NavStyles';

function ItemNav({ to = '/', text, short, icon }) {
  return (
    <li>
      <Link to={to} activeClassName="active">
        <span className="hasz"># </span>
        <span>{text}</span>
        <div className="icon">
          {icon()}
          <p>{short}</p>
        </div>
      </Link>
    </li>
  );
}
export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <ItemNav icon={IoPersonOutline} text="about me" short="me" />
        <ItemNav icon={BiBookOpen} text="resume" short="cv" to="/resume" />
        <ItemNav
          icon={BsCollection}
          text="projects"
          short="prj"
          to="/projects"
        />
        <ItemNav
          icon={FaRegEnvelopeOpen}
          text="contact"
          short="ct"
          to="/contact"
        />
      </ul>
    </NavStyles>
  );
}
