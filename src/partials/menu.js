import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import MenuIcon from '../icons/menu'

const Menu = ({ links }) => {

  const [isOpen, setOpen] = useState(false)

  const handleClick = () => {
    isOpen
      ? document.body.style.overflow = "auto"
      : document.body.style.overflow = "hidden"
    
    setOpen(!isOpen)
  }

  return (
    <StyledMenu open={isOpen}>
      <button
        onClick={handleClick}
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls="menu" 
      >
        <MenuIcon />
      </button>
      <ul className={isOpen ? 'open' : 'closed'}>
        {links.map(link => (
          <li key={link.link}>
            <Link onClick={handleClick} to={link.link}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </StyledMenu>
  )
}

export default Menu

const StyledMenu = styled.div`

  display: flex;
  align-items: center;

  button {
    position: relative;
    height: 2.5rem;
    width: 2.5rem;

    svg {
      position: absolute;
      z-index: 12;
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

    &.closed {
      transform: translateX(100%);
    }
        
    li {
      margin-top: ${p => p.theme.margin.small};
      a {
        color: ${p => p.theme.colors.white};
        font-size: 2rem;
        font-weight: 700;
      }
    }
  }

  display: none;
  @media (max-width: ${p => p.theme.media.large}) {
    display: flex;
  }

  @media (max-width: ${p => p.theme.media.medium}) {
    ul {
      padding-right: ${p => p.theme.margin.small};
      padding-left: ${p => p.theme.margin.small};
      padding-bottom: ${p => p.theme.margin.small};
      li a { font-size: 1.25rem; }
    }
  }

  @media (max-width: ${p => p.theme.media.xs}) {
    ul { padding-right: ${p => p.theme.margin.small}; }
  }
`