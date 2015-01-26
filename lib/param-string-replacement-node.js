module.exports = function(less) {
	function DynamicStringReplacementNode(subNode) {
		this.value = subNode;
	}

	// todo uncomment when we can upgrade less
	//DynamicStringReplacementNode.prototype = new less.tree.Node();
	DynamicStringReplacementNode.prototype.accept = function (visitor) {
		this.value = visitor.visit(this.value);
	};

	DynamicStringReplacementNode.prototype.type = "DynamicStringReplacementNode";
	
	DynamicStringReplacementNode.prototype.eval = function(context) {
		var quoted = this.value.eval(context);
		if (quoted.value && typeof(quoted.value) === "string") {
			quoted.value = quoted.value.replace(/\?[^#]*/, "");
		}
		return quoted;
	};
	
	return DynamicStringReplacementNode;
};