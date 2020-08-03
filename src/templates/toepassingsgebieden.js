import React from "react"
import { graphql } from 'gatsby'

import Layout from "../partials/layout"
import Section from '../components/section'
import Markdown from '../components/markdown'
import Columns from '../components/columns'

import ApplicationList from '../custom/application-list'

const IndexPage = ({ data, pageContext, ...props }) => (
  <Layout title={pageContext.locale === 'nl' ? 'Toepassingen' : 'Applications'} pageContext={pageContext} {...props}>
    <Section>
      <Columns>
        <Markdown html={data.markdownRemark.html} />
        <ApplicationList isEN={pageContext.locale === 'en'} />
      </Columns>
    </Section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query($locale: String!) {
    markdownRemark(fileAbsolutePath: { regex: "/toepassingsgebieden/" }, frontmatter: { locale: { eq: $locale } }) {
      html
    }
  }
`
