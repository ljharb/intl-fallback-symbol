declare module 'symbol.prototype.description/shim' {
    function shim(): typeof import('symbol.prototype.description/implementation');

    export = shim;
}