$( document ).ready(function() {
	$('li > a').click(function() {
		 $('li').removeClass();
	  $(this).parent().addClass('a.a-active');
	});
	
});
