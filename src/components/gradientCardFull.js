//Source: https://www.hyperui.dev/components/marketing/cards

import * as React from 'react'
import { Link } from 'gatsby'

const languageGradients = {
	'C#': 'from-red-400 to-red-600',
	'Kotlin': 'from-green-400 to-green-600'
}
const defaultGradient = 'from-gray-400 to-gray-500'


const GradientCardFull = ({ details, slug }) => {

	const gradientColor = details.languages[0] in languageGradients ? languageGradients[details.languages[0]] : defaultGradient

  return (
    <article className={"p-1 h-full self-stretch shadow-xl rounded-2xl bg-gradient-to-r " + gradientColor}>
		  <div className="flex flex-col justify-between h-full p-4 bg-neutral sm:p-5 rounded-xl">
		    
		    <div className="">
		      <p className="text-xs font-medium text-gray-500 mb-2">
		        {details.date}
		      </p>
		      <h5 className="text-xl font-bold text-white link link-hover">
		      	<Link to={`/projects/${slug}`}>
		        	{details.title}
	        	</Link>
		      </h5>
		      <div className="mt-2">
		        <p className="text-sm text-gray-400">
		          {details.description}
		        </p>
		      </div>
	      </div>

	      <div className="flex items-center align-self-end justify-between mt-4">
	        <p className={"text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r " + gradientColor}>
	          {details.languages[0]}
	        </p>
	        <ul className="flex space-x-1">
	        	{ details.tags.map((tag) => (
							<li key={tag} className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-700">
		            {tag}
		          </li>
		        )) }
	        </ul>
	      </div>

		    
		  </div>
		</article>

  )
}

export default GradientCardFull