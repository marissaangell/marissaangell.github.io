import * as React from "react"


const LinkButtonRow = ({ links }) => {
	return (
      <div className="flex justify-center gap-x-6 mt-6 empty:hidden">
			{ links.map((link) => (				
				<a key={link.url} href={link.url}>
					<button className="btn btn-outline">
						{link.text}
					</button>
				</a>
	        ))}
		  </div>
	)
}

export default LinkButtonRow
