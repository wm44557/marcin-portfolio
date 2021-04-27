import React from 'react';
import { Link } from 'gatsby';
import { data } from '../data/developmentData';
import { ServicesGrid, SubNav } from '../styles/AboutStyles';
import { dataText } from '../data/meDataEn';

function ItemNav({ to = '/', text }) {
  return (
    <li>
      <Link to={to} activeClassName="active">
        <span className="hasz">### </span>
        <span>{text}</span>
        <div className="icon" />
      </Link>
    </li>
  );
}

export default function Services() {
  const devData = Object.values(data).map((element) => (
    <li className={element.color}>
      {element.type === 'react-icons' && (
        <span className={`icon ${element.color}`}>{element.icon()}</span>
      )}

      {element.type === 'svg' && (
        <span className={`iconSVG ${element.color}`}>{element.icon}</span>
      )}

      <span className={`${element.color} text`}>
        <span className={`mark ${element.color}`}>{element.mark}</span>
        <span>{element.description}</span>
      </span>
    </li>
  ));

  return (
    <ServicesGrid>
      <SubNav>
        <ItemNav text={dataText.nav1} />
        <ItemNav text={dataText.nav2} to="/1" />
        <ItemNav text={dataText.nav3} to="/2" />
      </SubNav>
      <div>
        <ul>{devData}</ul>
      </div>
    </ServicesGrid>
  );
}
