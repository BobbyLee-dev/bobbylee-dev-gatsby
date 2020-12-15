import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import parse from 'html-react-parser'
import styled from '@emotion/styled'

// We're using Gutenberg so we need the block styles
import '@wordpress/block-library/build-style/style.css'
import '@wordpress/block-library/build-style/theme.css'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PageTemplate = ({ data: { page } }) => {
  return (
    <Layout page={page.title.toLowerCase().replace(' ', '-')}>
      <SEO title={page.title} />

      {page.frontAcfFields.heading && (
        <h2 className="h1">{page.frontAcfFields.heading}</h2>
      )}
      {!page.isFrontPage && <h1 itemProp="headline">{parse(page.title)}</h1>}

      {!!page.content && parse(page.content)}

      {page.isFrontPage && (
        <HomeImages>
          <Img
            fluid={page.frontAcfFields.wapuu.localFile.childImageSharp.fluid}
            key={page.frontAcfFields.wapuu.localFile.childImageSharp.fluid.src}
          />
          <Img
            fluid={
              page.frontAcfFields.gatsbyLogo.localFile.childImageSharp.fluid
            }
            key={
              page.frontAcfFields.gatsbyLogo.localFile.childImageSharp.fluid.src
            }
          />
        </HomeImages>
      )}

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
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      id
      content
      title
      isFrontPage
      frontAcfFields {
        heading
        wapuu {
          localFile {
            childImageSharp {
              # Try editing the "maxWidth" value to generate resized images.
              fluid(maxWidth: 500) {
                # In the GraphQL explorer, use field names
                # like "src". In your site's code, remove them
                # and use the fragments provided by Gatsby.
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                # This fragment won't work in the GraphQL
                # explorer, but you can use it in your site
                # ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        gatsbyLogo {
          localFile {
            childImageSharp {
              # Try editing the "maxWidth" value to generate resized images.
              fluid(maxWidth: 500) {
                # In the GraphQL explorer, use field names
                # like "src". In your site's code, remove them
                # and use the fragments provided by Gatsby.
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                # This fragment won't work in the GraphQL
                # explorer, but you can use it in your site
                # ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
const HomeImages = styled.div`
  display: flex;
  > div {
    width: 47%;
  }
`
