import * as React from 'react'
import { graphql, Link } from 'gatsby'

import { ChevronLeftIcon } from '@heroicons/react/outline'

import Layout from 'layout'
import ProjectPageDefault from 'projectPageDefault'
import ProjectPageVFX from 'projectPageVFX'



function getPageLayout(data){
  if (data.mdx.frontmatter.pageLayout){
    switch(data.mdx.frontmatter.pageLayout){
      case 'media': return <ProjectPageVFX mdx={data.mdx}/>
      default:    return <ProjectPageDefault mdx={data.mdx}/>
    }
  }
}

const MdxPage = ({ data }) => {
   return (
    <Layout pageTitle={data.mdx.frontmatter.title}>

      {/*<Link to={"/" + data.mdx.parent.sourceInstanceName} className="hover:bg-gray-700 hover:text-gray-300 pr-4 pl-2 py-1 rounded-md text-sm md:text-md font-semibold border-2 border-current inline-block">
        <ChevronLeftIcon className="h-4 w-4 -mt-1 inline-block" aria-hidden="true" />
        <p className="inline-block">Back</p>
      </Link>*/}

      {getPageLayout(data)}
      
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
        description
        longDescription
        category
        pageLayout
        factoids {
          heading
          body
        }
        featuredLinks {
          url
          icon
          text
        }
        projectMedia
        itchEmbed
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
