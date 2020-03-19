import React from 'react'
import styled from 'styled-components'


import CerealIcon from '../icons/cereal'
import SeedIcon from '../icons/seed'
import LegumelIcon from '../icons/legume'
import EtceteraIcon from '../icons/etcetera'

const applications = [
  {
    "label": "Granen",
    Icon: CerealIcon,
    "list": ["Maïs", "Tarwe", "Haver", "Gerst (ook voor de bierbrouwende industrie!)"]
  },
  {
    "label": "Oliehoudende zaden",
    Icon: SeedIcon,
    "list": ["Lijnzaad", "Koolzaad"]
  },
  {
    "label": "Peulvruchten",
    Icon: LegumelIcon,
    "list": ["Soja", "Bonen (waaronder veldbonen)", "Erwten"]
  },
  {
    "label": "Overige",
    Icon: EtceteraIcon,
    "list": ["Left-overs van vis", "Pellets", "Groenten en fruit", "Zonnepitschroot"],
    "extra": "Ook het verkruimelen van uw brok levert een prachtig resultaat!"
  }
]

const ApplicationList = () => (
  <StyledList>
    {applications.map(application => (
      <div key={application.label} className='application'>
        <application.Icon />
        <div className='text'>
          <h2>{application.label}</h2>
          <ul>
            {application.list.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {application.extra && <p>{application.extra}</p>}
        </div>
      </div>
    ))}
  </StyledList>
)

export default ApplicationList

const StyledList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .application {
    display: flex;
    &:not(:first-child) { margin-top: 40px; }

    svg {
      flex-shrink: 0;
      width: 2.5rem;
      height: 2.5rem;
    }

    .text { margin-left: 20px; }
    h2, li, p { font-size: 1rem; }
    p, ul { margin-top: 12px; }
                     
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
  }          
`
