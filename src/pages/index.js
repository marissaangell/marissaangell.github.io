import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { SparklesIcon } from '@heroicons/react/outline'

import Layout from '../components/layout'
import CardGrid from '../components/cardGrid'

import UndrawProgrammer from './../assets/undraw_programmer.svg'
// import UndrawProudCoder from './../assets/undraw_proud_coder.svg'
// import UndrawStudying from './../assets/undraw_studying.svg'


const IndexPage = ({ data }) => {
	return (
		<Layout pageTitle="Home">
			<div>
				<div className="hero bg-base-100 lg:flex -mt-4">
				  <div className="hero-content flex-col-reverse lg:flex-row lg:flex-grow lg:place-content-around -mx-3">
				    
				    <div className="flex-grow mt-4">
				      <h1 className="text-5xl font-bold text-gray-300 text-center md:text-left">Hi! I'm Marissa<SparklesIcon className="inline-block h-12 w-12 pb-2 ml-2"/></h1>
				      <div className="text-xl flex-grow">
					      <p className="text-2xl py-6">I'm a software developer and game dev with experience in a wide range of technical areas.</p>
					      <p className="text-2xl pb-6">From robotics to computer graphics, 3D modelling to machine learning - this site is a showcase of the things I've been up to!</p>
				      </div>
				    </div>

				    <div className="shadow-2xl rounded-full mx-20">
				  		<img src={UndrawProgrammer} height="300" width="300" className="max-w-3xl "/>
				  	</div>
				  	
					{/*<div className="bg-gray-600 p-6 rounded-xl shadow-2xl">
						<img src={UndrawProudCoder} height="400" width="400" className="max-w-3xl"/>
					</div>*/}

					{/*<img src={UndrawStudying} height="300" width="300" className="max-w-3xl bg-base-100"/>*/}

				  </div>
				</div>

				<div className="divider"/>

				<div>
					<div className="w-full flex justify-between">
						<h1 className="text-3xl font-bold text-gray-300 text-center md:text-left">Recent Projects</h1>
						<Link to="/projects" className="hover:bg-gray-700 hover:text-gray-300 px-4 py-2 rounded-md text-sm font-semibold border-2 border-current">
							All Projects
						</Link>
					</div>
					<CardGrid cards={data.allFile.group[1].nodes} />
				</div>

				<div className="divider"/>

				{/*<div>
					<div className="w-full flex justify-between">
						<h1 className="text-3xl font-bold text-gray-300 text-center md:text-left">Latest Posts</h1>
						<Link to="/posts" className="hover:bg-gray-700 hover:text-gray-300 px-4 py-2 rounded-md text-sm font-semibold border-2 border-current">
							All Posts
						</Link>
					</div>

					<div>
				        <ul className="pl-6 list-disc">
				          {data.allFile.group[0].nodes.map((entry) => (
				            <li key={entry.childMdx.id}>
				              	<Link to={'/posts/' + entry.name} className="link link-hover">
				              		[{entry.childMdx.frontmatter.date}] {entry.childMdx.frontmatter.title}
			              		</Link>
				            </li>
				          ))}
				        </ul>
					</div>

				</div>*/}
			</div>
		</Layout>
	)
}

export const query = graphql`
  query RecentMdxQuery {
	  allFile(
	    filter: {sourceInstanceName: {in: ["projects", "posts"]}}
	    sort: {fields: childrenMdx___frontmatter___date, order: DESC}
	  ) {
	    group(field: sourceInstanceName, limit: 6) {
	      nodes {
	      	name
	        sourceInstanceName
	        childMdx {
        	  id
	          frontmatter {
	            date(formatString: "YYYY")
	            title
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
