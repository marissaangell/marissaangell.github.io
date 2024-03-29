//Source: https://www.hyperui.dev/components/marketing/cards

import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { MarkGithubIcon, LinkExternalIcon } from '@primer/octicons-react'

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
	switch(linkTo){
		case 'Github': 	return <MarkGithubIcon size={16}/>
		case 'Itch': 		return <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 20 230 198.92646" className="inline-block fill-current h-full -mb-[2px]">
                        			<path d="M28.832 1.228C19.188 6.954.186 28.785.004 34.51v9.478c0 12.014 11.23 22.572 21.424 22.572 12.24 0 22.44-10.146 22.442-22.187 0 12.04 9.85 22.187 22.093 22.187 12.242 0 21.776-10.146 21.776-22.187 0 12.04 10.47 22.187 22.71 22.187h.22c12.24 0 22.72-10.146 22.72-22.187 0 12.04 9.53 22.187 21.77 22.187s22.09-10.146 22.09-22.187c0 12.04 10.2 22.187 22.44 22.187 10.19 0 21.42-10.557 21.42-22.572V34.51c-.19-5.725-19.19-27.556-28.83-33.282-29.97-1.053-50.76-1.234-81.73-1.23C79.59 0 37.36.483 28.83 1.228zm58.753 59.674c-1.166 2.046-2.627 3.903-4.308 5.546-4.62 4.52-10.956 7.32-17.94 7.32-6.985 0-13.356-2.8-17.976-7.322-1.67-1.64-2.94-3.394-4.11-5.436v.004c-1.16 2.046-2.79 3.798-4.46 5.44-4.62 4.52-10.99 7.317-17.97 7.317-.84 0-1.71-.23-2.42-.47-.982 10.25-1.4 20.04-1.545 27.19v.04c-.02 3.63-.035 6.61-.054 10.75.19 21.51-2.13 69.7 9.48 81.54 17.99 4.2 51.094 6.11 84.31 6.12h.003c33.214-.01 66.32-1.92 84.31-6.11 11.61-11.843 9.29-60.033 9.48-81.536-.017-4.14-.034-7.122-.053-10.75v-.04c-.15-7.142-.565-16.935-1.55-27.183-.71.24-1.587.473-2.43.473-6.98 0-13.354-2.797-17.975-7.316-1.675-1.644-3.3-3.396-4.463-5.44l-.005-.006c-1.166 2.04-2.437 3.797-4.112 5.436-4.62 4.522-10.99 7.322-17.973 7.322s-13.32-2.8-17.94-7.32c-1.68-1.644-3.14-3.5-4.31-5.547-1.163 2.04-2.59 3.907-4.266 5.546-4.62 4.52-10.99 7.32-17.98 7.32-.244 0-.49-.01-.73-.02h-.008c-.243.01-.486.02-.73.02-6.986 0-13.357-2.8-17.978-7.32-1.678-1.64-3.106-3.503-4.27-5.544zM69.123 84.775l-.002.008h.02c7.31.016 13.81 0 21.85 8.783 6.34-.663 12.95-.996 19.58-.985h.01c6.63-.01 13.24.33 19.58.99 8.05-8.78 14.54-8.76 21.85-8.78h.02v-.01c3.458 0 17.27 0 26.9 27.04l10.347 37.1c7.665 27.6-2.453 28.28-15.073 28.3-18.72-.69-29.08-14.29-29.08-27.88-10.36 1.7-22.45 2.55-34.535 2.55h-.005c-12.086 0-24.172-.85-34.53-2.55 0 13.59-10.36 27.18-29.078 27.88-12.62-.02-22.74-.7-15.073-28.29l10.34-37.1c9.63-27.04 23.45-27.04 26.9-27.04zm41.44 21.25v.007c-.017.017-19.702 18.096-23.24 24.526l12.89-.516v11.24c0 .527 5.174.313 10.35.074h.007c5.177.24 10.35.453 10.35-.073v-11.24l12.89.514c-3.538-6.43-23.24-24.525-23.24-24.525v-.006l-.002.002z"/>
                      			</svg>
		default: 				return <LinkExternalIcon size={16}/>
	}
}


const GameCard = ({ details, url, useGradient=false }) => {

  let coverImage = getImage(details.thumbnail?.childImageSharp?.gatsbyImageData)

	const gradientColor = (useGradient) ? getGradientColor(details.languages[0])
																			: getGradientColor()

  return (
    <article className={"p-1 h-full shadow-xl rounded-2xl bg-gradient-to-r " + gradientColor}>
		  <div className="flex flex-col justify-between h-full px-4 py-3 bg-neutral sm:px-5 sm:py-4 rounded-xl">
		    
		    <div className="w-full h-full">
			    <div className="flex flex-row justify-between w-full ">

			    	<Link to={`/${url}`} className="group h-full justify-start">
			    	
			      	<h5 className="text-xl font-bold text-white group-hover:underline inline-block ">
			        	{details.title}
		      		</h5>
		      		<p className="ml-1.5 text-s font-medium text-gray-500 align-self-end inline-block">
				        ({details.date})
				      </p>
			        {/*<p className="mt-2 text-sm text-gray-400">
			          {details.description}
			        </p>*/}
			      </Link>
			      
			      <div className="text-xs flex flex-row gap-2">
				      { details.externalLinks
				      	? details.externalLinks.map((link) => (
										<a id={link.url} href={link.url} key={link.url} className="hover:text-gray-200 inline-block place-self-center mt-1">
											{getExtLinkIcon(link.icon)}										
										</a>
			        		))
		        		: <></> 
	        		}
			      </div>
		      </div>

		      <Link to={`/${url}`} className="flex flex-shrink mx-10 md:mx-0">
	          <GatsbyImage image={coverImage} className="mt-3 mb-1 rounded-xl" />
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

export default GameCard