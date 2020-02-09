import React from 'react'
import styled from 'styled-components'

const Columns = ({ children, amount = 2 }) => {

  let StyledComp = null
  switch(amount) {
    case 2:
      StyledComp = StyledTwoColumns
      break;
    case 3:
      StyledComp = StyledThreeColumns
      break;
    default:
      break;
  }

  return <StyledComp>{children}</StyledComp>
}

export default Columns

const StyledColumns = `
  display: grid;
  grid-gap: 2.5rem;
`

const StyledTwoColumns = styled.div`

  ${StyledColumns}

  grid-template-columns: 1fr 1fr;
`

const StyledThreeColumns = styled.div`
  ${StyledColumns}
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: ${p => p.theme.media.max}) {
    grid-template-columns: 1fr 1fr;
    > :first-child { grid-column: 1 / 3; }
    > a { max-width: 20rem; }
  }

  @media (max-width: ${p => p.theme.media.max}) {
    grid-template-columns: 1fr;
    > :first-child { grid-column: 1 / 2; }
    > a { 
      width: 20rem;
      max-width: 100%;
      margin: 0 auto;
    }
  }
`
