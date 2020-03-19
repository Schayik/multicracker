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
      context: {}, // additional data can be passed via context
    })
  })

  result.data.en.edges.forEach(({ node }) => {
    createPage({
      path: '/en' + node.frontmatter.path,
      component: markdownTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  const normalPages = [
    { template: path.resolve(`src/templates/index.js`), pathNL: '/', pathEN: '/en' },
    { template: path.resolve(`src/templates/toepassingsgebieden.js`), pathNL: '/toepassingsgebieden', pathEN: '/en/areas-of-application' },
    { template: path.resolve(`src/templates/snijproces.js`), pathNL: '/snijproces', pathEN: '/en/cutting-process' },
    { template: path.resolve(`src/templates/modellen.js`), pathNL: '/modellen', pathEN: '/en/models' },
    { template: path.resolve(`src/templates/contact.js`), pathNL: '/contact', pathEN: '/en/contact' },
    { template: path.resolve(`src/templates/404.js`), pathNL: '/404', pathEN: '/en/404' },
  ]

  normalPages.forEach(normalPage => {
    createPage({
      path: normalPage.pathNL,
      component: normalPage.template,
      context: {}, // additional data can be passed via context
    })

    createPage({
      path: normalPage.pathEN,
      component: normalPage.template,
      context: {}, // additional data can be passed via context
    })
  })
}
