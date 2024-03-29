/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import Footer from "./footer/footer"
import "./layout.scss"

import { useScrollElementWindow } from "../utils/hooks"

const Layout = ({ children, ref }) => {
  const headerRef = React.createRef()
  useScrollElementWindow(headerRef, { className: 'hidden' })
  return (
    <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Food blog' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header ref={headerRef} siteTitle={data.site.siteMetadata.title} />
        <div>
          <main 
            className="wrapper"
            style={{paddingTop: '7rem'}}
          >{children}</main>
          <Footer />
        </div>
      </>
    )}
  />
  )
}

export default Layout
