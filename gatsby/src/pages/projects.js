import React, { useContext } from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { BsPeopleFill, BsPersonFill } from 'react-icons/bs';
import { ProjectGrid, ProjectStyles } from '../styles/ProjectsStyles';
import LangContext from '../components/LanguageContext';
import { projectsPl, projectsEn } from '../data/text';

export default function Projects({ data }) {
  const projects = data.projects.edges;
  const [current] = useContext(LangContext);
  const text = current === 'pl' ? projectsPl : projectsEn;
  return (
    <ProjectGrid>
      {projects.map((person) => (
        <ProjectStyles key={person.node.id}>
          <Link to={`/${person.node.slug.current}`}>
            <h2>
              <span
                className={`${person.node.isGroup ? 'mark tertiary' : 'mark'}`}
              >
                {person.node.name}
              </span>
            </h2>
            <div className="overlayWrapper">
              <Img fluid={person.node.frontImage.asset.fluid} />
              <div className="overlay">
                <div className="text">
                  {person.node.skillsDev.map((skill) => (
                    <span className={`mark ${skill.skills.color}`}>
                      {skill.skills.name}
                    </span>
                  ))}
                  {person.node.skillsDb.map((skill) => (
                    <span className={`mark ${skill.skills.color}`}>
                      {skill.skills.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p
              className={`${
                person.node.isGroup ? 'description' : 'descriptionmy'
              }`}
            >
              {person.node.isGroup ? (
                <div className="group">
                  <BsPeopleFill />
                  {text.group}
                </div>
              ) : (
                <div className="group">
                  <BsPersonFill />
                  {text.solo}
                </div>
              )}
              {current === 'pl'
                ? `${person.node.descriptionpl.substring(0, 70)}...`
                : `${person.node.description.substring(0, 70)}...`}
            </p>
          </Link>
        </ProjectStyles>
      ))}
    </ProjectGrid>
  );
}

export const query = graphql`
  query {
    projects: allSanityProject(sort: { fields: [order], order: [ASC, DESC] }) {
      edges {
        node {
          id
          name
          description
          descriptionpl
          slug {
            current
          }
          isGroup
          frontImage {
            asset {
              fluid(maxWidth: 450) {
                ...GatsbySanityImageFluid
                src
              }
            }
          }
          skillsDev {
            skills {
              name
              color
            }
          }
          skillsDb {
            skills {
              name
              color
            }
          }
        }
      }
    }
  }
`;
