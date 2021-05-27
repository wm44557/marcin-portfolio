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
export async function createPages(params) {
  await Promise.all([aboutMePage(params)]);
}
