import React from "react"

import Layout from "../partials/layout"
import Section from "../components/section"
import Markdown from '../components/markdown'

const html = '<p><strong>Error 404: Pagina niet gevonden</stong></p>'

const NotFoundPage = () => (
  <Layout title="Pagina niet gevonden" >
    <Section>
      <Markdown html={html} />
    </Section>
  </Layout>
)

export default NotFoundPage
