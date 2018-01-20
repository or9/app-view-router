module.exports = {
	root: "./",
	suites: ["./*.spec.html"],
	verbose: false,
	skipSeleniumInstall: false,
	plugins: {
		istanbul: {
			dir: "./coverage-client",
			reporters: ["text-summary", "lcov", "json", "clover"],
			include: [
				"**/*.js",
				"**/*.html"
			],
			exclude: [
				"/polymer/polymer.js",
				"/platform/platform.js",
				"**/node_modules/**",
				"**/bower_components/**/*",
				"**/*.spec.html" // required, otherwise we encounter 100% 0/0 coverage bug
			]
		},
		local: {
			browsers: [{
				"browserName": "chrome"
			}],
			seleniumPort: 4444,
			skipSelenium: false // You have your own selenium server running
		},
		sauce: false
	}
};
