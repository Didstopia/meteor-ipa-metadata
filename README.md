# ipa-metadata

[![Build Status](https://travis-ci.org/Didstopia/meteor-ipa-metadata.svg)](https://travis-ci.org/Didstopia/meteor-ipa-metadata)

Provides convenient access to [ipa-metadata](https://github.com/matiassingers/ipa-metadata).

## Usage

```js
ipaMetadata('Facebook.ipa', function(error, data) {
  console.log(data);
  
  // { metadata: 
  //    { CFBundleName: 'Facebook',
  //      ... },
  //   provisioning:
  //    { TeamName: 'Facebook Inc.',
  //      ... } },
  //   entitlements:
  //    { application-identifier: '1234abcd.com.facebook.facebook.',
  //      ... } }
});
```