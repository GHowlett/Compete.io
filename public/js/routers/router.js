App.Router = Backbone.Router.extend({
	routes: {
		page1: "function1",
		page2: "function2"
	},

	function1: function () {
	},

	function2: function () {
	}
})

App.router = new App.Router();
Backbone.history.start({root: '/'});