// See https://github.com/gruntjs/grunt-contrib-clean for details.
module.exports = {
	"language-files": [
		"<%= paths.languages %>*",
		"!<%= paths.languages %>index.php",
	],
	"after-po-download": [
		"<%= paths.languages %><%= pkg.plugin.textdomain %>-*-{formal,informal,ao90}.{po,json}",
	],
	"po-files": [
		"<%= paths.languages %>*.po",
		"<%= paths.languages %>*.pot",
		"<%= paths.languages %>yoast-seo.json",

		"<%= files.pot.yoastComponents %>",
		"<%= files.pot.yoastComponentsConfigurationWizard %>",
		"<%= files.pot.yoastComponentsRemaining %>",
		"<%= files.pot.wordpressSeoJs %>",
		"<%= paths.languages %>yoast-components.json",

		"<%= files.pot.yoastseojs %>",
	],
	"build-assets-js": [
		"js/dist/*.js",
		"<%= paths.js %>/select2",
	],
	"build-assets-css": [
		"<%= files.css %>",
		"<%= files.cssMap %>",
		"<%= paths.css %>/select2",
	],
	artifact: [
		"<%= files.artifact %>",
	],
	"composer-artifact": [
		"<%= files.artifactComposer %>",
	],
	"composer-files": [
		"<%= files.artifactComposer %>/vendor",
	],
};
