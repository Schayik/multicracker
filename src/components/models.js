import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Dimensions from '../icons/dimensions'
import Power from '../icons/power'
import Weight from '../icons/weight'
import useIsEN from '../hooks/useIsEN'

const Models = ({ models }) => {
  const isEN = useIsEN()

  return (
    <StyledModels>
      {models.map(({ node }) => {
        const { type, path, title, length, width, height, weight, power, capacity, featuredImage } = node.frontmatter

        if (type === 'ac') {
          return (
            <Link key={node.id} to={path} className='model double'>
              <div className='inner'>
                <div className='double-item left'>
                  <Img fixed={featuredImage.childImageSharp.fixed} style={{ flex: 1, width: '100%', height: '100%' }} imgStyle={{ objectFit: 'contain' }} />
                  <p className='name'>{title}</p>
                </div>
                <div className='double-item right'>
                  <div className='property-wrapper'>
                    <Dimensions />
                    <p>{length} ({isEN ? 'length' : 'lengte'})<br/>{width} ({isEN ? 'width' : 'breedte'})<br/>{height} ({isEN ? 'height' : 'hoogte'})</p>
                  </div>
                  <div className='property-wrapper'>
                    <Weight />
                    <p>{weight}</p>
                  </div>
                  <div className='property-wrapper'>
                    <Power />
                    <p>{power}</p>
                  </div>
                  {isEN
                    ? <p>The capacity is <span>{capacity}</span>, depending on the product and the desirable product size.</p>
                    : <p>De capaciteit is <span>{capacity}</span>, afhankelijk van het product en gewenste deeltjesgrootte.</p>
                  }
                </div>
              </div>
            </Link>
          )
        } else {
          return (
            <Link key={node.id} to={path} className='model'>
              <div className='inner'>
                <Img fixed={featuredImage.childImageSharp.fixed} style={{ flex: 1, width: '100%', height: '100%' }} imgStyle={{ objectFit: 'contain' }} />
                <p className='name'>{title}</p>
              </div>
            </Link>
          )
        }
      })}
    </StyledModels>
  )
}

export default Models

const StyledModels = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3.75rem;
  width: 100%;

  @media (max-width: ${p => p.theme.media.xl}) {
    grid-template-columns: 1fr 1fr;
  }     
  @media (max-width: ${p => p.theme.media.medium}) {
    /* max-width: 300px;
    margin: 0 auto; */
    grid-template-columns: 1fr;
  }
          
  .model {
    width: 100%;
    padding-bottom: 100%;
    position: relative;

    .inner {
      position: absolute;
      height: 100%;
      width: 100%;
      border: 2px ${p => p.theme.colors.green} solid;
      padding: 24px;
      display: flex;
      flex-direction: column;

      /* .image {
        position: relative;
        flex: 1;
        height: 100%;
        width: 100%;
        object-fit: contain;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      } */

      p.name {
        flex-shrink: 0;
        color: ${p => p.theme.colors.green};
        font-weight: 700;
        font-size: 1rem;
        margin-top: 24px;
      }
    }       

    &.double {
      grid-column: 1 / 3;
      padding-bottom: calc(50% - 40px);
  

      .inner {
        flex-direction: row;
        
        .double-item {
          flex: 1 1 0px;
          display: flex;
          flex-direction: column;
          
          &.left {
            border-right: 2px ${p => p.theme.colors.green} solid;
            padding-right: 24px;
          }

          &.right {
            justify-content: space-evenly;
            margin-left: 3.75rem;
            flex-basis: 24px;

            p {
              font-size: .8125rem;
              span { color: ${p => p.theme.colors.green}; }
            }

            .property-wrapper {
              display: flex;
              align-items: center;
              svg {
                height: 2.5rem;
                width: 2.5rem;
              }
              p {
                margin-left: 12px;
              }
            }
          }
        }
      }

      @media (max-width: ${p => p.theme.media.medium}) {
        grid-column: 1 / 2;
        padding-bottom: calc(150%);

        .inner {
          flex-direction: column;

          .double-item {
              &.left {
                border-right: none;
                border-bottom: 2px ${p => p.theme.colors.green} solid;
                padding-right: 0;
                padding-bottom: 24px;
              }

              &.right {
                margin-top: 2.5rem;
                flex-basis: 24px;
                margin-left: 0;
              }
            }
          }
        }
      }
    }
  }
`