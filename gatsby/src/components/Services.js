import React, { useContext } from 'react';
import { Link } from 'gatsby';
import {
  ServicesWrapper,
  SubNav,
  StyledListItem,
  ImgStyled,
} from '../styles/AboutStyles';
import LangContext from './LanguageContext';

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

export default function Services({ data, text }) {
  const [current] = useContext(LangContext);

  const devData = data.edges.map((element) => (
    <StyledListItem color={element.node.color} key={element.node.id}>
      <div style={{ overflow: 'visible' }}>
        <ImgStyled
          fluid={element.node.image.asset.fluid}
          alt={element.node.name}
          className={`svg ${element.node.color} width`}
        />
      </div>
      <span className="iconSVG" />
      <span className={`${element.node.color} text`}>
        <span className={`mark ${element.node.color}`}>
          {element.node.name}
        </span>
        <span>
          {current === 'pl'
            ? element.node.descriptionpl
            : element.node.description}
        </span>
      </span>
    </StyledListItem>
  ));
  return (
    <ServicesWrapper color="--primary">
      <SubNav>
        <ItemNav text={text.nav1} to="/aboutme" />
        <ItemNav text={text.nav2} to="/aboutme/database" />
        <ItemNav text={text.nav3} to="/aboutme/tools" />
      </SubNav>
      <ul className="devUl">{devData}</ul>
    </ServicesWrapper>
  );
}
