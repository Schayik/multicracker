import React from 'react'
import styled from 'styled-components'

import { location } from '../data/footer-contact-links'
import useIsEN from '../hooks/useIsEN'

const ContactLocation = () => {
  const isEN = useIsEN()

  return (
    <StyledLocation>
      <p>{isEN ? 'Please do not hesitate to contact us!' : 'Aarzel niet om contact met ons op te nemen!'}</p>
      <a target='_blank' rel="noopener noreferrer" href={location.link}>
        <location.ContactIcon />
        <location.ContactText isEN={isEN} />
      </a>
    </StyledLocation>
  )
}

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