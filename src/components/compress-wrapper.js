import React from 'react'
import styled from 'styled-components'

const CompressWrapper = ({ children }) => (
  <StyledCompress>
    {children}
  </StyledCompress>
)

export default CompressWrapper

const StyledCompress = styled.div`
  max-width: ${p => p.theme.media.max};
  margin: 0 auto;
  padding: 0 ${p => p.theme.margin.large};
  height: 100%;
  width: 100%;

  @media (max-width: ${p => p.theme.media.max}) {
    max-width: ${p => p.theme.media.xl};
  }

  @media (max-width: ${p => p.theme.media.xl}) {
    max-width: ${p => p.theme.media.medium};
  }

  @media (max-width: ${p => p.theme.media.medium}) {
    max-width: ${p => p.theme.media.xs};
    padding: 0 ${p => p.theme.margin.small};
  }
`