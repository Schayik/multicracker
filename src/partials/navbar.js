import React from "react"
import styled from 'styled-components'
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql, withPrefix } from "gatsby"

import Menu from './menu'
import CompressWrapper from '../components/compress-wrapper'


const links = [
  { link: "/toepassingsgebieden", label: "Toepassingsgebieden" },
  { link: "/modellen", label: "Modellen" },
  { link: "/snijproces", label: "Het snijproces" },
  { link: "/contact", label: "Contact" }
]

const linksSmall = [
  { link: "/toepassingsgebieden", label: "Toepassingen" },
  { link: "/modellen", label: "Modellen" },
  { link: "/snijproces", label: "Snijproces" },
  { link: "/contact", label: "Contact" }
]

const Links = ({ pathname, links, ...props }) => (
  <ul {...props}>
    {links.map(link => (
      <li className={pathname === withPrefix(link.link) ? 'active' : ''}>
        <Link to={link.link}>
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
)

const NavBar = ({ pathname }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "logo.png"}) {
        id
        childImageSharp {
          fluid (
            maxWidth: 240
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledNavBar>
      <CompressWrapper>
        <div className='content'>
          <Link to='/' className='logo'>
            <Img fluid={data.file.childImageSharp.fluid} className='image' />
          </Link>
          <Links className='big' pathname={pathname} links={links} />
          <Links className='small' pathname={pathname} links={linksSmall} />
          <Menu links={links} />
        </div>
      </CompressWrapper>
    </StyledNavBar>
  )
}

const StyledNavBar = styled.nav`

  background-color: #ffffff;
  display: flex;
  align-items: center;

  .content {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a.logo .image {
    width: 14rem;
  }

  ul.big, ul.small {
    display: flex;
    padding: 0;
            
    li {
      margin-left: 3.75rem;
      a {
        font-size: 1.25rem;
        font-weight: bold;

        &:hover { color: ${p => p.theme.colors.greenHover}; }
      }
      &.active a { color: ${p => p.theme.colors.green}; }
    }           
  }

  ul.small li { margin-left: 2.5rem; }

  ul.small { display: none; }
  @media (max-width: ${p => p.theme.media.xl}) {
    ul.big { display: none; }
  }
  /* @media (max-width: ${p => p.theme.media.xl}) {
    ul.big { display: none; }
    ul.small { display: flex; }
  }
  @media (max-width: ${p => p.theme.media.large}) {
    ul.small { display: none; }
  } */
`

export default NavBar
