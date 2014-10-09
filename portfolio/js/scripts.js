$(document).ready(function() {

	window.setTimeout(function(){
		$("body").delay(50).fadeIn(800);
	}, 100);


	$('.fade').hover(
		function(){
			$(this).find('.caption').fadeIn(250);
			/* $(this).find('img').addClass('blur'); */
		},
		function(){
			$(this).find('.caption').fadeOut(250);
			/* $(this).find('img').removeClass('blur'); */
		}
	);


	$("#nav").addClass("js").before('<div id="menu">&#9776;</div>');
	
	$("#menu").click(function(){
		$("#nav").slideToggle();
	});
	
	$(window).resize(function(){
		if(window.innerWidth > 768) {
			$("#nav").removeAttr("style");
		}
	});

});


/*	Sticky Content	*/ 
$(window).load(function(){
  $("#sidebar").sticky({ topSpacing: 40 });
});

