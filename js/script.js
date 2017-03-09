(function($){
  $(function(){

    $('.card-panel').click((event) => expandCard(event));

  }); // end of document ready
})(jQuery); // end of jquery


function expandCard(evt) {
	const card = $(evt.target).closest('.card-panel');
	const initialPos = card[0].getBoundingClientRect();
	
	if(!card.hasClass("expanded")){
		card.addClass("expanded");
		$(document.body).one('click', () => {
			card.removeClass("expanded");
		});

		// force reflow
		if (card[0].clientLeft) {
			const finalPos = card[0].getBoundingClientRect();
		}

	evt.stopPropagation();
	return false;
	
	}
	
};