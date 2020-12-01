import styled from '@emotion/styled'
import { useStaticQuery, graphql, Link } from 'gatsby'
import React from 'react'

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

  const Menu = styled.nav`
    ul {
      display: flex;
      list-style: none;
      li {
        margin: 10px;
        a {
          text-decoration: none;
        }
      }
    }
  `

  return (
    <Menu>
      <ul>
        {menuItems.map(item => (
          <li>
            <Link to={item.url.replace(wpSourceUrl, '')} key={item.id}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </Menu>
  )
}

export default MainNav
