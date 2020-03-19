import React from "react"
import { graphql } from 'gatsby'

import Layout from "../partials/layout"
import Section from '../components/section'
import Markdown from '../components/markdown'
import Columns from '../components/columns'

import Images from '../custom/snijproces-images'

const IndexPage = ({ data, ...props }) => (
  <Layout title='Het Snijproces' {...props}>
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
  query {
    markdown1: markdownRemark(fileAbsolutePath: { regex: "/snijproces-1/" }) {
      html
    }
    markdown2: markdownRemark(fileAbsolutePath: { regex: "/snijproces-2/" }) {
      html
    }
  }
`
