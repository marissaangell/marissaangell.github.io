import React from "react"
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Heading from '../components/heading'
import CardGrid from '../components/cardGrid'

const pageTitle = 'VFX Projects'

const VFXPage = ({ data }) => {

	return (
		<Layout pageTitle={pageTitle} navCurrent="/vfx">
			<Heading text={pageTitle} />

      {/* Card Grid */}
			<div className="-mt-4">
        <div className="divider" />
				<CardGrid cards={data.allFile.nodes} />
			</div>

		</Layout>
	)
}

export const query = graphql`
  query AllProjectQuery {
    allFile(filter: {sourceInstanceName: {eq: "vfx"}, extension: {eq: "mdx"}}, sort: {fields: childrenMdx___frontmatter___date, order: DESC}) {
      nodes {
        sourceInstanceName
        name
        childMdx {
          frontmatter {
            date(formatString: "YYYY")
            title
            tags
            description
            languages
            externalLinks {
              desc
              icon
              url
            }
          }
        }
      }
    }
  }
`

export default VFXPage

export const Head = () => <title>{pageTitle}</title>