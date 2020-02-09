import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'

import AbsImg from './absolute-image'

const BladeButton = ({ label, Icon, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "cracker.png"}) {
        childImageSharp {
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledButton as={Link} {...props}>
      <AbsImg fluid={data.file.childImageSharp.fluid} />
      <Icon className='icon' />
      <p>{label}</p>
      <div class='overlay' />
      <svg className='overlap' viewBox='0 0 1 1' preserveAspectRatio="none">
        <polygon points='0,0 1,1 0,1' fill='white' />
      </svg>
    </StyledButton>
  )
}



export default BladeButton

const StyledButton = styled.button`

  position: relative;
  height: 12.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
      
  svg.icon, p {
    position: relative;
    z-index: 1;
  }

  svg.icon {
    height: 3.75rem;
    width: 3.75rem;
  }

  p {
    position: relative;
    color: ${p => p.theme.colors.white};
    font-size: 1.25rem;
    margin-top: 16px;
  }

  svg.overlap {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 32px;
    width: 100%;
  }
      
  .overlay {
    position: absolute;
    background-color: ${p => p.theme.colors.green};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &:hover {
    cursor: pointer;
    .overlay { background-color: ${p => p.theme.colors.greenHover}};
  }
`