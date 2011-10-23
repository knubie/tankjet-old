$(document).ready(function(){
	
	$('.work-link').click(function(){
		console.log('this part work')
		$('.scroller').scrollTo($('.work'), 500);
	});
	
	$('.blog-link').click(function(){
		console.log('this part work')
		$('.scroller').scrollTo($('.blog'), 500);
	});
	
	$('.contact-link').click(function(){
		console.log('this part work')
		$('.scroller').scrollTo($('.contact'), 500);
	});
	
});