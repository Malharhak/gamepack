define([], function () {
	var funcs = [
		"inputs",
		"preUpdate",
		"update",
		"loading",
		"postUpdate",
		"animate",
		"preRender",
		"render",
		"postRender"
];

	var GameScene = function (name) {
		this.name = name;
		for (var i = 0; i < funcs.length; i++) {
			this["_" + funcs[i]] = createGameSceneFunction (funcs[i]);
		}
	};

	// Used to generate all functions (_update, _render, etc)
	// These are meant to be called before the actual user defined ones, so we can add code in them if needed
	var createGameSceneFunction = function (name) {
		return function () {
			if (typeof this[name] === "function") {
				this[name]();
			}
		};
	};

	return GameScene;
});
