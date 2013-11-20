var tree = require("less").tree,
    replaceToken = "--";

function AutoPrefix(prefixes) {
    this._visitor = new tree.visitor(this);
    this._prefixes = prefixes || [
        '-webkit-',
        ' -khtml-',
        '   -moz-',
        '    -ms-',
        '     -o-',
        '        '];
};

AutoPrefix.prototype = {
    isReplacing: true,
    isPreEvalVisitor: false,
    run: function (root) {
        return this._visitor.visit(root);
    },
    visitRule: function (ruleNode, visitArgs) {
        var ruleNodeOutput = [], i;
        if (ruleNode.name.indexOf(replaceToken) === 0) {
            var name = ruleNode.name.substr(replaceToken.length);
            for(i = 0; i < this._prefixes.length; i++) {
                ruleNodeOutput.push(new tree.Rule(this._prefixes[i] + name, ruleNode.value, ruleNode.important, ruleNode.merge, ruleNode.index, ruleNode.currentFileInfo, ruleNode.inline));
            }
            return ruleNodeOutput;
        }
        return ruleNode;
    }
};

module.exports = AutoPrefix;