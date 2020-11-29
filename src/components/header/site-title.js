import { Link } from 'gatsby'
import React from 'react'

const SiteTitleEl = ({ siteTitle }) => {
  if (window.location.pathname === '/') {
    return (
      <h1 className="site-title">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>{' '}
      </h1>
    )
  } else {
    return (
      <div className="site-title">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>{' '}
      </div>
    )
  }
}

export default SiteTitleEl
