import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Navbar from './navbar'
import Footer from './footer'


const Layout = ({ pageTitle, children }) => {
  
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="flex flex-col h-screen">
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>

      <Navbar className="fixed" />

      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-12 grow shrink-0">
        {children}
      </main>

      <Footer />

    </div>
  )
}

export default Layout