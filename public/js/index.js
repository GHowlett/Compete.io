$('#create').click( function() {
	var popup = new Thorax.Views.Popup();
	popup.setView(new Thorax.Views.CompForm());
});