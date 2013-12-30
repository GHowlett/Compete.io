Thorax.Views.Participant = Thorax.View.extend({
	tagName: 'tr',

	// TODO: make the name editable / deleteable
	template: Handlebars.compile(
		'<td>{{seat}}</td>' +
		'<td>{{fullname}}</td>'
	)
})