const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {

  const { createPage } = actions
  const markdownTemplate = path.resolve(`src/templates/model.js`)

  const result = await graphql(`
    {
      nl: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/models/nl/" } }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      en: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/models/en/" } }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.nl.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: markdownTemplate,
      context: { locale: 'nl' }, // additional data can be passed via context
    })
  })

  result.data.en.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: markdownTemplate,
      context: { locale: 'en' }, // additional data can be passed via context
    })
  })

  const pages = {
    home: { template: path.resolve(`src/templates/index.js`), pathNL: '/', pathEN: '/en' },
    applications: { template: path.resolve(`src/templates/toepassingsgebieden.js`), pathNL: '/toepassingen', pathEN: '/en/applications' },
    models: { template: path.resolve(`src/templates/snijproces.js`), pathNL: '/snijproces', pathEN: '/en/process' },
    snijprocess: { template: path.resolve(`src/templates/modellen.js`), pathNL: '/modellen', pathEN: '/en/models' },
    contact: { template: path.resolve(`src/templates/contact.js`), pathNL: '/contact', pathEN: '/en/contact' },
  }

  Object.keys(pages).forEach(pageKey => {
    createPage({
      path: pages[pageKey].pathNL,
      component: pages[pageKey].template,
      context: { locale: 'nl', pageKey }, // additional data can be passed via context
    })

    createPage({
      path: pages[pageKey].pathEN,
      component: pages[pageKey].template,
      context: { locale: 'en', pageKey }, // additional data can be passed via context
    })
  })
}
