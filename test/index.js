'use strict';

var test = require('tape');
var description = require('symbol.prototype.description');

var IntlFallbackSymbol = require('../');

test('IntlFallbackSymbol', function (t) {
	t.match(typeof IntlFallbackSymbol, /^symbol|undefined$/, 'is a Symbol, or undefined');

	t.test('Symbol present', { skip: typeof IntlFallbackSymbol !== 'symbol' }, function (st) {
		// eslint-disable-next-line no-extra-parens
		var desc = description(/** @type {symbol} */ (IntlFallbackSymbol));
		st.match(
			desc,
			/^IntlFallback|IntlLegacyConstructedSymbol$/,
			'FallbackSymbol has description ' + desc
		);

		st.end();
	});

	t.end();
});
