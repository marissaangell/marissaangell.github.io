import * as React from "react"
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Heading from '../components/heading'
import CardGrid from '../components/cardGrid'

const pageTitle = 'Projects'

const cardsArray = [
  {
    title: 'Competitive exchange rates',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    date: '2018',
    tags: ['Snippet', 'Rails', 'Info']
  },
  {
    title: 'No hidden fees',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  	date: '2022',
  	tags: ['Snippet', 'Rails', 'Fees']
  },
  {
    title: 'Transfers are instant',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    date: '2019',
    tags: ['Transfers', 'Rails', 'Info']
  },
  {
    title: 'Mobile notifications',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    date: '2021',
    tags: ['Mobile', 'Info']
  },
]

const ProjectsPage = ({ data }) => {
	return (
		<Layout pageTitle={pageTitle}>
			<Heading text={pageTitle} />
			<div>
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
        }
        id
        slug
      }
    }
  }
`

export default ProjectsPage

export const Head = () => <title>{pageTitle}</title>