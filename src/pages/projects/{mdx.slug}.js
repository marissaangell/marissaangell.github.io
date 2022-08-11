import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider, MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../../components/layout'


const ProjectPage = ({ data }) => {
   return (
    <Layout pageTitle={data.mdx.frontmatter.title}>

      <p>Posted: {data.mdx.frontmatter.date}</p>
      <p>{data.mdx.frontmatter.class}</p>

      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($id: String!) {
    mdx(id: {eq: $id}) {
      id
      body
      frontmatter {
        class
        date
        repoLink
        team
        title
      }
    }
  }
`

export default ProjectPage
