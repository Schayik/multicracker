import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { links } from '../data/footer-contact-links'

const ContactLinks = () => (
  <StyledLinks>
    {links.map(link => (
      <li key={link.link}>
        <Link to={link.link}>
          <link.Icon />
          <p><strong>{link.label}</strong><br/>{link.text}</p>
        </Link>
      </li>
    ))}
  </StyledLinks>
)

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