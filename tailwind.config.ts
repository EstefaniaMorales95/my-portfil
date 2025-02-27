import type { Config } from 'tailwindcss';

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				darkBg: '131424',
				customBeige: '#d8a48f',
				White: '#f2e9e4',
				Coffe: '#b07d62',
				creem: '#e6b8a2',
				gray: '#c0c0c0',
				salmon: 'f08080',
			},
			backgroundImage: {
				'gradient-cover':
					'linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%',
			},
		},
	},
	plugins: [],
} satisfies Config;
