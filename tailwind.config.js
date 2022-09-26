/* eslint-disable @typescript-eslint/naming-convention */

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["src/**/*.tsx"],
	theme: {
		extend: {
			colors: {
				stone: {
					900: "#1E1A20",
				},
				neutral: {
					700: "#707070",
				},
				violet: {
					700: "#6F5ADC",
				},
				green: {
					300: "#6FCF97",
				},
			},
			fontFamily: {
				title: "Raleway, sans-serif",
				sans: "Poppins, sans-serif",
			},
		},
	},
	plugins: [],
};
