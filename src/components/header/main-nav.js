import styled from '@emotion/styled'
import { useStaticQuery, graphql, Link } from 'gatsby'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SubMenuButton from './sub-menu-button'
import { useSpring, animated } from 'react-spring'

const NavBar = styled(animated.nav)`
  @media (min-width: 768px) {
  }
`

const MainMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 40px;
  @media (max-width: 767px) {
    background-color: blue;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: none;
    padding-top: 100px;
    z-index: 11;
  }
  @media (min-width: 600px) {
    padding-left: 150px;
  }
  @media (min-width: 768px) {
    padding-left: 0;
    display: flex !important;
    justify-content: center;
    align-items: flex-end;
    opacity: 1 !important;
  }
  &.open {
    background-color: blue;
    display: flex;
    @media (max-width: 768px) {
      background: linear-gradient(90deg, #e3c6be 29%, #f7eeea 100%);
    }
  }
  li {
    margin: 0;
    display: flex;
    align-items: center;
    a {
      color: #fff;
      text-transform: uppercase;
      display: block;
      padding: 16px 20px;
      text-decoration: none;
      font-size: 11px;
      line-height: 100%;
      transition: opacity 0.2s;
      @media (min-width: 600px) {
        /* font-size: 30px; */
      }
      @media (min-width: 768px) {
        padding: 10px 20px;
        font-size: 11px;
      }
      /* &:hover {
        opacity: 0.7;
        text-decoration: underline;
      } */
    }
    &.has-sub-menu {
      position: relative;
      a {
        padding-right: 5px;
      }
      ul {
        list-style: none;
        background: #122738;
        position: absolute;
        margin: 0;
        border-top: 2px solid rgb(255, 120, 248);
        right: -120px;
        @media (min-width: 600px) {
          right: -175px;
        }
        @media (min-width: 768px) {
          top: 48px;
          right: 0;
        }
        @media (min-width: 1400px) {
          top: 51px;
        }
        li {
          a {
            padding: 10px 20px;
            width: max-content;
            display: block;
          }
        }
      }
    }
  }
`

const StyledBurger = styled.button`
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* width: 2rem; */
  height: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 15;

  &:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    display: none;
  }
  div {
    width: 19px;
    height: 2px;
    background: red;
    border-radius: 10px;
    position: relative;
    transform-origin: 2px;
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
            parentId
            childItems {
              nodes {
                url
                label
              }
            }
          }
        }
      }
    }
  `)

  // Sub Menu
  const [isSubMenuToggled, setSubMenuToggle] = useState(false)
  const revealSubMenu = useSpring({
    display: isSubMenuToggled ? 'block' : 'none',
    opacity: isSubMenuToggled ? '1' : '0',
  })

  // Mobile Nav
  const [isNavOpen, setNavOpen] = useState(false)
  const navAnimation = useSpring({
    opacity: isNavOpen ? `1` : `0`,
    display: isNavOpen ? `flex` : `none`,
  })

  // Hamburger
  const [isBurgerOpen, setBurgerOpen] = useState(false)
  const topBun = useSpring({
    transform: isBurgerOpen ? 'rotate(45deg)' : 'rotate(0deg)',
  })
  const meat = useSpring({
    transform: isBurgerOpen ? 'translateX(-20px)' : 'translateX(0px)',
    opacity: isBurgerOpen ? '0' : '1',
  })
  const bottomBun = useSpring({
    transform: isBurgerOpen ? 'rotate(-45deg)' : 'rotate(0deg)',
  })

  const menuItems = wpMainMenu.wpMenu.menuItems.nodes.map(item => ({
    label: item.label,
    url: item.url,
    id: item.id,
    hasParent: item.parentId,
    childItems: item.childItems.nodes,
  }))

  return (
    <NavBar>
      <StyledBurger
        isBurgerOpen={isBurgerOpen}
        setBurgerOpen={setBurgerOpen}
        onClick={() => {
          setBurgerOpen(!isBurgerOpen)
          setNavOpen(!isNavOpen)
        }}
      >
        <animated.div style={topBun} />
        <animated.div style={meat} />
        <animated.div style={bottomBun} />
      </StyledBurger>
      <MainMenu className={isNavOpen ? 'open' : ''} style={navAnimation}>
        {menuItems
          .filter(item => !item.hasParent)
          .map(item => (
            <li
              className={item.childItems.length > 0 ? 'has-sub-menu' : ''}
              key={item.id}
            >
              <Link
                onClick={() => {
                  setBurgerOpen(!isBurgerOpen)
                  setNavOpen(!isNavOpen)
                }}
                to={item.url.replace(wpSourceUrl, '')}
              >
                {item.label}
              </Link>
              {item.childItems.length > 0 && (
                <>
                  <SubMenuButton
                    setSubMenuToggle={setSubMenuToggle}
                    isSubMenuToggled={isSubMenuToggled}
                  />
                  <animated.ul style={Object.assign(revealSubMenu)}>
                    {item.childItems.map(childItem => {
                      return (
                        <li key={childItem.id}>
                          <Link to={childItem.url}>{childItem.label}</Link>
                        </li>
                      )
                    })}
                  </animated.ul>
                </>
              )}
            </li>
          ))}
      </MainMenu>
    </NavBar>
  )
}

Link.propTypes = {
  to: PropTypes.string,
}

export default MainNav
