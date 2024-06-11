/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#FFF3E3',
					300: '#FAF3EA',
					400: '#B88E2F',
				},
				neutral: {
					100: '#F4F5F7',
					200: '#9F9F9F',
					300: '#D9D9D9',
					400: '#898989',
					500: '#3A3A3A',
				},
				red: {
					400: '#E97171',
				},
				info: {
					400: '#2EC1AC',
				},
			},
		},
	},
	plugins: [],
};
