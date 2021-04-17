import React from "react"
import styled from 'styled-components'
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql, withPrefix } from "gatsby"

import Menu from './menu'
import CompressWrapper from '../components/compress-wrapper'
import pagesObject from '../data/pages'
import Netherlands from '../icons/netherlands'
import UnitedKingdom from '../icons/united-kingdom'

const NavBar = ({ pathname, locale, pageKey, modelData }) => {
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
          <Link to={locale === 'nl' ? pagesObject.home.nl.path : pagesObject.home.en.path} className='logo'>
            <Img fluid={data.file.childImageSharp.fluid} className='image' />
          </Link>

          <ul className='big navbar-list'>
            {Object.keys(pagesObject).map(linkKey => {
              const { path, label } = pagesObject[linkKey][locale ? locale : 'nl']
              return (
                <li key={linkKey} className={pathname === withPrefix(path) ? 'active' : ''}>
                  <Link to={path}>
                    {label}
                  </Link>
                </li>
              )
            })}
            <div className='divider' />
            {locale === 'en' && 
              <li className='language'>
                <Link to={modelData ? modelData.markdownRemark.frontmatter.pathNL : pagesObject[pageKey].nl.path}>
                  Nederlands
                  <Netherlands className='flag' />
                </Link>
              </li>
            }
            {locale === 'nl' && 
              <li className='language'>
                <Link to={modelData ? modelData.markdownRemark.frontmatter.pathEN : pagesObject[pageKey].en.path}>
                  English
                  <UnitedKingdom className='flag' />
                </Link>
              </li>
            }            
          </ul>
          {/* <Links className='big' links={links} /> */}
          {/* <Links className='small' pathname={pathname} links={linksSmall} /> */}
          <Menu 
            pathname={pathname}
            locale={locale} 
            pageKey={pageKey} 
            modelData={modelData}
          />
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

  .divider {
    margin-left: 2rem;
    /* border: 1px solid ${p => p.theme.colors.black}; */
    background-color: ${p => p.theme.colors.black};
    width: 2px;
  }

  a.logo .image {
    width: 14rem;
  }

  ul.big, ul.small, ul.navbar-list {
    display: flex;
    padding: 0;
            
    li {
      margin-left: 2rem;
      a {
        font-size: 1.25rem;
        font-weight: bold;

        &:hover { color: ${p => p.theme.colors.greenHover}; }
      }
      &.active a { color: ${p => p.theme.colors.green}; }
    }           
  }

  ul.navbar-list li.language {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;

      font-size: 1rem;
      line-height: 16px;

      .flag {
        margin-left: 8px;
      }
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
