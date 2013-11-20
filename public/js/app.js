var focusEl = '#name';

$('.popup-btn').magnificPopup({
	type: 'inline',

	fixedContentPos: false,
	fixedBgPos: true,

	overflowY: 'auto',

	showCloseBtn: false,
	preloader: false,
	focus: focusEl,
	
	midClick: true,
	removalDelay: 300,
	mainClass: 'my-mfp-zoom-in',

	/* stops auto-zoom-in for mobile phones */
	callbacks: {
		beforeOpen: function() {
			if ($(window).width() < 700) this.st.focus = false;
			else this.st.focus = focusEl;
		}
	}
});