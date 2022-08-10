import * as React from "react"

import Layout from '../components/layout'
import Heading from '../components/heading'
import CardGrid from '../components/cardGrid'

const pageTitle = 'Projects'

export default function ProjectsPage(){
	return (
		<Layout pageTitle={pageTitle}>
			<Heading text={pageTitle} />
			<div>
				<CardGrid />
			</div>
		</Layout>
	)
}