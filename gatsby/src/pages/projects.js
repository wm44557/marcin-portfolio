import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default function Projects({ data }) {
  console.log(data);
  return (
    <div>
      <p>x</p>
    </div>
  );
}

export const query = graphql`
  query {
    allSanityDevelopment {
      edges {
        node {
          id
        }
      }
    }
  }
`;
