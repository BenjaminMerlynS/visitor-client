Package.describe({
	name: 'merlyn:visitor-client',
	version: '0.0.5',
	summary: 'Client-side infrastructure for tracking visitors to your site.',
	git: 'https://github.com/BenjaminMerlynS/visitor-client/',
	documentation: 'README.md'
});

Package.onUse(function(api) {

	api.versionsFrom('2.4');

	// ====== BUILT-IN PACKAGES =======

	api.use([
		'amplify@1.0.0'
		, 'tracker'
		, 'random'
		, 'accounts-base'
		, 'mongo'
		, 'templating@1.4.1'
		, 'underscore'
	], 'client');

	// ====== 3RD PARTY PACKAGES =======

	// ====== BOTH =======

	// ====== SERVER =======

	// ====== CLIENT =======

	api.addFiles([
		'client/lib/visitor.js'
		, 'client/lib/meteorExtensions.js'
		, 'client/views/helpers.js'
	], 'client');

	// ====== EXPORTS =======

	api.export('Visitor');
});

Package.onTest(function(api) {
	api.use('tinytest');
});
