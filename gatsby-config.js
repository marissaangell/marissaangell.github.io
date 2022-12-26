const path = require("path");

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
		    path: `${__dirname}/gatsby-config.js`,
		  },
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				"name": "assets",
				"path": `${__dirname}/src/assets/`
			},
			__key: "assets"
		}, 
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				"name": "pages",
				"path": `${__dirname}/src/pages/`
			},
			__key: "pages"
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				"name": "coding",
				"path": `${__dirname}/content/coding/`
			},
			__key: "coding"
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				"name": "games",
				"path": `${__dirname}/content/games/`
			},
			__key: "games"
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				"name": "vfx",
				"path": `${__dirname}/content/vfx/`
			},
			__key: "vfx"
		},
		{
			resolve: 'gatsby-plugin-mdx-frontmatter'
		},
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				resolveModules: [path.join(__dirname, "src", "components")]
			}
		}, 
	]
};