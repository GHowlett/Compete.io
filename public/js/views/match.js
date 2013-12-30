Thorax.Views.Match = Thorax.View.extend({
	tagName: 'table',

	seed1: new Thorax.Views.Participant(),
	seed2: new Thorax.Views.Participant(),

	template: Handlebars.compile(
		'<tbody>' +
		  '{{view seed1}}' +
		  '{{view seed2}}' +
		'</tbody>'
	)
});