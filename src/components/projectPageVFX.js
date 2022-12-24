import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from "@mdx-js/react"

import { ChevronLeftIcon } from '@heroicons/react/outline'

import Heading from './heading'
import ImgCarousel from './carousel'
import TwoColumn from './twoColumn'
import DescGrid from './descGrid'
import ProseWrapper from './proseWrapper'
import LinkButtonRow from './linkButtonRow'
import YoutubeEmbed from './youtubeEmbed'

const shortcodes = { ImgCarousel, TwoColumn, DescGrid, Heading, ProseWrapper, LinkButtonRow, YoutubeEmbed}


const ProjectPageVFX = ({ mdx }) => {
   return (
      <div className="mt-6 text-gray-400">

        {/* PROJECT HEADER */}
        <div>
          
          {/* Top 2-Column Section */}
          <div className={"max-w-2xl mx-auto grid grid-cols-1 gap-x-8 lg:max-w-7xl lg:grid-cols-3"}>
            
            {/* Right Column (Media) */}
            <div className="peer empty:hidden col-span-2">
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
                   ? <div>
                        <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 sm:gap-y-6 lg:gap-x-8">
                            {mdx.frontmatter.factoids.map((entry) => (
                                <div key={entry.heading} className="border-t border-gray-200 pt-4">
                                  <dt className="ml-4 font-medium text-gray-300">{entry.heading}</dt>
                                  <dd className="mx-4 mt-2 text-sm text-gray-400">{entry.body}</dd>
                                </div>
                            ))}
                        </dl>
                      </div>
                   : <></>
                }

                <div className="divider lg:hidden" />
              </ProseWrapper>
            </div>
          </div>

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

export default ProjectPageVFX
