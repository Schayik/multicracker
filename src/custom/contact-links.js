import React from 'react'
import styled from 'styled-components'
// import { Link } from 'gatsby'

import { links } from '../data/footer-contact-links'
import useIsEN from '../hooks/useIsEN'

const ContactLinks = () => {
  const isEN = useIsEN()

  return (
    <StyledLinks>
      {links.map(link => (
        <li key={link.link}>
          <a href={link.link}>
            <link.Icon />
            <p><strong>{(isEN && link.labelEN) ? link.labelEN : link.label}</strong><br/>{link.text}</p>
          </a>
        </li>
      ))}
    </StyledLinks>
  )
}

export default ContactLinks

const StyledLinks = styled.ul`
  li {
    &:not(:first-child) { margin-top: 3.75rem; }
    a {
      display: flex;
      align-items: center;

      svg {
        margin-right: 12px;
        width: 2.5rem;
        height: 2.5rem;
      }

      &:hover { opacity: .7; }
    }
  }  
`