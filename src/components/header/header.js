import { useStaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import SiteTitleEl from './site-title'

const Header = ({ siteTitle, siteUrl }) => {
  const wpData = useStaticQuery(graphql`
    query {
      wpMenu(name: { eq: "Main" }) {
        menuItems {
          nodes {
            url
            label
            id
          }
        }
      }
    }
  `)

  const menuItems = wpData.wpMenu.menuItems.nodes.map(item => ({
    label: item.label,
    url: item.url,
    id: item.id,
  }))

  // const siteTitleTag = window.location.pathname === '/' ? 'h1' : 'div'

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <SiteTitleEl siteTitle={siteTitle} />
        <nav>
          {menuItems
            .filter(item => item.label !== 'Home')
            .map(item => (
              <Link to={item.url} key={item.id} style={{ color: `#fff` }}>
                {item.label}
              </Link>
            ))}
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
