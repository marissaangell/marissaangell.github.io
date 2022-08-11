import * as React from "react"
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Heading from '../components/heading'
import CardGrid from '../components/cardGrid'

const pageTitle = 'Projects'

const ProjectsPage = ({ data }) => {
	return (
		<Layout pageTitle={pageTitle} navCurrent="/projects">
			<Heading text={pageTitle} />
			<div>
        <div className="divider" />
				<CardGrid cards={data.allMdx.nodes}/>
			</div>
		</Layout>
	)
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date
          title
          description
          tags
          languages
        }
        id
        slug
      }
    }
  }
`

export default ProjectsPage

export const Head = () => <title>{pageTitle}</title>