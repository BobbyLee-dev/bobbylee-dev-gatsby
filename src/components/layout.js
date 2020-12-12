import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import GlobalStyles from './global-styles'

import Header from './header/header'
import Footer from './footer/footer'
import './layout.css'
import { Global } from '@emotion/react'

const Layout = ({ children, page }) => {
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

      <main className={page + '-page'}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
