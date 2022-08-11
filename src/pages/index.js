import * as React from "react"

import Layout from '../components/layout'
import Carousel from '../components/carousel'


export default function IndexPage(){
	return (
		<Layout pageTitle="Home">
			<div>
				<Carousel />

			</div>
		</Layout>
	)
}
