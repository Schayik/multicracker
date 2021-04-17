import React from "react"
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from "../partials/layout"
import Section from '../components/section'
import Markdown from '../components/markdown'
import BladeButton from '../components/blade-button'
import Columns from '../components/columns'

import useIsEN from '../hooks/useIsEN'

import ApplicationsIcon from '../icons/applications'
import ModelsIcon from '../icons/models'

const CustomFlagText = (
  <h1>Fijn snijden terwijl de structuur en<br />scherpte worden behouden</h1>
)

const CustomFlagTextEN = (
  <h1>Cutting edge technology which retains<br />product structure and quality</h1>
)

const IndexPage = ({ data, ...props }) => {
  const isEN = useIsEN()

  return (
    <Layout 
      isHome 
      CustomFlagText={isEN ? CustomFlagTextEN : CustomFlagText}
      {...props}
    >
      <Section>
        <Columns amount={3}>
          <StyledMarkdown as={Markdown} html={data.markdownRemark.html} />
          <BladeButton 
            to={isEN ? '/en/applications' : '/toepassingen'}
            label={isEN ? 'Applications' : 'Toepassingen'}
            Icon={ApplicationsIcon}
          />
          <BladeButton 
            to={isEN ? '/en/models' : '/modellen'}
            label={isEN ? 'Models' : 'Modellen'}
            Icon={ModelsIcon}
          />
        </Columns>
      </Section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query($locale: String!) {
    markdownRemark (fileAbsolutePath: { regex: "/home/" }, frontmatter: { locale: { eq: $locale } }) {
      html
    }
  }
`

const StyledMarkdown = styled.div`
  @media (max-width: ${p => p.theme.media.xl}) {
    grid-column: 1 / 3;
  }
  @media (max-width: ${p => p.theme.media.medium}) {
    grid-column: 1 / 2;
  }
`
