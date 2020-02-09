import React from 'react'

import CompressWrapper from './compress-wrapper'

const Section = ({ children }) => (
  <section>
    <CompressWrapper>
      {children}
    </CompressWrapper>
  </section>
)

export default Section