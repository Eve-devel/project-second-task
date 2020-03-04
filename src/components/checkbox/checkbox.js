import './checkbox.scss';

(function($) {
	function setChecked(target) {
      var listName = document.querySelector('.checkbox__select');
			$(target).find('h3').html(listName.dataset.name);
	}

	$.fn.checkselect = function() {
		this.wrapInner('<div class="checkbox__popup"></div>');
		this.prepend(
			'<div class="checkbox__control">' +
				'<h3></h3>' + '<span class="checkbox__button material-icons">expand_more</span>' +
			'</div>'
		);

		this.each(function(){
			setChecked(this);
		});
		this.find('input[type="checkbox"]').click(function(){
			setChecked($(this).parents('.checkselect'));
		});

		this.parent().find('.checkbox__control').on('click', function(){
			if ($('.checkbox__popup').is(':hidden')) {
				$('.checkbox__popup').css('display', 'block');
				$(this).find('select').focus();
				$('.checkbox__button').css('transform', 'rotate(180deg)');
			} else {
				$('.checkbox__popup').css('display', 'none');
				$('.checkbox__button').css('transform', 'none');
			}
		});

		$('html, body').on('click', function(e){
			if ($(e.target).closest('.checkbox__select').length == 0){
				$('.checkbox__popup').css('display', 'none');
				$('.checkbox__button').css('transform', 'none');
			}
		});
	};
})(jQuery);

$('.checkbox__select').checkselect();
