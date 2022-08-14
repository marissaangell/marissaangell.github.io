import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from "@mdx-js/react"

import Layout from '../../components/layout'
import Heading from '../../components/heading'

import Carousel from '../../components/carousel'
import TwoColumn from '../../components/twoColumn'


const shortcodes = { Carousel, TwoColumn }

const MdxPage = ({ data }) => {
   return (
    <Layout pageTitle={data.mdx.frontmatter.title}>

      <Link to={"/" + data.mdx.parent.sourceInstanceName}>Back</Link>
      <Heading text={data.mdx.frontmatter.title}/>
      <p>Posted: {data.mdx.frontmatter.date}</p>

      <div className="mt-20 prose lg:prose-lg max-w-none">
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
        repoLink
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
