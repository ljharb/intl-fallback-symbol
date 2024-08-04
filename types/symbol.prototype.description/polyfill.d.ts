declare module 'symbol.prototype.description/polyfill' {
    function getPolyfill(): () => typeof import('symbol.prototype.description/implementation');

    export = getPolyfill;
}