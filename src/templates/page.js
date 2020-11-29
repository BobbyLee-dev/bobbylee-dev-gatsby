import React from 'react'
import { graphql } from 'gatsby'
// import Image from 'gatsby-image'
import parse from 'html-react-parser'

// We're using Gutenberg so we need the block styles
import '@wordpress/block-library/build-style/style.css'
import '@wordpress/block-library/build-style/theme.css'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PageTemplate = ({ data: { page } }) => {
  return (
    <Layout>
      <SEO title={page.title} />

      <article className="page" itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{parse(page.title)}</h1>
        </header>

        {!!page.content && (
          <section itemProp="articleBody">{parse(page.content)}</section>
        )}

        <hr />
      </article>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    page: wpPage(id: { eq: $id }) {
      id
      content
      title
    }
  }
`
