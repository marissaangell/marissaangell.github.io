//Source: https://www.hyperui.dev/components/marketing/cards

import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { LinkExternalIcon } from '@primer/octicons-react'

function getGradientColor(color){
	switch(color){
		case 'red': 		 			return 'from-red-400 to-red-600'
		case 'green': 				return 'from-green-400 to-green-600'
		case 'yellow': 				return 'from-yellow-400 to-yellow-600'
		case 'blue': 					return 'from-blue-400 to-blue-600'
		case 'orange': 		 		return 'from-orange-400 to-orange-600'
		case 'pink': 		 			return 'from-pink-500 to-pink-700'
		default: 			 				return 'from-gray-400 to-gray-500'
	}
}

function getExtLinkIcon(linkTo){
	return <LinkExternalIcon size={16}/>
}


const VFXCard = ({ details, url, useGradient=false }) => {

  let coverImage = getImage(details.thumbnail?.childImageSharp?.gatsbyImageData)

	const gradientColor = (useGradient) ? getGradientColor(details.languages[0])
																			: getGradientColor()

  return (
    <article className={"p-1 h-full shadow-xl rounded-2xl bg-gradient-to-r " + gradientColor}>
		  <div className="flex flex-col justify-between h-full p-4 bg-neutral sm:p-5 rounded-xl">
		    
		    {/*<div className="flex flex-row justify-between w-full">
		      <p className="text-xs font-medium text-gray-500 mb-2">
		        {details.date}
		      </p>
		      <div className="text-xs flex flex-row gap-2">
			      { details.externalLinks
			      	? details.externalLinks.map((link) => (
									<a id={link.url} href={link.url} key={link.url} className="hover:text-gray-200">
										{getExtLinkIcon(link.icon)}										
									</a>
		        		))
	        		: <></> 
        		}
		      </div>
	      </div>*/}


	      <div className="h-full">
		    	<Link to={`/${url}`} className="group">
		    		<div className="w-full flex justify-between ">
			      	<h5 className="text-xl font-bold text-white group-hover:underline inline-block">
			        	{details.title}
		      		</h5>
		      		<p className="ml-1.5 text-s font-medium text-gray-500 place-self-end inline-block">
				        {details.date}
				      </p>
	      		</div>

		        <div className="flex flex-shrink max-h-[200px]">
		          <GatsbyImage image={coverImage} className="mt-3 mb-1 rounded-lg" />
	        	</div>
		      </Link>
	      </div>

	      <div className="flex items-center align-self-end justify-between mt-2">
	        <p className={"text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r " + gradientColor}>
	          {details.languages[0]}
	        </p>
	        <ul className="flex space-x-1">
	        	{ details.tags.map((tag) => (
							<li key={tag} className="inline-block rounded-full text-gray-100 text-xs font-normal px-2 py-1 bg-gray-700">
		            {tag}
		          </li>
		        )) }
	        </ul>
	      </div>

		    
		  </div>
		</article>

  )
}

export default VFXCard