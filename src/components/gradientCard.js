//Source: https://www.hyperui.dev/components/marketing/cards

import * as React from 'react'
import { Link } from 'gatsby'

const languageGradients = {
	'C#': 'from-red-400 to-red-600',
	'Kotlin': 'from-green-400 to-green-600',
	'Python': 'from-yellow-400 to-yellow-600'
}
const defaultGradient = 'from-gray-400 to-gray-500'


const GradientCard = ({ details, url, useGradient }) => {

	const gradientColor = (useGradient && details.languages[0] in languageGradients) ? languageGradients[details.languages[0]] : defaultGradient

  return (
    <article className={"p-1 h-full self-stretch shadow-xl rounded-2xl bg-gradient-to-r " + gradientColor}>
		  <div className="flex flex-col justify-between h-full p-4 bg-neutral sm:p-5 rounded-xl">
		    
		    <div className="flex flex-row justify-between w-full">
		      <p className="text-xs font-medium text-gray-500 mb-2">
		        {details.date}
		      </p>
		      <div className="text-xs flex flex-row gap-2">
			      { details.externalLinks
			      	? details.externalLinks.map((link) => (
									<a id={link.url} href={link.url} className="link link-hover">
										{link.desc}
									</a>
		        		))
	        		: <></> }

		      </div>
	      </div>


	      <div className="h-full">
		    	<Link to={`/projects/${url}`} className="group">
		      	<h5 className="text-xl font-bold text-white group-hover:underline">
		        	{details.title}
	      		</h5>
		        <p className="mt-2 text-sm text-gray-400">
		          {details.description}
		        </p>
		      </Link>
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

export default GradientCard