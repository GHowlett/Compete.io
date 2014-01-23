Thorax.Views.CompForm = Thorax.View.extend({
	tagName: 'form',
	className: 'form-horizontal',
	template: Handlebars.compile($('#comp-form').html()),

	events: {
		submit: function(ev) {
			ev.preventDefault(); // is this necessary?
			var attribs = this.parse(this.serialize());
			var compMod = new Thorax.Models.Competition(attribs);

			var saveReq = compMod.save(null, {
				success: function(model,res,opt){
					window.location.href = model.url(); },
				error: function(model,xhr,opt){
					/* TODO: respond to server fail */ }
			});

			if (!saveReq) {/* TODO: deal with validation fail */}		}
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