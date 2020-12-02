import PropTypes from 'prop-types'
import React from 'react'
import SiteTitleEl from './site-title'
import styled from '@emotion/styled'
import MainNav from './main-nav'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

const SiteHeader = ({ siteTitle, wpSourceUrl }) => {
  // const siteTitleTag = window.location.pathname === '/' ? 'h1' : 'div'

  return (
    <Header>
      <SiteTitleEl siteTitle={siteTitle} />
      <MainNav wpSourceUrl={wpSourceUrl} />
    </Header>
  )
}

SiteTitleEl.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

MainNav.propTypes = {
  wpSourceUrl: PropTypes.string.isRequired,
}

export default SiteHeader
