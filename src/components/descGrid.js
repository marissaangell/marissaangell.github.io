import * as React from "react"

const DescGrid = ({ descriptions }) => {
	return (
	  	<div>
	        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:gap-y-6 lg:gap-x-8 divide-y-1">
	            {descriptions.map((entry) => (
	              	<div key={entry.heading} className="border-t border-gray-200 pt-4">
	                	<dt className="ml-4 font-medium text-gray-300">{entry.heading}</dt>
	                	{entry.link ? 
	                		<a href={entry.link} className="mx-4 mt-2 text-sm text-gray-400">{entry.body}</a> : 
	                		<dd className="mx-4 mt-2 text-sm text-gray-400">{entry.body}</dd>
	                	}
	              	</div>
	            ))}
	      	</dl>
      	</div>
	)
}

export default DescGrid
