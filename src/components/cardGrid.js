import * as React from "react"

import GradientCard from './gradientCard'

const CardGrid = ({ cards, useGradient }) => {
	return (
	  <div>
        <dl className="space-y-4 mt-4 md:mt-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 items-stretch">
	        { cards.map((entry) => (
	        	<div className="relative self-stretch h-full">
	        		{ entry.childMdx 
					? <div key={entry.childMdx.id} className="relative self-stretch h-full">
						<GradientCard 
							details={entry.childMdx.frontmatter} 
							url={entry.name} 
							useGradient={useGradient} 
							/>
						</div>
					: null
				}
				</div>
	        ))}
     	</dl>
      </div>
	)
}

export default CardGrid
