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
    <Layout page={page.title.toLowerCase().replace(' ', '-')}>
      <SEO title={page.title} />

      {page.frontHeading && <h2 className="h1">{page.frontHeading.heading}</h2>}
      {!page.isFrontPage && <h1 itemProp="headline">{parse(page.title)}</h1>}

      {!!page.content && parse(page.content)}

      <hr />
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
      isFrontPage
      frontHeading {
        heading
      }
    }
  }
`
