var getInlineImages = require("./inline-images");

module.exports = {
    install: function(less, pluginManager) {
        var InlineImages = getInlineImages(less);
        pluginManager.addVisitor(new InlineImages());
    }
};
