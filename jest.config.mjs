/**
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
	
	clearMocks: true,

	
	coverageProvider: "v8",

	
	
	moduleFileExtensions: ["js", "mjs", "cjs", "json", "node"],

	
	transform: {
		"^.+\\.m?js$": "babel-jest",
	},

	
};

export default config;
