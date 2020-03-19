import React from "react"
import { graphql } from 'gatsby'
import { orderBy } from 'lodash'

import Layout from "../partials/layout"
import Section from '../components/section'
import Models from '../components/models'

const Modellen = ({ data, ...props }) => {

  const orderedModels = orderBy(data.allMarkdownRemark.edges, ['node.frontmatter.type', 'node.frontmatter.model'], ['desc', 'asc'])

  return (
    <Layout title='Modellen' {...props}>
      <Section>
        <Models models={orderedModels} />
      </Section>
    </Layout>
  )
}

export default Modellen

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/models/" } }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            type
            model
            length
            width
            height
            weight
            power
            capacity
            featuredImage {
              childImageSharp {
                fixed(width: 400, fit: CONTAIN) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`