/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js",
	],
	daisyui: {
		themes: ["light"],
	},
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
			},
		},
		colors: {
			'pxp': '#8A9A5B',
			'beige': '#FFFDD0',
			'black': '#000000',
			'white': '#ffffff',
			'slate': {
				50: 'rgb(248 250 252)',
				100: 'rgb(241 245 249)',
				200: 'rgb(226 232 240)',
				300: 'rgb(203 213 225)',
				400: 'rgb(148 163 184)',
				500: 'rgb(100 116 139)',
				600: 'rgb(71 85 105)',
				700: 'rgb(51 65 85)',
				800: 'rgb(30 41 59)',
				900: 'rgb(15 23 42)',
			},
			'chart': '#394052',
			'red': '#BE2A2A',
			'green': '#54E454'
		},
		extend: {
			fontFamily: {
				'sans': [
					'"Poppins"',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
			},
		},
	},
	plugins: [
		require("daisyui")
	],
};