module.exports = function(less) {
    function InlineImages() {
        this._visitor = new less.visitors.Visitor(this);
    };

    InlineImages.prototype = {
        isReplacing: true,
        isPreEvalVisitor: true,
        run: function (root) {
            return this._visitor.visit(root);
        },
        visitRule: function (ruleNode, visitArgs) {
            this._inRule = true;
            return ruleNode;
        },
        visitRuleOut: function (ruleNode, visitArgs) {
            this._inRule = false;
        },
        visitUrl: function (URLNode, visitArgs) {
            if (!this._inRule) {
                return URLNode;
            }
            return new less.tree.Call("data-uri", [URLNode.value], URLNode.index || 0, URLNode.currentFileInfo);
        }
    };
    return InlineImages;
};
