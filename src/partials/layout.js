import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Head from "./head"
import NavBar from "./navbar"
import Header from "./header"
import Footer from "./footer"

import GlobalStyle from '../styles/global'
import THEME from '../styles/theme'

const Layout = ({ children, title, isHome, location, CustomFlagText }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: {eq: "cracker.png"}) {
        id
        childImageSharp {
          fluid (
            maxWidth: 1440
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { fluid } = data.file.childImageSharp

  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <Head title={title} />
      <StyledBody>
        <NavBar siteTitle={data.site.siteMetadata.title} pathname={location && location.pathname} />
        <Header title={title} isHome={isHome} CustomFlagText={CustomFlagText} fluid={fluid} />
        <main>{children}</main>
        <Footer fluid={fluid} />
      </StyledBody>
    </ThemeProvider>
  )
}

export default Layout

const StyledBody = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 0;
  }

  nav {
    flex: .2;
  }

  footer {
    flex: .2;
  }
`
