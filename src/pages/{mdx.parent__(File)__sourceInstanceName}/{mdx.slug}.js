import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXProvider, MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../../components/layout'
import Heading from '../../components/heading'


const MdxPage = ({ data }) => {
   return (
    <Layout pageTitle={data.mdx.frontmatter.title}>

      <Link to={"/" + data.mdx.parent.sourceInstanceName}>Back</Link>
      <Heading text={data.mdx.frontmatter.title}/>
      <p>Posted: {data.mdx.frontmatter.date}</p>

      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      
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
        }
      }
    }
  }
`

export default MdxPage
