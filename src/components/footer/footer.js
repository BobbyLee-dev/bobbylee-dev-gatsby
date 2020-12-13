import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

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
                    absolutePath
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
  console.log(socialArray)
  return (
    <>
      {socialArray.map(item => item.icon.localFile.absolutePath)}
      <footer>© {new Date().getFullYear()} - Bobby Lee</footer>
    </>
  )
}

export default Footer
