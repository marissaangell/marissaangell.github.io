//Source: https://www.hyperui.dev/components/marketing/cards

import * as React from 'react'

const GradientCardFull = ({ title, desc, date, tags }) => {
  return (
    <article className="p-1 shadow-xl rounded-2xl bg-gradient-to-r from-red-400 to-red-600">
		  <div className="flex flex-col justify-end h-full p-6 bg-neutral sm:p-6 rounded-xl">
		    
		    <div className="">
		      <p className="text-xs font-medium text-gray-500">
		        {date}
		      </p>
		      <h5 className="mt-2 text-xl font-bold text-white">
		        {title}
		      </h5>
		      <div className="mt-2">
		        <p className="text-sm text-gray-400">
		          {desc}
		        </p>
		      </div>

		      <div className="flex items-center justify-between mt-4">
		        <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">
		          Rails
		        </p>
		        <ul className="flex space-x-1">
		        	{ tags.map((tag) => (
								<li key={tag} className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-neutral-focus">
			            {tag}
			          </li>
			        )) }
		        </ul>
		      </div>

		    </div>
		  </div>
		</article>

  )
}

export default GradientCardFull