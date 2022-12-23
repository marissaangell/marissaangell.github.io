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

        {/* PROJECT HEADER */}
        <div>
          {/* Top 2-Column Section */}
          <div className={"max-w-2xl mx-auto grid grid-cols-1 gap-x-8 lg:max-w-7xl lg:grid-cols-2 items-center"}>
            
            {/* Right Column (Media) */}
            <div className="peer empty:hidden">
              { data.mdx.frontmatter.projectMedia 
                 ? <MDXRenderer>{data.mdx.frontmatter.projectMedia}</MDXRenderer>
                 : null
              }
            </div>

            {/* Left Column (Details) */}
            <div className="col-start-1 row-start-1 peer-empty:col-span-full lg:peer-empty:px-36">
              <ProseWrapper>
                <div className="text-4xl font-bold text-gray-200">{data.mdx.frontmatter.title}</div>
                
                <p>
                  { data.mdx.frontmatter.longDescription
                    ? data.mdx.frontmatter.longDescription
                    : data.mdx.frontmatter.description
                  }
                </p>

                { data.mdx.frontmatter.factoids 
                   ? <DescGrid descriptions={data.mdx.frontmatter.factoids}/>
                   : <></>
                }

                <div className="divider lg:hidden" />
              </ProseWrapper>
            </div>
          </div>

          {/* ITCH.IO EMBED */}
          { data.mdx.frontmatter.itchEmbed
            ? <>
                <div className="divider py-4" />
                <div class="w-full flex justify-center no-prose">
                  <MDXRenderer>{data.mdx.frontmatter.itchEmbed}</MDXRenderer>
                </div>
              </>
            : <></> 
          }

          {/* LINK BUTTON ROW */}
          { data.mdx.frontmatter.featuredLinks
            ? <>
                <div className="divider py-4" />
                <LinkButtonRow links={data.mdx.frontmatter.featuredLinks} />
              </>
            : <></> 
          }

          <div className="divider py-4" />
        </div>


        {/* PROJECT PROSE */}
        <div className="max-w-3xl mx-auto">
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>


      </div>

      {/*{ data.mdx.frontmatter.factoids 
         ? data.mdx.frontmatter.factoids.map((entry) => (
            <div key={entry.heading} className="relative self-stretch">
              {entry.heading}, {entry.body}
            </div>
          ))
         : <></>
      }


      { data.mdx.frontmatter.projectMedia 
         ? <MDXRenderer>{data.mdx.frontmatter.projectMedia}</MDXRenderer>
         : <></>
      }*/}
      
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
