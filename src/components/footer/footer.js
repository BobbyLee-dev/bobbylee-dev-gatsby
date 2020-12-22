import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import SVG from 'react-inlinesvg'

const Footer = () => {
  const socialQuery = useStaticQuery(graphql`
    query {
      allWp {
        nodes {
          siteSettings {
            siteSettings {
              socialItems {
                icon {
                  localFile {
                    publicURL
                    id
                  }
                }
                link
              }
            }
          }
        }
      }
    }
  `)
  const socialArray =
    socialQuery.allWp.nodes[0].siteSettings.siteSettings.socialItems
  return (
    <SiteFooter>
      <div className="f-social">
        {socialArray.map(item => {
          return (
            <a
              href={item.link}
              target="_blank"
              rel="nofollow noopener noreferrer"
              key={item.icon.localFile.id}
            >
              <SVG src={item.icon.localFile.publicURL} />
            </a>
          )
        })}
      </div>
      <div>© {new Date().getFullYear()} - Bobby Lee</div>
    </SiteFooter>
  )
}

export default Footer

const SiteFooter = styled.footer`
  background-color: var(--primaryColor);
  color: var(--lightColor);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  .f-social {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    @media (min-width: 768px) {
      margin-bottom: 0;
    }
    a {
      padding: 5px;
      margin: 5px;
      line-height: 100%;
      display: flex;
      align-items: center;
      &::first-of-type {
        margin-left: 0;
      }
      svg {
        height: 30px;
        width: auto;
        path {
          fill: var(--lightColor);
          fill: var(--lightColor);
        }
      }
    }
  }
`
