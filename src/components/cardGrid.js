import * as React from "react"

import GradientCard from './gradientCard'
import GradientCardFull from './gradientCardFull'

const CardGrid = ({ cards }) => {
	return (
	  <div>
	      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-8">
	        { cards.map((entry) => (
				<div key={entry.id} className="relative">
					<GradientCard details={entry.frontmatter} slug={entry.slug} />
				</div>
	        ))}
        	</dl>

	        <div className="divider" />

        <dl className="space-y-10 mt-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-8">
	        { cards.map((entry) => (
				<div key={entry.id} className="relative">
					<GradientCardFull details={entry.frontmatter} slug={entry.slug} />
				</div>
	        ))}
     	</dl>
      </div>
	)
}

export default CardGrid
