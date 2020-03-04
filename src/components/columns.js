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

  @media (max-width: ${p => p.theme.media.medium}) {
    grid-template-columns: 1fr;
  }
`

const StyledThreeColumns = styled.div`
  ${StyledColumns}
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: ${p => p.theme.media.xl}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${p => p.theme.media.medium}) {
    grid-template-columns: 1fr;
  }
`
