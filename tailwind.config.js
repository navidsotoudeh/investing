/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			mobile: '400px',
			tablet: '480px',
			laptop: '768px',
			desktop: '1024px',
			ultra: '1280px',
		},
		extend: {
			transitionProperty: {
				height: 'height',
			},
			boxShadow: {
				all_sides: '0 0 4px 1px #ccc',
				main: '0 0 8px 0 rgba(0, 0, 0, .15)',
			},
			colors: {
				primary: {
					normal: '#E10A0A',
					10: '#FFF5F5',
					20: '#FFE8E8',
					30: '#FCD6D6',
					40: '#F7ABAB',
					50: '#F67B7B',
					60: '#B00000',
					70: '#750000',
					80: '#4F0404',
					90: '#270404',
				},
				secondary: {
					normal: '#0085FF',
					0: '#FAFCFF',
					10: '#FAFCFF',
					20: '#F2F9FF',
					30: '#DFF0FF',
					40: '#BFE0FF',
					50: '#80C2FF',
					60: '#40A3FF',
					70: '#0064BF',
					80: '#004280',
					90: '#002140',
				},
				surface: {
					normal: '#EDEDED',
					10: '#FFFFFF',
					20: '#FDFDFD',
					30: '#F9F9F9',
					40: '#E1E1E1',
					50: '#CECECE',
				},
				text: {
					normal: '#505050',
					10: '#B8B8B8',
					20: '#A4A4A4',
					30: '#888888',
					40: '#6B6B6B',
					50: '#292929',
					60: '#000000',
				},
				Error: {
					normal: '#BA1B1B',
					10: '#F9EFEF',
					20: '#F9E5E5',
					30: '#FAC8C8',
					40: '#F29191',
					50: '#F26161',
					60: '#DD3730',
					70: '#930006',
					80: '#5D0D0D',
					90: '#2E0707',
				},
				warning: {
					normal: '#F39E22',
					10: '#FEFCF6',
					20: '#FEFAEF',
					30: '#FDF4DA',
					40: '#FAE1AF',
					50: '#F8C57A',
					60: '#F6B659',
					70: '#C5790B',
					80: '#835107',
					90: '#422804',
				},
				Success: {
					normal: '#1CB65D',
					10: '#F7FFFB',
					20: '#EDFCF3',
					30: '#D0F8E1',
					40: '#B4F0CD',
					50: '#7DEBAB',
					60: '#3CE182',
					70: '#158946',
					80: '#0E5B2E',
					90: '#072D17',
				},
				BlueGrey: {
					//ta inja ============
				},
				transparent: 'transparent',
				current: 'currentColor',
				white: '#fff',
				black: '#000',
				red: {
					primary: '#E10A0A',
					hover: '#B00000',
					active: '#7F1D1D',
				},
				blue: {
					primary: '#0085FF',
				},
				green: {
					primary: '#1CB65D',
				},
				light_grey: '#F6F5F5',
				silver_grey: '#E1E1E1',
				pastal_grey: '#CDCDCD',
				medium_grey: '#A4A4A4',
				semi_dark: '#888888',
				dark_grey: '#505050',
				smoke_gray: '#6B6B6B',
			},
			backgroundImage: {
				gold1: 'linear-gradient(141.46deg, #826025 12.8%, #F8C769 85.33%)',
				gold2: 'linear-gradient(141.46deg, #A78346 12.8%, #F8C769 85.33%)',
				gold3: ' linear-gradient(254.39deg, #E10A0A 40.22%, #A50000 100.87%)',
				gray: 'linear-gradient(180deg, #2D2D2D 0%, #0A0A0A 100%);',
				line_Product:
					'linear-gradient(180deg, #151515 0%, #101010 10.42%, #1A1A1A 22.4%, #090909 74.48%, #070707 79.17%, #141414 100%);',
			},

			animation: {
				pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			fontFamily: {
				mainFa: ['YekanBakhFaNum', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
				mainEn: ['yekanbakhEn', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
			},
		},
	},
	plugins: [],
};
