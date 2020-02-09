import React from "react"
import { graphql } from 'gatsby'

import Layout from "../partials/layout"
import Section from '../components/section'
import Markdown from '../components/markdown'
import BladeButton from '../components/blade-button'
import Columns from '../components/columns'

import ApplicationsIcon from '../icons/applications'
import ModelsIcon from '../icons/models'

const CustomFlagText = (
  <h1>Fijn snijden terwijl de structuur en<br />scherpte worden behouden</h1>
)

const IndexPage = ({ data, ...props }) => (
  <Layout 
    isHome 
    CustomFlagText={CustomFlagText}
    {...props}
  >
    <Section>
      <Columns amount={3}>
        <Markdown html={data.markdownRemark.html} />
        <BladeButton 
          to='/toepassingsgebieden' 
          label='Toepassingsgebieden' 
          Icon={ApplicationsIcon}
        />
        <BladeButton 
          to='/modellen' 
          label='Modellen' 
          Icon={ModelsIcon}
        />
      </Columns>
    </Section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    markdownRemark (fileAbsolutePath: { regex: "/home/" }) {
      html
    }
  }
`
