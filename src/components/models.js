import React from 'react'
import styled from 'styled-components'

const Models = ({ models }) => (
  <StyledModels>
    {models.map(model => {
      if (model.double) {
        return (
          <div key={model.path} className='model double'>
            <div className='inner'>
              <div className='double-item left'>
                {/* <div className='image' style='background-image: url({{ model.src }})'></div> */}
                <p className='name'>{model.name}</p>
              </div>
              <div className='double-item right'>
                <div className='property-wrapper'>
                  <img src='./icons/dimensions.svg' />
                  <p>{model.length} mm (lengte)<br/>{model.width} mm (breedte)<br/>{model.height} mm (hoogte)</p>
                </div>
                <div className='property-wrapper'>
                  <img src='./icons/weight.svg' />
                  <p>{model.weight} kg</p>
                </div>
                <div className='property-wrapper'>
                  <img src='./icons/power.svg' />
                  <p>{model.power}</p>
                </div>
                <p>De capiciteit is <span>{model.capacity} ton / uur</span>, afhankelijk van het product en gewenste deeltjesgrootte.</p>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div className='model'>
            <div className='inner'>
              {/* <div className='image' style='background-image: url({{ model.src }})'></div> */}
              <p className='name'>{model.name}</p>
            </div>
          </div>
        )
      }
    })}
  </StyledModels>
)

export default Models

const StyledModels = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3.75rem;
  width: 100%;

  @media (max-width: ${p => p.theme.media.large}) {
    grid-template-columns: 1fr 1fr;
  }     
  @media (max-width: ${p => p.theme.media.small}) {
    max-width: 300px;
    margin: 0 auto;
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

      .image {
        flex: 1;
        height: 100%;
        width: 100%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }

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
          
          &:left {
            border-right: 2px $green solid;
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
              img {
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
    }

    @media (max-width: ${p => p.theme.media.small}) {
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
`