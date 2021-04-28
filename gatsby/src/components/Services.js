import React from 'react';
import { Link } from 'gatsby';
import { data } from '../data/developmentData';
import { ServicesWrapper, SubNav, StyledListItem } from '../styles/AboutStyles';
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
        <ItemNav text={dataText.nav1} />
        <ItemNav text={dataText.nav2} to="/1" />
        <ItemNav text={dataText.nav3} to="/2" />
      </SubNav>
      <div>
        <ul>{devData}</ul>
      </div>
    </ServicesWrapper>
  );
}
