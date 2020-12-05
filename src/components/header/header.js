import PropTypes from 'prop-types'
import React from 'react'
import SiteTitleEl from './site-title'
import styled from '@emotion/styled'
import MainNav from './main-nav'

const Header = styled.header`
  background-color: #24292e;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  @media (min-width: 1400px) {
    padding: 12px 40px;
  }
  @media (min-width: 2000px) {
    padding: 12px 80px;
  }
  .site-title {
    z-index: 15;
    position: relative;
    font-weight: bold;
    margin: 0;
    font-size: 22px;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    @media (min-width: 768px) {
      font-size: 30px;
    }
    @media (min-width: 1400px) {
      font-size: 40px;
    }
    a {
      color: #fff;
    }
  }
`

const SiteHeader = ({ siteTitle, wpSourceUrl }) => {
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
