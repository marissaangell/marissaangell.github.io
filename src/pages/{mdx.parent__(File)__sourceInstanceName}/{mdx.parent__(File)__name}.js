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
import YoutubeEmbed from '../../components/youtubeEmbed'

import ProjectPageDefault from '../../components/projectPageDefault'
import ProjectPageVFX from '../../components/projectPageVFX'

const shortcodes = { ImgCarousel, TwoColumn, DescGrid, Heading, ProseWrapper, LinkButtonRow, YoutubeEmbed}


function getPageLayout(data){
  switch(data.mdx.frontmatter.category){
    case 'vfx': return <ProjectPageVFX mdx={data.mdx}/>
    default:    return <ProjectPageDefault mdx={data.mdx}/>
  }
}

const MdxPage = ({ data }) => {
   return (
    <Layout pageTitle={data.mdx.frontmatter.title}>

      <Link to={"/" + data.mdx.parent.sourceInstanceName} >
        <ChevronLeftIcon className="h-4 w-4 inline-block" aria-hidden="true" />
        <p className="inline-block">Back</p>
      </Link>

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
