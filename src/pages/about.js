import * as React from "react"

import Layout from '../components/layout'
import Heading from '../components/heading'

const pageTitle = 'About Me'

export default function AboutPage(){
	return (
		<Layout pageTitle={pageTitle} navCurrent="/about">
			<Heading text={pageTitle}/>
			<div>
				
			</div>
		</Layout>
	)
}

export const Head = () => <title>{pageTitle}</title>