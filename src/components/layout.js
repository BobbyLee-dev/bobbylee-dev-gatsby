import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import GlobalStyles from './global-styles'

import Header from './header/header'
import './layout.css'
import { Global } from '@emotion/react'

const Layout = ({ children }) => {
  const wpData = useStaticQuery(graphql`
    query {
      allWp {
        nodes {
          generalSettings {
            url
            title
            description
          }
        }
      }
    }
  `)
  // console.log(wpData)
  const wpSettingsInfo = wpData.allWp.nodes[0].generalSettings

  return (
    <>
      <Global styles={GlobalStyles} />
      <Header
        siteTitle={wpSettingsInfo.title}
        wpSourceUrl={wpSettingsInfo.url}
      />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
