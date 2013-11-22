Thorax.Views.CompForm = Thorax.View.extend({
	tagName: 'form',
	className: 'form-horizontal',
	template: Handlebars.compile($('#comp-form').html()),

	events: {
		'submit': function(ev) {
			ev.preventDefault();
			var attribs = this.serialize();	
			var comp = new Thorax.Models.Competition(attribs);
			comp.save();
		}
	}
});