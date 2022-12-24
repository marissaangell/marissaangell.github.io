import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Navbar from './navbar'
import Footer from './footer'


const Layout = ({ pageTitle, navCurrent, children }) => {
  
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

      <Navbar className="fixed" current={navCurrent} />

      <main className="md:max-w-3xl lg:max-w-5xl xl:max-w-7xl max-w-lg 2xl:max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8  pt-20 pb-12 grow shrink-0">
        {children}
      </main>

      <Footer />

    </div>
  )
}

export default Layout