'use strict';

var callBound = require('call-bound');
var find = require('array.prototype.find');

var gOPS = callBound('Object.getOwnPropertySymbols', true);
var symbolToString = callBound('Symbol.prototype.toString', true);

/** @type {import('.')} */
module.exports = gOPS && symbolToString && typeof Intl !== 'undefined' ? find(
	gOPS(Intl.DateTimeFormat.call({ __proto__: Intl.DateTimeFormat.prototype })),
	function (x) {
		//  eslint-disable-next-line no-extra-parens
		var str = /** @type {NonNullable<typeof symbolToString>} */ (symbolToString)(x);
		return str === 'Symbol(IntlLegacyConstructedSymbol)' // node >=16, chrome 91+, Safari 14.1+, Firefox 54+
			|| str === 'Symbol(IntlFallback)'; // node >=8 <16, chrome 57-90
	}
) : void undefined;
