import React from "react"
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Heading from '../components/heading'
import CardGrid from '../components/cardGrid'

const pageTitle = 'Games Projects'

const GamesPage = ({ data }) => {

	return (
		<Layout pageTitle={pageTitle} navCurrent="/games">
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
    allFile(filter: {sourceInstanceName: {eq: "games"}, extension: {eq: "mdx"}}, sort: {fields: childrenMdx___frontmatter___date, order: DESC}) {
      nodes {
        sourceInstanceName
        name
        childMdx {
          frontmatter {
            date(formatString: "YYYY")
            title
            tags
            description
            category
            languages
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

export default GamesPage

export const Head = () => <title>{pageTitle}</title>