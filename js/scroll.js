$(document).ready(function(){
	
	$('.work-link').click(function(){
		$('.work-container').css('overflow', 'visible');
		$('.scroller').scrollTo($('.work'), 500, {onAfter:function(){
			
			}});
	});
	
	$('.about-link').click(function(){
		$('.scroller').scrollTo($('.about'), 500, {onAfter:function(){
			$('.work-container').css('overflow', 'hidden');
			}});
	});
	
	$('.contact-link').click(function(){
		$('.scroller').scrollTo($('.contact'), 500, {onAfter:function(){
			$('.work-container').css('overflow', 'hidden');
			}});
	});
	
});