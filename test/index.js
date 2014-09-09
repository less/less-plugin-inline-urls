var less = require("less"),
    lessTest = require("less/test/less-test"),
    lessTester = lessTest(),
    plugin = require('../lib'),
    pluginManager = new less.PluginManager(less),
    stylize = less.lesscHelper.stylize;

pluginManager.addPlugin(plugin);

console.log("\n" + stylize("LESS - Plugins", 'underline') + "\n");

lessTester.runTestSet(
    {strictMath: true, relativeUrls: true, silent: true, plugins: pluginManager },
    "inline-images/");
