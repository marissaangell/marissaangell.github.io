import React, { useState } from "react"
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Heading from '../components/heading'
import CardGrid from '../components/cardGrid'

const pageTitle = 'Projects'

const ProjectsPage = ({ data }) => {

  const [isToggled, setIsToggled] = useState(true);
  const onToggle = () => setIsToggled(!isToggled);

	return (
		<Layout pageTitle={pageTitle} navCurrent="/projects">
			<Heading text={pageTitle} />

      {/* Color Toggle */}
      <div className="flex justify-end -mt-10">
        <span className="mr-3 text-sm font-semibold text-gray-900 dark:text-gray-300">Color Coding</span>

        <label className="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="" id="checked-toggle" className="sr-only peer" onChange={onToggle} checked={isToggled} />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>

      {/* Card Grid */}
			<div>
        <div className="divider" />
				<CardGrid cards={data.allFile.nodes} useGradient={isToggled} />
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

export default ProjectsPage

export const Head = () => <title>{pageTitle}</title>