Package.describe(
{
  name: 'didstopia:ipa-metadata',
  summary: 'Provides easy access to ipa-metadata.',
  version: '0.0.3',
  git: 'https://github.com/Didstopia/meteor-ipa-metadata.git',
  documentation: 'README.md',
  packages:
  {
    
  }
});

Npm.depends(
{
  'ipa-metadata': '1.4.0'
});

Package.onUse(function(api)
{
  api.versionsFrom('1.1.0.2');
  
  api.addFiles('ipa-metadata.js', 'server');

  api.export('ipaMetadata', 'server');
});

Package.onTest(function(api)
{
  api.use(['tinytest', 'didstopia:ipa-metadata']);

  api.addFiles('ipa-metadata.js', 'server');
  api.addFiles('ipa-metadata-tests.js', 'server');

  api.export('ipaMetadata', 'server');
});
