import React, { useState, useRef } from 'react'
import { Link, withPrefix } from 'gatsby'
import styled from 'styled-components'

import MenuIcon from '../icons/menu'
import pagesObject from '../data/pages'
import useOutsideAlerter from '../hooks/useOutsideAlerter'

const Menu = ({ pathname, locale, pageKey, modelData }) => {

  const [isOpen, setOpen] = useState(false)

  const wrapperRef = useRef(null);

  const handleClickOutside = () => {
    document.body.style.overflowY = "auto"

    setOpen(false)
  }

  const handleClick = () => {
    isOpen
      ? document.body.style.overflowY = "auto"
      : document.body.style.overflowY = "hidden"
    
    setOpen(!isOpen)
  }

  useOutsideAlerter(wrapperRef, handleClickOutside);

  return (
    <StyledMenu open={isOpen} ref={wrapperRef}>
      <button
        onClick={handleClick}
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls="menu" 
      >
        <MenuIcon />
      </button>
      <ul className={isOpen ? 'open' : 'closed'}>
      {Object.keys(pagesObject).map(linkKey => {
        if (linkKey === 'home') return null
        const { path, label } = pagesObject[linkKey][locale]
        return (
          <li key={linkKey} className={pathname === withPrefix(path) ? 'active' : ''}>
            <Link onClick={handleClick} to={path}>
              {label}
            </Link>
          </li>
        )
      })}
        <div className='menu-divider' />
        {locale === 'en' && 
          <li>
            <Link 
              onClick={handleClick} 
              to={modelData ? modelData.markdownRemark.frontmatter.pathNL : pagesObject[pageKey].nl.path}
            >
              Nederlands
            </Link>
          </li>
        }
        {locale === 'nl' && 
          <li>
            <Link
              onClick={handleClick}
              to={modelData ? modelData.markdownRemark.frontmatter.pathEN : pagesObject[pageKey].en.path}
            >
              English
            </Link>
          </li>
        }   
      </ul>
    </StyledMenu>
  )
}

export default Menu

const StyledMenu = styled.div`

  display: flex;
  align-items: center;

  button {
    z-index: 12;
    position: relative;
    height: 2.5rem;
    width: 2.5rem;
    :hover {
      cursor: pointer;
    }

    svg {
      position: absolute;
      
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      stroke: ${p => p.open ? p.theme.colors.white : p.theme.colors.green};
      fill: ${p => p.open ? p.theme.colors.white : p.theme.colors.green};
    }
  }

  ul {
    position: fixed;
    z-index: 10;

    top: 0;
    bottom: 0;
    right: 0;

    padding: ${p => p.theme.margin.large};
    padding-top: ${p => p.theme.navbar.height};

    background-color: ${p => p.theme.colors.green};

    transition: 0.3s ease-out transform;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    min-width: calc(50vw - .5 * ${p => p.theme.media.medium} + 120px);

    &.closed {
      transform: translateX(100%);
    }
        
    li {
      margin-top: ${p => p.theme.margin.small};
      a {
        color: ${p => p.theme.colors.white};
        font-size: 1.25rem;
        font-weight: 700;
        :hover {
          opacity: .7;
        }
      }
    }
  }

  .menu-divider {
    margin-top: ${p => p.theme.margin.small};
    width: 100px;
    border: 1px solid ${p => p.theme.colors.white};
  }

  display: none;
  @media (max-width: ${p => p.theme.media.xl}) {
    display: flex;
  }

  @media (max-width: ${p => p.theme.media.medium}) {
    ul {
      padding-right: ${p => p.theme.margin.small};
      padding-left: ${p => p.theme.margin.small};
      padding-bottom: ${p => p.theme.margin.small};
      min-width: calc(50vw - .5 * ${p => p.theme.media.xs} + 104px);
      li a { font-size: 1.25rem; }
    }
  }

  @media (max-width: ${p => p.theme.media.xs}) {
    ul { padding-right: ${p => p.theme.margin.small}; }
  }
`