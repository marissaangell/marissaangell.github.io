import * as React from "react"

import Layout from '../components/layout'
import Carousel from '../components/carousel'
import CardGrid from '../components/cardGrid'

export default function IndexPage(){
	return (
		<Layout pageTitle="Home">
			<div>
				<Carousel />

			</div>
		</Layout>
	)
}
