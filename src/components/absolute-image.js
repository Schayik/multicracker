import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const AbsImg = props => (
  <StyledImg as={Img} style={{ position: 'absolute' }} {...props} />
)

export default AbsImg

const StyledImg = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`