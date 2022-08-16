import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from "@mdx-js/react"

import { ChevronLeftIcon } from '@heroicons/react/outline'

import Layout from '../../components/layout'

import Heading from '../../components/heading'
import ImgCarousel from '../../components/carousel'
import TwoColumn from '../../components/twoColumn'
import DescGrid from '../../components/descGrid'
import ProseWrapper from '../../components/proseWrapper'
import LinkButtonRow from '../../components/linkButtonRow'

const shortcodes = { ImgCarousel, TwoColumn, DescGrid, Heading, ProseWrapper, LinkButtonRow}


const MdxPage = ({ data }) => {
   return (
    <Layout pageTitle={data.mdx.frontmatter.title}>

      {/*<Link to={"/" + data.mdx.parent.sourceInstanceName} >
        <ChevronLeftIcon className="h-4 w-4 inline-block" aria-hidden="true" />
        <p className="inline-block">Back</p>
      </Link>*/}
      {/*<Heading text={data.mdx.frontmatter.title}/>
      <p>Posted: {data.mdx.frontmatter.date}</p>*/}

      <div className="mt-6 text-gray-400">
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
      
    </Layout>
  )
}

export const query = graphql`
  query MdxQuery($id: String!) {
    mdx(id: {eq: $id}) {
      id
      body
      frontmatter {
        tags
        languages
        date
        title
      }
      parent {
        ... on File {
          sourceInstanceName
          name
        }
      }
    }
  }
`

export default MdxPage
