import React from 'react'
import styled from 'styled-components'

const Markdown = ({ html }) => (
  <StyledMarkdown dangerouslySetInnerHTML={{ __html: html }} />
)

export default Markdown

const StyledMarkdown = styled.div`

  max-width: 520px;
  a {
    color: ${p => p.theme.colors.green};
    text-decoration: underline;
    &:hover {
      color: ${p => p.theme.colors.greenHover};
    }
  }
 
  h2, li, p, a {
    font-size: 1rem;
  }

  h2 {
    font-weight: 700;
    margin-bottom: 12px;
  }

  ul li {
    margin-top: 4px;
    display: flex;
    align-items: center;
    &::before {
      content: '';
      height: 6px;
      width: 6px;
      border-radius: 50%;
      background-color: ${p => p.theme.colors.green};
      margin-right: 8px;
    }
  }

  ul li p, ul li ul {
    margin-top: 12px;
  }
`