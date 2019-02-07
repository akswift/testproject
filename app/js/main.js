$(document).ready(function(){
  $('.aboutus-slick').slick({
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
  });

  $('.comp-slick').slick({
  	dots:true,
  	arrows:false
  });

  $(function(){
	
	$('.bars').on('click', function(){
		
		$('.burgerblock').slideToggle(300, function(){
			
			if($(this).css('display') === 'none'){
				$(this).removeAttr('style');
		}
		
	});
	
 });
	
 });

});


