Thorax.Models.Competition = Thorax.Model.extend({
	defaults: {
		name: "Nameless",
		sport: "N/A",
		teams: {Participants:[]},
		system: "Single-Elimination"
	},

	url: function() {return '/competitions/' + 
		 this.get('name').replace(/\W+/g, '-').toLowerCase();
	}
});