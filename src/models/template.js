import React from "react"
// import { graphql } from "gatsby"

import Layout from "../partials/layout"

const Model = ({ data, ...props }) => (
  <Layout {...props}
    title={data.markdownRemark.frontmatter.title}
    headerHeight='31.25rem'
  >
    {/* <Section>
      <Markdown html={data.markdownRemark.html} />
      <Buttons buttons={buttons} />
    </Section> */}
  </Layout>
)

export default Model

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//         featuredImage {
//           childImageSharp {
//             fluid( maxWidth: 648) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `



