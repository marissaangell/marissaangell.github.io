import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { SparklesIcon } from '@heroicons/react/outline'

import Layout from '../components/layout'
import CardGrid from '../components/cardGrid'

import UndrawProgrammer from './../assets/undraw_programmer.svg'

const IndexPage = ({ data }) => {
	return (
		<Layout pageTitle="Home">
			<div className="max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
				<div className="hero bg-base-100 flex -mt-4">
				  <div className="hero-content max-w-md md:max-w-7xl flex-col-reverse lg:flex-row lg:flex-grow lg:place-content-around mx-auto md:-mx-4">
				    
				    <div className="sm:flex-grow mt-4 mx-auto">
				      <h1 className="text-3xl md:text-5xl font-bold text-gray-300 text-center md:text-left">Hi! I'm Marissa<SparklesIcon className="inline-block h-8 w-8 md:h-12 md:w-12 pb-2 md:ml-2"/></h1>
				      <div className="mx-auto px-6 md:px-0 md:flex-grow">
					      <p className="text-lg md:text-2xl py-6 max-w-prose">I'm a software developer and game dev with experience in a wide range of technical areas.</p>
					      <p className="text-lg md:text-2xl pb-8 max-w-prose">From robotics to computer graphics, 3D modelling to machine learning - this site is a showcase of the things I've been up to!</p>
					      <div className="w-full text-center md:text-left">
					      	<Link to="/about" className="hover:bg-gray-700 hover:text-gray-300 px-4 py-2 rounded-md text-md md:text-lg font-semibold border-2 border-current inline-block mx-auto">
										More About Me
									</Link>
								</div>			      
							</div>
				    </div>

				    <div className="shadow-2xl rounded-full mx-24 lg:mx-20">
				  		<img src={UndrawProgrammer} height="300" width="300" className="lg:max-w-3xl" alt='Vector art of a woman sitting in front of a computer.'/>
				  	</div>

				  </div>
				</div>

				<div className="divider"/>

				<div>
					<div className="w-full flex justify-between">
						<h1 className="text-2xl md:text-3xl font-bold text-gray-300 text-left mb-2 md:mb-0">Recent Software Projects</h1>
						<Link to="/coding" className="block hover:bg-gray-700 hover:text-gray-300 px-4 py-2 rounded-md text-sm font-semibold border-2 border-current">
							View All >
						</Link>
					</div>
					<CardGrid cards={data.allFile.group[0].nodes} />
				</div>

				<div className="divider"/>

				<div>
					<div className="w-full flex justify-between">
						<h1 className="text-2xl md:text-3xl font-bold text-gray-300 text-left mb-2 md:mb-0">Recent Games</h1>
						<Link to="/games" className="hover:bg-gray-700 hover:text-gray-300 px-4 py-2 rounded-md text-sm font-semibold border-2 border-current">
							View All >
						</Link>
					</div>
					<CardGrid cards={data.allFile.group[1].nodes} />

				</div>

				<div className="divider"/>

				{/*<div>
					<div className="w-full flex justify-between">
						<h1 className="text-3xl font-bold text-gray-300 text-center md:text-left">Recent VFX Work</h1>
						<Link to="/games" className="hover:bg-gray-700 hover:text-gray-300 px-4 py-2 rounded-md text-sm font-semibold border-2 border-current">
							All VFX
						</Link>
					</div>
					<CardGrid cards={data.allFile.group[2].nodes} />
				</div>*/}

			</div>
		</Layout>
	)
}

export const query = graphql`
  query RecentMdxQuery {
	  allFile(
	    filter: {sourceInstanceName: {in: ["coding", "games", "vfx"]}}
	    sort: {fields: childrenMdx___frontmatter___date, order: DESC}
	  ) {
	    group(field: sourceInstanceName, limit: 3) {
	      nodes {
	      	name
	        sourceInstanceName
	        childMdx {
        	  id
	          frontmatter {
	            date(formatString: "YYYY")
	            title
	            category
	            tags
	            description
	            languages
	            externalLinks {
	              desc
	              icon
	              url
	            }
	          }
	        }
	      }
	    }
	  }
	}

`

export default IndexPage
