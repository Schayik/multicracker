import React from "react"
import { graphql } from "gatsby"

import Model from "../components/model"
import Layout from "../partials/layout"
import Section from '../components/section'

const ModelPage = ({ data, ...props }) => (
  <Layout {...props}
    modelData={data}
    title={data.markdownRemark.frontmatter.title}
    headerHeight='31.25rem'
  >
    <Section>
      <Model data={data} />
    </Section>
  </Layout>
)

export default ModelPage

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        pathEN
        pathNL
        locale
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
            fixed(width: 520) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`



