Thorax.Views.CompForm = Thorax.View.extend({
	tagName: 'form',
	className: 'form-horizontal',
	template: Handlebars.compile($('#comp-form').html())
});