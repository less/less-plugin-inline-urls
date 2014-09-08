var InlineImages = require("./inline-images.js");

module.exports = {
    visitor: InlineImages,
    install: function(less) {
        less.addVisitor(InlineImages);
    }
};
