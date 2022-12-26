import React from "react"
import { graphql } from 'gatsby'

import Layout from 'layout'
import Heading from 'heading'
import CardGrid from 'cardGrid'

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
            category
            externalLinks {
              desc
              icon
              url
            }
            thumbnail {
              childImageSharp {
                gatsbyImageData(height: 450, width: 630, placeholder: BLURRED, transformOptions: {cropFocus: CENTER})
              }
            }
          }
        }
      }
    }
  }
`

export default VFXPage

export const Head = () => <title>{pageTitle}</title>