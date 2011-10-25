$(document).ready(function(){
	
	$('.work-link').click(function(){
		$('.work-container').css('height', '100%');
		$('.scroller').scrollTo($('.work'), 500, {onAfter:function(){
			
			}});
	});
	
	$('.about-link').click(function(){
		$('.scroller').scrollTo($('.about'), 500, {onAfter:function(){
			$('.work').css('height', '100px');
			}});
	});
	
	$('.contact-link').click(function(){
		$('.scroller').scrollTo($('.contact'), 500, {onAfter:function(){
			$('.work').css('height', '100px');
			}});
	});
	
});