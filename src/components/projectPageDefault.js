import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from "@mdx-js/react"

import { ChevronLeftIcon } from '@heroicons/react/outline'

import Layout from './layout'
import Heading from './heading'
import ImgCarousel from './carousel'
import TwoColumn from './twoColumn'
import DescGrid from './descGrid'
import ProseWrapper from './proseWrapper'
import LinkButtonRow from './linkButtonRow'
import YoutubeEmbed from './youtubeEmbed'

const shortcodes = { ImgCarousel, TwoColumn, DescGrid, Heading, ProseWrapper, LinkButtonRow, YoutubeEmbed}


const ProjectPageDefault = ({ mdx }) => {
   return (
      <div className="mt-6 text-gray-400">

        {/* PROJECT HEADER */}
        <div>
          
          {/* Top 2-Column Section */}
          <div className={"max-w-2xl mx-auto grid grid-cols-1 gap-x-8 lg:max-w-7xl lg:grid-cols-2 items-center"}>
            
            {/* Right Column (Media) */}
            <div className="peer empty:hidden">
              { mdx.frontmatter.projectMedia 
                 ? <MDXProvider components={shortcodes}>
	                 		<MDXRenderer>{mdx.frontmatter.projectMedia}</MDXRenderer>
	             			</MDXProvider >
                 : null
              }
            </div>

            {/* Left Column (Details) */}
            <div className="col-start-1 row-start-1 peer-empty:col-span-full lg:peer-empty:px-36">
              <ProseWrapper>
                <div className="text-4xl font-bold text-gray-200">{mdx.frontmatter.title}</div>
                
                <p>
                  { mdx.frontmatter.longDescription
                    ? mdx.frontmatter.longDescription
                    : mdx.frontmatter.description
                  }
                </p>

                { mdx.frontmatter.factoids 
                   ? <DescGrid descriptions={mdx.frontmatter.factoids}/>
                   : <></>
                }

                <div className="divider lg:hidden" />
              </ProseWrapper>
            </div>
          </div>

          {/* Itch.io Embed */}
          { mdx.frontmatter.itchEmbed
            ? <>
                <div className="divider py-4" />
                <div class="w-full flex justify-center no-prose">
                  <MDXRenderer>{mdx.frontmatter.itchEmbed}</MDXRenderer>
                </div>
              </>
            : <></> 
          }

          {/* Link Button Row */}
          { mdx.frontmatter.featuredLinks
            ? <>
                <div className="divider py-4" />
                <LinkButtonRow links={mdx.frontmatter.featuredLinks} />
              </>
            : <></> 
          }

          <div className="divider py-4" />
        </div>


        {/* PROJECT PROSE */}
        <div className="max-w-3xl mx-auto">
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>


      </div>
  )
}

export default ProjectPageDefault
