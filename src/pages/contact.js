import React from "react"

import Layout from "../partials/layout"
import Section from '../components/section'
import Columns from '../components/columns'

import ContactLocation from '../custom/contact-location'
import ContactLinks from '../custom/contact-links'

const IndexPage = ({ data, ...props }) => (
  <Layout title='Het Snijproces' {...props}>
    <Section>
      <Columns>
        <ContactLocation />
        <ContactLinks />
      </Columns>
    </Section>
  </Layout>
)

export default IndexPage