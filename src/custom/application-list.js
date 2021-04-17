import React from 'react'
import styled from 'styled-components'


import CerealIcon from '../icons/cereal'
import SeedIcon from '../icons/seed'
import LegumelIcon from '../icons/legume'
import EtceteraIcon from '../icons/etcetera'

const applicationsNL = [
  {
    "label": "Granen",
    Icon: CerealIcon,
    "list": ["Maïs", "Tarwe", "Haver", "Gerst (ook voor de bierbrouwende industrie)"]
  },
  {
    "label": "Oliehoudende zaden",
    Icon: SeedIcon,
    "list": ["Lijnzaad", "Koolzaad", "Raapzaad", "Hennepzaad", "Mosterdzaad"]
  },
  {
    "label": "Peulvruchten",
    Icon: LegumelIcon,
    "list": ["Sojabonen", "Voerbonen", "Erwten", "Pinda's", "Kastanjes", "Noten"]
  },
  {
    "label": "Overige",
    Icon: EtceteraIcon,
    "list": ["Korrels", "Groenten en fruit", "Zonnepitschroot", "Ureum", "Cacao", "Specerijen", "Zout", "Insecten"],
    // "extra": "Ook het verkruimelen van uw brok levert een prachtig resultaat!"
  }
]

const applicationsEN = [
  {
    "label": "Grains",
    Icon: CerealIcon,
    "list": ["Corn", "Wheat", "Oats", "Barley (also for the brewing industry)"]
  },
  {
    "label": "Oilseeds",
    Icon: SeedIcon,
    "list": ["Linseed", "Rapeseed", "Hemp seed", "Mustard seed"]
  },
  {
    "label": "Pulses",
    Icon: LegumelIcon,
    "list": ["Soybeans", "Beans for animal fodder", "Peas", "Peanuts", "Chestnut", "Nuts"]
  },
  {
    "label": "Other",
    Icon: EtceteraIcon,
    "list": ["Pellets", "Fruit and vegetables", "Sunflower seed residues", "Urea", "Cacao", "Spices", "Salt", "Insects"],
    // "extra": "Ook het verkruimelen van uw brok levert een prachtig resultaat!"
  }
]

const ApplicationList = ({ isEN }) => {
  const list = isEN ? applicationsEN : applicationsNL

  return (
    <StyledList>
      {list.map(application => (
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
}

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
