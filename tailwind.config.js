/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require("daisyui")
	],
	// daisyui: {
	//     themes: [
	//       {
	//         dark: {
	//           ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
	//           primary: "#F04152",
	//           secondary: "#A35385",
	//           accent: "#74b0a3",
	//         },
	//       },
	//     ],
 //  	},
}
