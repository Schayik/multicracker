import React from 'react'
import styled from 'styled-components'

import CompressWrapper from '../components/compress-wrapper'
import AbsImg from '../components/absolute-image'
import useIsEN from '../hooks/useIsEN'

import MailIcon from '../icons/mail'

import { links, location } from '../data/footer-contact-links'

const Footer = ({ fluid }) => {
  const isEN = useIsEN()
  
  return (
    <StyledFooter>
      <AbsImg fluid={fluid} />
      <div className='overlay'></div>
      <CompressWrapper>
        <div className='content'>
          {links.map(link => (
            <a key={link.link} href={link.link} target='_blank' rel="noopener noreferrer">
              <Shape isFilled />
              <link.Icon className='icon' />
              <p className={link.small ? "small" : null}><strong>{(isEN && link.labelEN) ? link.labelEN : link.label}</strong><br />{link.text}</p>
            </a>
          ))}
          <a href="mailto:info@multicrackerbenelux.com" target='_blank' rel="noopener noreferrer">
            <Shape isFilled />
            <MailIcon className='icon' />
            <p><strong>E-mail</strong><br /><span class="small">info@multicrackerbenelux.com</span></p>
          </a>
          <a className='open' target='_blank' rel="noopener noreferrer" href={location.link}>
            <Shape />
            <location.FooterIcon className='icon' />
            <location.FooterText isEN={isEN} />
          </a>
        </div>
      </CompressWrapper>
    </StyledFooter>
  )
}

export default Footer

const Shape = ({ isFilled }) => (
  <svg className='background' viewBox='0 0 400 150' preserveAspectRatio='none' fill={isFilled ? 'white' : 'none'}>
    <path d='M 2,2 398,27 398,148 2,148 Z' stroke='white' strokeWidth='4' />
  </svg>
)

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 575px) {
    display: flex;
  }
  .overlay {
    position: absolute;
    background-color: rgba(50,50,50,0.8);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .content {
    position: relative;
    z-index: 1;
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2.5rem;
    @media (max-width: ${p => p.theme.media.max}) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: ${p => p.theme.media.xl}) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: ${p => p.theme.media.medium}) {
      grid-template-columns: 1fr;
    }
  }


  .content a {
    position: relative;
    flex: 1 0 280px;
    padding: 8px 1.25rem 0 1.25rem;
    height: 100px;
    display: flex;
    align-items: center;
  }
  .content a svg.icon,
  .content a .text {
    position: relative;
    z-index: 1;
  }
  .content a svg.icon {
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
  }
  .content a p {
    font-size: 1rem;
    margin-left: 1.25rem;
    word-break: break-all;
  }
  .content a p span.small {
    font-size: .925rem;
  }
  .content a svg.background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
  .content a:hover svg.background {
    opacity: 0.9;
  }
  .content a.open p {
    font-size: 0.8125rem;
    color: #fff;
  }
  .content a.open:hover svg.background {
    fill: #fff;
    fill-opacity: 0.1;
  }
`

