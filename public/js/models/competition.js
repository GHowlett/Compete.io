Thorax.Models.Competition = Thorax.Model.extend({
	defaults: {
		name: "Nameless",
		sport: "N/A",
		teams: {},
		system: "Single-Elimination"
	},

	urlRoot: '/competitions'
});