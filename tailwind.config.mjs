/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#4E75C8',
				'dark-grey': '#403535'
			},
			keyframes: {
				hideelement: {
					'0%': {opacity: '0'},
					'100%': { opacity: '1'},
				}
			},
			animation: {
				'hide-2s': 'hideelement 1s'
			}
		},
	},
	plugins: [],
}
