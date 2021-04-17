import React from "react"
import { graphql } from 'gatsby'

import Layout from "../partials/layout"
import Section from '../components/section'
import Markdown from '../components/markdown'
import Columns from '../components/columns'

import Images from '../custom/snijproces-images'

const IndexPage = ({ data, pageContext, ...props }) => (
  <Layout title={pageContext.locale === 'nl' ? 'Maalproces' : 'Milling Process'} pageContext={pageContext} {...props}>
    <Section>
      <Columns>
        <div>
          <Markdown html={data.markdown1.html} />
          <Images />
        </div>
        <Markdown html={data.markdown2.html} />
      </Columns>
    </Section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query($locale: String!) {
    markdown1: markdownRemark(fileAbsolutePath: { regex: "/snijproces-1/" }, frontmatter: { locale: { eq: $locale } }) {
      html
    }
    markdown2: markdownRemark(fileAbsolutePath: { regex: "/snijproces-2/" }, frontmatter: { locale: { eq: $locale } }) {
      html
    }
  }
`
