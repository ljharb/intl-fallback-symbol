declare module 'symbol.prototype.description' {
    function getSymbolDescription(sym: symbol): string;
    const symbolDescription: typeof getSymbolDescription & {
        getPolyfill: typeof import('symbol.prototype.description/polyfill'),
        implementation: typeof import('symbol.prototype.description/implementation'),
        shim: typeof import('symbol.prototype.description/shim'),
    };
    
    export = symbolDescription;
}
