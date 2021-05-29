import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { BiBookOpen } from 'react-icons/bi';
import { IoPersonOutline } from 'react-icons/io5';
import { BsCollection } from 'react-icons/bs';
import { FaRegEnvelopeOpen } from 'react-icons/fa';
import { NavStyles } from '../styles/NavStyles';
import LangContext from './LanguageContext';
import { navEn, navPl } from '../data/text';

function ItemNav({ to = '/', text, short, icon }) {
  const isPartiallyActive = ({ isPartiallyCurrent }) =>
    isPartiallyCurrent ? { className: 'active' } : null;
  return (
    <Link to={to} activeClassName="active" getProps={isPartiallyActive}>
      <li>
        <span className="hasz"># </span>
        <span>{text}</span>
        <div className="icon">
          {icon()}
          <p style={{ width: '100%' }}>{short}</p>
        </div>
      </li>
    </Link>
  );
}
export default function Nav() {
  const [current] = useContext(LangContext);
  const text = current === 'pl' ? navPl : navEn;
  return (
    <NavStyles>
      <ul>
        <ItemNav
          icon={IoPersonOutline}
          text={text.me}
          short="me"
          to="/aboutme"
        />
        <ItemNav icon={BiBookOpen} text={text.cv} short="cv" to="/resume" />
        <ItemNav
          icon={BsCollection}
          text={text.prj}
          short="prj"
          to="/projects"
        />
        <ItemNav
          icon={FaRegEnvelopeOpen}
          text={text.ct}
          short="ct"
          to="/contact"
        />
      </ul>
    </NavStyles>
  );
}
