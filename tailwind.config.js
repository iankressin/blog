/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				body: ['EB Garamond Variable', 'serif'],
				heading: ['Noto Serif', 'serif']
			},
			colors: {
				black: '#1e2326',
				'dim-0': '#232a2e',
				'dim-1': '#2d353b',
				white: '#ddd8be',
				orange: '#e69875',
				yellow: '#f0c674',
				red: '#e67e80',
				blue: '#7fbbb3',
				green: '#a7c080',
				pink: '#d699b6',
				olive: '#425047',
				gray: '#859289',
				aqua: '#83c092'
			}
		},
		screens: {
			tablet: '640px',
			// => @media (min-width: 640px) { ... }

			laptop: '1024px',
			// => @media (min-width: 1024px) { ... }

			desktop: '1280px'
			// => @media (min-width: 1280px) { ... }
		}
	},
	plugins: []
};
