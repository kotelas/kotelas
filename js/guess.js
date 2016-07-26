(function($, document, window){
	
	$(document).ready(function(){

		$(".hint a").click(function(){
			$(".hint p").slideToggle();
		});

		$("form.question").submit(function(event){
			event.preventDefault();
			var input = $(this).find('input');
			var correctAnswers = input.data("answers");
			var answer = input.val().toLowerCase();
			var isCorrect = $.inArray(answer, correctAnswers) > -1;
			if(isCorrect) {
				$(this).parent().find(".result").slideToggle();
			}
			return false;
		});
	});

	$(window).load(function(){

	});

})(jQuery, document, window);

