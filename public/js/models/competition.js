Thorax.Models.Competition = Thorax.Model.extend({
	defaults: {
		name: "Nameless",
		sport: "N/A",
		teams: {default:[]},
		system: "Single-Elimination"
	},

	urlRoot: '/competitions'
});