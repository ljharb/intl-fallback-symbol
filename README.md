# intl-fallback-symbol <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

ECMA-402 Intl spec's internal `FallbackSymbol`.

This Symbol is well-known - shared across realms.

It is present in the following engines with the description `"IntlLegacyConstructedSymbol"` ([spec](https://tc39.es/ecma402/#intl-object)):
 - node >= 16
 - Chrome >= 91
 - Safari >= 14.1
 - Firefox >= 54

It is present in the following engines with the description `"IntlFallback"`: <sub>(The [ES2017 Intl spec](https://402.ecma-international.org/4.0/#intl-object) did not specify a description)</sub>
- node >=8 <16
- Chrome 57 - 90

When it is present, the package will export it; when not, it will export `undefined`.

## Example

```js
var IntlFallbackSymbol = require('intl-fallback-symbol');

var assert = require('assert');

assert(typeof IntlFallbackSymbol === 'symbol');
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/intl-fallback-symbol
[npm-version-svg]: https://versionbadg.es/ljharb/intl-fallback-symbol.svg
[deps-svg]: https://david-dm.org/ljharb/intl-fallback-symbol.svg
[deps-url]: https://david-dm.org/ljharb/intl-fallback-symbol
[dev-deps-svg]: https://david-dm.org/ljharb/intl-fallback-symbol/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/intl-fallback-symbol#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/intl-fallback-symbol.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/intl-fallback-symbol.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/intl-fallback-symbol.svg
[downloads-url]: https://npm-stat.com/charts.html?package=intl-fallback-symbol
[codecov-image]: https://codecov.io/gh/ljharb/intl-fallback-symbol/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/ljharb/intl-fallback-symbol/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ljharb/intl-fallback-symbol
[actions-url]: https://github.com/ljharb/intl-fallback-symbol/actions
