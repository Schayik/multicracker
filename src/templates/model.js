import React from "react"
import { graphql } from "gatsby"

import Layout from "../partials/layout"
import Section from '../components/section'

const Model = ({ data, ...props }) => (
  <Layout {...props}
    modelData={data}
    title={data.markdownRemark.frontmatter.title}
    headerHeight='31.25rem'
  >
    <Section>
      {JSON.stringify(data)}
    </Section>
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
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`



