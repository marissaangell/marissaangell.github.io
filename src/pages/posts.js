import * as React from "react"
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Heading from '../components/heading'

const pageTitle = 'Posts'

const PostsPage = ({ data }) => {
	return (
		<Layout pageTitle={pageTitle} navCurrent="/posts">
			<Heading text={pageTitle} />
			<div>
        <ul className="pl-6 list-disc">
          {data.allFile.nodes.map((entry) => (
            <li key={entry.childMdx.id}>
              [{entry.childMdx.frontmatter.date}] {entry.childMdx.frontmatter.title}
            </li>
          ))}
        </ul>
			</div>
		</Layout>
	)
}

export const query = graphql`
  query AllPostQuery {
    allFile(filter: {sourceInstanceName: {eq: "posts"}}, sort: {fields: childrenMdx___frontmatter___date, order: DESC}) {
      nodes {
        sourceInstanceName
        childMdx {
          frontmatter {
            date(formatString: "YYYY")
            title
          }
          id
        }
      }
    }
  }
`

export default PostsPage

export const Head = () => <title>{pageTitle}</title>