import * as React from "react"

const ProseWrapper = ({ children, extraStyles }) => {
	return (
	  	<div className={"prose lg:prose-lg max-w-none text-gray-400 " + extraStyles}>
	        {children}
    	</div>
	)
}

export default ProseWrapper
