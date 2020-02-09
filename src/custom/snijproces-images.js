import React from 'react'
import styled from 'styled-components'

import Multicracker1Icon from '../images/multicracker-1.js'
import Wasmolen1Icon from '../images/wasmolen-1.js'
import Wasmolen3Icon from '../images/wasmolen-3.js'

const images = [
  { label: 'Multicracker, 1 meter', Icon: Multicracker1Icon },
  { label: 'Wasmolen, 1 meter', Icon: Wasmolen1Icon },
  { label: 'Wasmolen, 3 meter', Icon: Wasmolen3Icon },
]

const Images = () => (
  <StyledImages>
    {images.map(image => (
      <div key={image.label}>
        <image.Icon />
      </div>
    ))}
  </StyledImages>
)

  
export default Images

const StyledImages = styled.div`
  max-width: 520px;
  margin-top: 20px;

  svg {
    margin-top: 20px;
    max-height: 200px;
    max-width: 100%;
  }
  
  @media(max-width: ${p => p.theme.media.medium}) {
    max-width: 300px;
  }         
`
