Thorax.Views.Popup = Thorax.LayoutView.extend ({
	//TODO: make this a singleton
	tagName: 'div',
	className: 'zoom-anim white-popup-block mfp-hide',
	id: 'popup',

	initialize: function() {
		var focusEl = '#name';
		var $el = this.$el.prependTo($('body'));

		var popup = $.magnificPopup.open({
			items: {
				type: 'inline',
				src: $el
			},

			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',

			showCloseBtn: false,
			preloader: false,
			focus: focusEl,
			
			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in',
			
			callbacks: {
				beforeOpen: function() { // stops auto-zoom-in for mobile phones
					if ($(window).width() < 700) this.st.focus = false;
					else this.st.focus = focusEl;
				},
				close: function() {
					//TODO: Self-Destruct	
					console.log(this);
				}
			}
		});

	}
})