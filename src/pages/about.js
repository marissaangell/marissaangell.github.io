import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"


import Layout from '../components/layout'
import Heading from '../components/heading'
import DetailsList from '../components/detailsList'

import { PaperClipIcon } from '@heroicons/react/solid'


const pageTitle = 'About Me'

export default function AboutPage(){
	return (
		<Layout pageTitle={pageTitle} navCurrent="/about">
			<Heading text={pageTitle}/>
			<div>

				 <div className={"max-w-2xl mx-auto grid grid-cols-1 gap-x-8 lg:max-w-7xl lg:grid-cols-3 items-start"}>
			      <div className="peer empty:hidden">
			      	<div className="shadow-2xl rounded-lg bg-base-300 p-4 lg:-mt-12">
						    <StaticImage 
					    		src="../assets/NCWITPic.jpg" 
					    		alt="A photo of Marissa Angell" 
					    		aspectRatio={1}
					    		placeholder="blurred"
					    		transformOptions="cover"
					    		objectFit="cover"
					    		objectPosition="50% 50%"
					    		className="rounded-lg shadow-sm"
				    		/>
					</div>
			      </div>

			      <div className="col-start-1 col-span-2 row-start-1 peer-empty:col-span-full lg:peer-empty:px-36">
				      <div className="text-lg">
					      <p className="pb-6">
					      	Hi, I'm Marissa! I'm a software engineer and game developer in my senior year of study at the University of Utah. I'm expecting to graduate with a Bachelor's in Computer Science with Entertainment Arts and Engineering emphasis in May of 2023.
					      </p>

					      <p className="pb-6">If you'd like to get in touch, feel free to reach out:</p>
					      
					      

      <div className="shadow overflow-hidden sm:rounded-lg max-w-md">
      <div className="border border-base-300">
        <dl>
          <div className="bg-base-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-semibold">Email</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">maa.angell (at) gmail.com</dd>
          </div>
          <div className="bg-base-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-semibold">LinkedIn</dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2 link">
            	<a href="http://www.linkedin.com/in/marissa-angell">linkedin.com/in/marissa-angell</a>
            </dd>
          </div>

          {/*<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 flex-1 w-0 truncate">resume_back_end_developer.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 flex-1 w-0 truncate">coverletter_back_end_developer.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>*/}


        </dl>
      </div>
    </div>

				      </div>
			      </div>
			    </div>

				
			</div>
		</Layout>
	)
}

export const Head = () => <title>{pageTitle}</title>