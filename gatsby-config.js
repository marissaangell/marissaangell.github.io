module.exports = {
	siteMetadata: {
		title: `Portfolio`,
		siteUrl: `https://www.marissaangell.github.io`
	},
	plugins: [
		"gatsby-plugin-image", 
		"gatsby-plugin-react-helmet", 
		"gatsby-plugin-mdx",
		"gatsby-plugin-postcss",
		"gatsby-plugin-sharp", 
		"gatsby-transformer-sharp",
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				"name": "images",
				"path": "./src/images/"
			},
			__key: "images"
		}, 
		{
		resolve: 'gatsby-source-filesystem',
			options: {
				"name": "pages",
				"path": "./src/pages/"
			},
			__key: "pages"
		},
		{
		resolve: 'gatsby-source-filesystem',
			options: {
				"name": "projects",
				"path": "./content/projects/"
			},
			__key: "projects"
		}
	]
};