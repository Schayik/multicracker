import React from "react"
import styled from 'styled-components'

import AbsImg from '../components/absolute-image'

const Header = ({ title, CustomFlagText, fluid, isHome = false }) => (
  <StyledHeader className={isHome ? '' : 'not-home'} >
    <AbsImg fluid={fluid} />
    {isHome && <div class='spacer' />}
    {!isHome && <div class='overlay' />}
    <div class='wrapper'>
      <div class='flag'>
        {CustomFlagText || <h1>{title}</h1>}   
      </div>
      <svg viewBox='0 0 1 1'>
        <polygon points='0,0 1,0 0,1' />
      </svg>
    </div>
    {!isHome && <div class='spacer' />}
  </StyledHeader>
)


const StyledHeader = styled.header`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 3.75rem;
  padding-bottom: 3.75rem;
  
  position: relative;

  .spacer {
    padding-bottom: 3.75rem;
  }
  .wrapper {
    display: flex;
    height: 10rem;
    .flag {
      background-color: ${p => p.theme.colors.green};
      display: flex;
      align-items: center;
      padding-left: calc(0.5 * (100vw - ${p => p.theme.media.max}) + ${p => p.theme.margin.large});
      h1 {
        color: #fff;
        font-size: 2.5rem;
        font-weight: bold;
      }
    }
    svg {
      fill: ${p => p.theme.colors.green};
      height: 100%;
    }
  }

  &.not-home {
    position: relative;
    .overlay {
      position: absolute;
      background-color: rgba(50,50,50,0.8);
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    .wrapper {
      position: relative;
      height: 5rem;
      .flag {
        background-color: rgba(18,157,81,0.5);
        padding-right: 50px;
      }
      svg {
        fill: rgba(18,157,81,0.5);
      }
    }
    
  }

  @media (max-width: 1439px) {
    .wrapper .flag {
      padding-left: 5rem;
    }
  }
  @media (max-width: 767px) {
    .wrapper {
      height: 8rem;
    }
    .wrapper .flag h1 {
      font-size: 2rem;
    }
  }
  @media (max-width: 575px) {
    .wrapper {
      height: 6rem;
    }
    .wrapper .flag {
      padding-left: 2rem;
    }
    .wrapper .flag h1 {
      font-size: 1.5rem;
    }
  }
`

export default Header
