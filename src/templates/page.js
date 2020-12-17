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
          {/* <Img
            fluid={page.frontAcfFields.wapuu.localFile.childImageSharp.fluid}
            key={page.frontAcfFields.wapuu.localFile.childImageSharp.fluid.src}
          /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96 96"
            role="img"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M48 12c19.9 0 36 16.1 36 36S67.9 84 48 84 12 67.9 12 48s16.1-36 36-36"
              fill="none"
            ></path>
            <path
              d="M69.5 46.4c0-3.9-1.4-6.7-2.6-8.8-1.6-2.6-3.1-4.9-3.1-7.5 0-2.9 2.2-5.7 5.4-5.7h.4C63.9 19.2 56.4 16 48 16c-11.2 0-21 5.7-26.7 14.4h2.1c3.3 0 8.5-.4 8.5-.4 1.7-.1 1.9 2.4.2 2.6 0 0-1.7.2-3.7.3L40 67.5l7-20.9L42 33c-1.7-.1-3.3-.3-3.3-.3-1.7-.1-1.5-2.7.2-2.6 0 0 5.3.4 8.4.4 3.3 0 8.5-.4 8.5-.4 1.7-.1 1.9 2.4.2 2.6 0 0-1.7.2-3.7.3l11.5 34.3 3.3-10.4c1.6-4.5 2.4-7.8 2.4-10.5zM16.1 48c0 12.6 7.3 23.5 18 28.7L18.8 35c-1.7 4-2.7 8.4-2.7 13zm32.5 2.8L39 78.6c2.9.8 5.9 1.3 9 1.3 3.7 0 7.3-.6 10.6-1.8-.1-.1-.2-.3-.2-.4l-9.8-26.9zM76.2 36c0 3.2-.6 6.9-2.4 11.4L64 75.6c9.5-5.5 15.9-15.8 15.9-27.6 0-5.5-1.4-10.8-3.9-15.3.1 1 .2 2.1.2 3.3z"
              fill="none"
            ></path>
          </svg>
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
              fluid(maxWidth: 300) {
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
              fluid(maxWidth: 300) {
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
  /* max-width: 300px; */
  margin: auto;
  display: flex;
  > div {
    width: 47%;
  }

  svg {
    width: 47%;
    stroke: #555;
    stroke-width: 0.5;
    width: 250px;
    path {
      stroke-dasharray: 300;
      stroke-dashoffset: 300;
      animation: draw 2s ease infinite alternate;
    }
    @keyframes draw {
      0% {
        stroke-dashoffset: 0;
      }
    }
  }
`
