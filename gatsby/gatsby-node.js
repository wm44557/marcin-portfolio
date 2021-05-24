import path, { resolve } from 'path';

async function aboutMePage({ actions }) {
  const aboutTemplate = path.resolve('./src/templates/AboutTemplate.js');
  const data = {
    database: {
      route: '/aboutme/database',
      slug: 'database',
    },
    tools: {
      route: '/aboutme/tools',
      slug: 'tools',
    },
  };
  Object.values(data).forEach((element) => {
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
