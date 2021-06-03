import path, { resolve } from 'path';

async function aboutMePage({ actions, graphql }) {
  const aboutTemplate = path.resolve('./src/templates/AboutTemplate.js');

  const { data } = await graphql(`
    query {
      allSanityDevelopment {
        edges {
          node {
            id
          }
        }
      }
    }
  `);
  const routes = {
    development: {
      route: '/aboutme',
      slug: 'development',
      hook: 'useDevelopmentData',
    },
    database: {
      route: '/aboutme/database',
      slug: 'database',
      hook: 'useDevelopmentData',
    },
    tools: {
      route: '/aboutme/tools',
      slug: 'tools',
      hook: 'useDevelopmentData',
    },
  };
  console.log(data);
  Object.values(routes).forEach((element) => {
    actions.createPage({
      path: element.route,
      component: aboutTemplate,
      context: {
        slug: element.slug,
      },
    });
  });
}

async function turnProjectsIntoPages({ graphql, actions }) {
  const projectTemplate = path.resolve(
    './src/templates/SingleProjectTemplate.js'
  );
  const { data } = await graphql(`
    query {
      projects: allSanityProject {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);
  data.projects.nodes.forEach((project) => {
    actions.createPage({
      path: `project/${project.slug.current}`,
      component: projectTemplate,
      context: {
        slug: project.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  await Promise.all([aboutMePage(params), turnProjectsIntoPages(params)]);
}
