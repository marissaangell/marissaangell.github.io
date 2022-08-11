import * as React from "react"

import Layout from '../components/layout'
import Heading from '../components/heading'

const pageTitle = 'Contact'

export default function ContactPage(){
	return (
		<Layout pageTitle={pageTitle} navCurrent="/contact">
			<Heading text={pageTitle}/>
			<div>
				
			</div>
		</Layout>
	)
}

export const Head = () => <title>{pageTitle}</title>