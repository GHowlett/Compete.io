Thorax.Views.CompForm = Thorax.View.extend({
	tagName: 'form',
	className: 'form-horizontal',
	template: Handlebars.compile($('#comp-form').html()),

	events: {
		submit: function(ev) {
			ev.preventDefault(); // is this necessary?
			var attribs = this.parse(this.serialize());	
			(new Thorax.Models.Competition(attribs)).save();
		
		}
	},

	parse: function(data) {
		var teams = data.hasTeams? data.teams.split(/[\n\r,]+/m) : [];
		delete data.hasTeams;
		data.teams = {};

		_.each(teams, function(team) {
			data.teams[team] = [];
		});

		return data;
	}

});