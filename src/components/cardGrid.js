import * as React from "react"

import GradientCardFull from './gradientCardFull'

const CardGrid = ({ cards }) => {
	return (
	  <div>
        <dl className="space-y-10 mt-6 sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-4 md:gap-8 items-stretch">
	        { cards.map((entry) => (
				<div key={entry.childMdx.id} className="relative self-stretch">
					<GradientCardFull details={entry.childMdx.frontmatter} slug={entry.childMdx.slug} />
				</div>
	        ))}
     	</dl>
      </div>
	)
}

export default CardGrid
