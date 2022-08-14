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
			</div>
		</Layout>
	)
}

export const query = graphql`
  query AllProjectQuery {
    allFile(filter: {sourceInstanceName: {eq: "projects"}, extension: {eq: "mdx"}}, sort: {fields: childrenMdx___frontmatter___date, order: DESC}) {
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
          }
        }
      }
    }
  }
`

export default ProjectsPage

export const Head = () => <title>{pageTitle}</title>