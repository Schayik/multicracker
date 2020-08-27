import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Dimensions from '../icons/dimensions'
import Power from '../icons/power'
import Weight from '../icons/weight'
import useIsEN from '../hooks/useIsEN'

const Model = ({ data }) => {
  const isEN = useIsEN()

  const { length, width, height, weight, power, capacity, featuredImage } = data.markdownRemark.frontmatter

  console.log(featuredImage)

  return (
    <StyledModel>
      <div className='image-wrapper'>
        <Img fixed={featuredImage.childImageSharp.fixed} style={{ maxWidth: '100%' }} imgStyle={{ objectFit: 'contain' }} />
      </div>

      <div className='properties-wrapper'>
        <div className='properties'>
          <h2>{isEN ? 'Properties' : 'Kenmerken'}</h2>
          <div className='property-wrapper'>
            <Dimensions />
            <p>
              {length} ({isEN ? 'length' : 'lengte'})<br/>
              {width} ({isEN ? 'width' : 'breedte'})<br/>
              {height} ({isEN ? 'height' : 'hoogte'})
            </p>
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
    </StyledModel>
  )
}

export default Model

const StyledModel = styled.div`
  display: flex;

  .image-wrapper, .properties-wrapper {
    flex: 1 0 0;
  }

  @media(max-width: ${p => p.theme.media.xl}) {
    flex-direction: column;

    .properties-wrapper {
      margin-top: 4rem;
    }
  }

  .image-wrapper {
    max-width: 100%;
  }
      
  .properties {
    max-width: 520px;

    h2 {
      font-weight: 700;
      margin-bottom: 12px;
      font-size: 1rem;
    }

    p {
      font-size: 1rem;
      span { color: ${p => p.theme.colors.green}; }
    }

    .property-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      svg {
        height: 2.5rem;
        width: 2.5rem;
      }
      p {
        margin-left: 12px;
      }
    }
  }
`

// const StyledModel = styled.div`
//   border: 2px ${p => p.theme.colors.green} solid;
//   padding: 24px;
//   display: flex;
//   /* flex-direction: column; */

//     /* .image {
//       position: relative;
//       flex: 1;
//       height: 100%;
//       width: 100%;
//       object-fit: contain;
//       background-size: contain;
//       background-repeat: no-repeat;
//       background-position: center;
//     } */

  
//   p.name {
//     flex-shrink: 0;
//     color: ${p => p.theme.colors.green};
//     font-weight: 700;
//     font-size: 1rem;
//     margin-top: 24px;
//   }      
      
//   .double-item {
//     flex: 1 1 0px;
//     display: flex;
//     flex-direction: column;
    
//     &.left {
//       border-right: 2px ${p => p.theme.colors.green} solid;
//       padding-right: 24px;
//     }

//     &.right {
//       justify-content: space-evenly;
//       margin-left: 3.75rem;
//       flex-basis: 24px;

//       p {
//         font-size: .8125rem;
//         span { color: ${p => p.theme.colors.green}; }
//       }

//       .property-wrapper {
//         display: flex;
//         align-items: center;
//         margin-bottom: 1rem;
//         svg {
//           height: 2.5rem;
//           width: 2.5rem;
//         }
//         p {
//           margin-left: 12px;
//         }
//       }
//     }
//   }
// `