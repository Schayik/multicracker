import React from "react"
import styled from 'styled-components'
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql, withPrefix } from "gatsby"

import CompressWrapper from '../components/compress-wrapper'

const links = [
  { link: "/toepassingsgebieden", label: "Toepassingsgebieden" },
  { link: "/modellen", label: "Modellen" },
  { link: "/snijproces", label: "Het snijproces" },
  { link: "/contact", label: "Contact" }
]

// const linksSmall = [
//   { link: "/toepassingsgebieden", label: "Toepassingen" },
//   { link: "/modellen", label: "Modellen" },
//   { link: "/snijproces", label: "Snijproces" },
//   { link: "/contact", label: "Contact" }
// ]

const Links = ({ pathname }) => (
  <ul>
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
          <div class='desktop' >
            <Links pathname={pathname} />
          </div>
          <div class='hamburger' >
            <button aria-expanded="false" aria-controls="menu">
              <svg id="i-menu" aria-label="Menu" viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2">
                <path d="M0 2 L16 2 M0 8 L16 8 M0 14 L16 14"></path>
              </svg>
            </button>
            <Links pathname={pathname} />
          </div>
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

  .desktop {
    @media (max-width: ${p => p.theme.media.large}px) {
      display: none;
    }
    
    ul {
      display: flex;
      padding: 0;
    }
            
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

  .hamburger {
    display: none;
    @media (max-width: ${p => p.theme.media.large}) {
      display: block;
    }     
  }
`

export default NavBar
