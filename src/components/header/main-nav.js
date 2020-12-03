import styled from '@emotion/styled'
import { useStaticQuery, graphql, Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

const Menu = styled.nav`
  ul {
    margin: 0;
    display: flex;
    list-style: none;
    li {
      margin: 10px;
      a {
        padding: 10px 20px;
        text-decoration: none;
        color: #fff;
        font-weight: bold;
      }
    }
  }
`

const MainNav = ({ wpSourceUrl }) => {
  const wpMainMenu = useStaticQuery(graphql`
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

  const menuItems = wpMainMenu.wpMenu.menuItems.nodes.map(item => ({
    label: item.label,
    url: item.url,
    id: item.id,
  }))
  return (
    <Menu>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <Link to={item.url.replace(wpSourceUrl, '')}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </Menu>
  )
}

Link.propTypes = {
  to: PropTypes.string,
}

export default MainNav
