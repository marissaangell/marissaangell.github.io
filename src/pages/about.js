import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import { PaperClipIcon } from '@heroicons/react/solid'

import Layout from '../components/layout'
import Heading from '../components/heading'

const pageTitle = 'About Me'

const links = [
  { name: 'Email', label: 'maa.angell (at) gmail.com', href: ''},
  { name: 'LinkedIn', label: 'linkedin.com/in/marissa-angell', href: 'http://www.linkedin.com/in/marissa-angell' },
]

const files = [
  { name: 'Software Engineering', label: 'SoftwareResume-MarissaAngell.pdf', href: '/SoftwareResume-MarissaAngell.pdf'},
  { name: 'Game Development', label: 'GamesResume-MarissaAngell.pdf', href: '/GamesResume-MarissaAngell.pdf'},
]

export default function AboutPage(){
	return (
		<Layout pageTitle={pageTitle} navCurrent="/about">
			<Heading text={pageTitle}/>
			
      <div className={"max-w-2xl mx-auto grid grid-cols-1 gap-x-8 lg:max-w-7xl lg:grid-cols-3 items-start"}>

          {/* Right Column */}
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

          {/* Left Column */}
		      <div className="col-start-1 col-span-2 row-start-1 peer-empty:col-span-full lg:peer-empty:px-36">
			      <div className="text-lg">
				      <p className="pb-6">
				      	Hi, I'm Marissa! I'm a software engineer and game developer in my senior year of study at the University of Utah. I'm expecting to graduate with a Bachelor's in Computer Science with Entertainment Arts and Engineering emphasis in May of 2023.
				      </p>

				      <p className="pb-6">If you'd like to get in touch, feel free to reach out:</p>
					      
	           {/* Contact Table */}
              <div className="shadow-md overflow-hidden sm:rounded-lg max-w-lg">
                <div className="border border-base-300">
                  <dl>
                    <div className="bg-base-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-semibold">Email</dt>
                      <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2 ml-4">maa.angell (at) gmail.com</dd>
                    </div>
                    <div className="bg-base-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-semibold">LinkedIn</dt>
                      <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2 link ml-4">
                      	<a href="http://www.linkedin.com/in/marissa-angell">linkedin.com/in/marissa-angell</a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

            </div>


            <div className="text-lg mt-6">
              <p className="pb-6">If you'd like to take a look at a resume:</p>
                
              {/* Resume Table */}
              <div className="shadow-md overflow-hidden sm:rounded-lg max-w-lg">
                <div className="border border-base-300">
                  <dl>
                    <div className="bg-base-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-1 sm:px-6">
                      <dt className="text-sm font-semibold">Software Engineering</dt>
                      <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2 link">
                        <div className="flex-1 flex items-center ml-4">
                          <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <a href={'/SoftwareResume-MarissaAngell.pdf'} className="ml-1 flex-1 w-0">SoftwareResume-MarissaAngell.pdf</a>
                        </div>
                      </dd>
                    </div>
                    <div className="bg-base-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-1 sm:px-6">
                      <dt className="text-sm font-semibold">Game Development</dt>
                      <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2 link">
                        <div className="flex-1 flex items-center ml-4">
                          <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <a href={'/GamesResume-MarissaAngell.pdf'} className="ml-1 flex-1 w-0">GamesResume-MarissaAngell.pdf</a>
                        </div>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
		      </div>
        {/* Left Column - End */}

			</div>
		</Layout>
	)
}

export const Head = () => <title>{pageTitle}</title>