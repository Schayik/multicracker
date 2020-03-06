import React from "react"
import { graphql } from "gatsby"

import Layout from "../partials/layout"

const Model = ({ data, ...props }) => (
  <Layout {...props}
    title={data.markdownRemark.frontmatter.title}
    headerHeight='31.25rem'
  >
    {JSON.stringify(data)}
    {/* <Section>
      <Markdown html={data.markdownRemark.html} />
      <Buttons buttons={buttons} />
    </Section> */}
  </Layout>
)

export default Model

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        featuredImage {
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    modelsJson(path: { eq: $path }) {
      id
      name
      length
      width
      height
      weight
      power
      capacity
    }
  }
`



