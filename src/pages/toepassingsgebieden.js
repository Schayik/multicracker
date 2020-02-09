import React from "react"
import { graphql } from 'gatsby'

import Layout from "../partials/layout"
import Section from '../components/section'
import Markdown from '../components/markdown'
import Columns from '../components/columns'

import ApplicationList from '../custom/application-list'

const IndexPage = ({ data, ...props }) => (
  <Layout title='Toepassingsgebieden' {...props}>
    <Section>
      <Columns>
        <Markdown html={data.markdownRemark.html} />
        <ApplicationList />
      </Columns>
    </Section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/toepassingsgebieden/" }) {
      html
    }
  }
`
