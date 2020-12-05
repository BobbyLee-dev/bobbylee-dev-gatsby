import { Link } from 'gatsby'
import React from 'react'
import { Location } from '@reach/router'

const SiteTitleEl = ({ siteTitle, location }) => {
  return (
    <Location>
      {({ location }) => {
        if (location.pathname === '/') {
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
      }}
    </Location>
  )
}

export default SiteTitleEl
