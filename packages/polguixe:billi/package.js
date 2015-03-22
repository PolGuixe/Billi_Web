Package.describe({
  name: 'polguixe:billi',
  version: '0.1.1',
  // Brief, one-line summary of the package.
  summary: 'Schemas and other functions used by billi',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use(['aldeed:autoform@4.0.0 || 5.0.0','minimongo']);
  api.addFiles('schema.js');
  
  api.export('BilliSchema');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('polguixe:billi');
  api.addFiles('billi_package_tests.js');
});
