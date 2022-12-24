import * as React from "react"

import GradientCard from './gradientCard'
import GradientCardTwo from './gradientCardTwo'

function getCard(cardInfo, useGradient){
	switch(cardInfo.childMdx.frontmatter.category){
		case 'games': return <GradientCardTwo 
														details={cardInfo.childMdx.frontmatter} 
														slug='Test'
													/>
		default:			return <GradientCard 
														details={cardInfo.childMdx?.frontmatter} 
														url={cardInfo.sourceInstanceName + "/" + cardInfo.name} 
														useGradient={useGradient} 
													/>
	}
}

const CardGrid = ({ cards, useGradient }) => {
	return (
	  <div>
      <dl className="space-y-4 mt-4 md:mt-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 items-stretch">
	        
        { cards.map((entry) => (
        	<div className="relative self-stretch h-full">
						{ getCard(entry, useGradient)}
					</div>
        ))}

     	</dl>
    </div>
	)
}

export default CardGrid
