Thorax.Models.Competition = Thorax.Model.extend({
	defaults: {
		name: "Nameless",
		sport: "N/A",
		teams: {Participants:[]},
		system: "Single-Elimination"
	},

	url: function(){ return '/competitions/' +  
			this.get('name').replace(/\W+/g, '-').toLowerCase();
	},

	parse: function(res,opt) {
		// NOTE: the server will handle updates from each sub-model separately
		var attribs = JSON.parse(res.body);
		var teams = _.map(attribs.teams, function(membs,name) {
			return {
				name: name, 
				participants: new Thorax.Collections.Participants(membs)
			};
		}); 
		attribs.teams = new Thorax.Collections(teams)
	}
});