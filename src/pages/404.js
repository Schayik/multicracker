import React from "react"

import Layout from "../partials/layout"
import Section from "../components/section"
import Markdown from '../components/markdown'
import useIsEN from '../hooks/useIsEN'

const htmlNL = '<p><strong>Error 404: Pagina niet gevonden</stong></p>'
const htmlEN = '<p><strong>Error 404: Page not found</stong></p>'

const NotFoundPage = props => {
  const isEN = useIsEN()

  return (
    <Layout title={isEN ? "Page not found" : "Pagina niet gevonden"} {...props}>
      <Section>
        <Markdown html={isEN ? htmlEN : htmlNL} />
      </Section>
    </Layout>
  )
}

export default NotFoundPage
