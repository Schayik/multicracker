import React from "react"
import { graphql, Link } from 'gatsby'

import Layout from "../partials/layout"
import Section from '../components/section'

const Modellen = ({ data, ...props }) => (
  <Layout title='Modellen' {...props}>
    <Section>
      {JSON.stringify(data)}
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.frontmatter.path}>
              {node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  </Layout>
)

export default Modellen

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/models/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            featuredImage {
              childImageSharp {
                fixed(width: 300) {
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