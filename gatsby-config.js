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
				"path": "./src/assets/"
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
				"name": "coding",
				"path": "./content/coding/"
			},
			__key: "coding"
		},
		{
		resolve: 'gatsby-source-filesystem',
			options: {
				"name": "games",
				"path": "./content/games/"
			},
			__key: "games"
		},
		{
		resolve: 'gatsby-source-filesystem',
			options: {
				"name": "vfx",
				"path": "./content/vfx/"
			},
			__key: "vfx"
		},
		{
			resolve: 'gatsby-plugin-mdx-frontmatter'
		}
	]
};