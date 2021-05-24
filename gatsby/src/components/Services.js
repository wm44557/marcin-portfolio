import React from 'react';
import { Link } from 'gatsby';
import { ServicesWrapper, SubNav, StyledListItem } from '../styles/AboutStyles';
import { dataText } from '../data/infomeData';

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

export default function Services({ data }) {
  const devData = Object.values(data).map((element) => (
    <StyledListItem color={element.color}>
      {element.type === 'svg' ? (
        <span className="iconSVG">{element.icon}</span>
      ) : (
        <span className="icon">{element.icon()}</span>
      )}

      <span className={`${element.color} text`}>
        <span className={`mark ${element.color}`}>{element.mark}</span>
        <span>{element.description}</span>
      </span>
    </StyledListItem>
  ));

  return (
    <ServicesWrapper color="--primary">
      <SubNav>
        <ItemNav text={dataText.nav1} to="/aboutme" />
        <ItemNav text={dataText.nav2} to="/aboutme/database" />
        <ItemNav text={dataText.nav3} to="/aboutme/tools" />
      </SubNav>
      <div>
        <ul className="devUl">{devData}</ul>
      </div>
    </ServicesWrapper>
  );
}
