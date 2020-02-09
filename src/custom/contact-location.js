import React from 'react'
import styled from 'styled-components'

import { location } from '../data/footer-contact-links'

const ContactLocation = () => (
  <StyledLocation>
    <p>Aarzel niet om contact met ons op te nemen!</p>
    <a target='_blank' rel="noopener noreferrer" href={location.link}>
      <location.ContactIcon />
      <location.ContactText />
    </a>
  </StyledLocation>
)

export default ContactLocation

const StyledLocation = styled.div`
  a {
    margin-top: 40px;
    display: flex;

    svg {
      margin-right: 12px;
      width: 2.5rem;
      height: 2.5rem;
    }

    &:hover { opacity: .7; }
  }
`