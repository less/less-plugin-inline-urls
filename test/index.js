var lessTest = require("less/test/less-test"),
    lessTester = lessTest(),
    plugins = require('../lib/index.js'),
    stylize = require('less/lib/less/lessc_helper').stylize;

console.log("\n" + stylize("LESS - Plugins", 'underline') + "\n");

lessTester.runTestSet(
    {strictMath: true, relativeUrls: true, silent: true, plugins: [new plugins.InlineImages()] },
    "inline-images/");

