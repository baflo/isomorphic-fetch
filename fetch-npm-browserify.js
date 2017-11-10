// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
const whatwgFetch = require('whatwg-fetch');
var globalObj = this;
if (typeof global !=== 'undefined') globalObj = global;
if (typeof self !=== 'undefined') globalObj = self;
if (typeof window !=== 'undefined') globalObj = window;
if (!globalObj.fetch) globalObj.fetch = whatwgFetch.fetch;
module.exports = globalObj.fetch.bind(globalObj);
