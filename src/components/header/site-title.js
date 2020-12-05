import { Link } from 'gatsby'
import React from 'react'

const SiteTitleEl = ({ siteTitle }) => {
  const hasWindowAvailable = typeof window !== 'undefined'
  if (hasWindowAvailable) {
    if (window.location.pathname === '/') {
      return (
        <h1 className="site-title">
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            {`{ ${siteTitle} }`}
          </Link>{' '}
        </h1>
      )
    } else {
      return (
        <div className="site-title">
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            {`{ ${siteTitle} }`}
          </Link>{' '}
        </div>
      )
    }
  } else {
    return <h1>hi this didn't work</h1>
  }
}

export default SiteTitleEl
