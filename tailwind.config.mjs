import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {
			fontFamily: {
				nanum: ["Nanum Pen Script", ...fontFamily.sans],
				gaegu: ["Gaegu", ...fontFamily.sans],
			},
			colors: {
				primary: {
					DEFAULT: "#44624a",
					content: "#fff",
				}
			}
		},
	},
	plugins: [],
}
