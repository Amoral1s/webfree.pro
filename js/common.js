$(window).on('load', function () {
	$preloader = $('.loaderArea'),
		$loader = $preloader.find('.loader');
	$loader.fadeOut();
	$preloader.delay(350).fadeOut('slow');
});
jQuery(document).ready(function() {
  jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });

$(document).ready(function(){
	$('.toggle').click(function(){
		$(this).toggleClass('open');
	});
});
$(".toggle").click(function() {
	if ($(".mobile-menu").is(":visible")) {
        $(".mobile-menu").slideUp(600);
        
	} else {
		$(".mobile-menu").slideDown(600);
	};
});
$(".moar").click(function() {
	if ($(".load").is(":visible")) {
        $(".load").slideUp(600);
        
	} else {
		$(".load").slideDown(600);
	};
});
$(".notmoar").click(function() {
	if ($(".load").is(":visible")) {
        $(".load").slideUp(600);
        
	} else {
		$(".load").slideDown(600);
	};
});
$(".moar").click(function() {
	if ($(".moar").is(":visible")) {
        $(".moar").fadeOut(600);
        
	} else {
		$(".moar").fadeIn(600);
	};
});
$(".moar").click(function() {
	if ($(".notmoar").is(":visible")) {
        $(".notmoar").slideUp(600);
        
	} else {
		$(".notmoar").slideDown(600);
	};
});
$(".notmoar").click(function() {
	if ($(".moar").is(":visible")) {
        $(".moar").slideUp(600);
        
	} else {
		$(".moar").slideDown(600);
	};
});
$(".notmoar").click(function() {
	if ($(".notmoar").is(":visible")) {
        $(".notmoar").slideUp(600);
        
	} else {
		$(".notmoar").slideDown(600);
	};
});

$(".fa-angle-double-down").click(function(){
  $("html, body").animate({scrollTop: $("header").height()+ 0 },"slow");
  
  return false;});
  
  $(".fa-angle-double-up").click(function(){
  $("html, body").animate({scrollTop: $("head").height()+ 0 },"slow");
  
  return false;});
	
	$(".demo-1").click(function() {
		if ($(".demo-1-about").is(":visible")) {
					$(".demo-1-about").fadeOut(600);
					
		} else {
			$(".demo-1-about").fadeIn(600);
		};
	});
	$(".demo-2").click(function() {
		if ($(".demo-2-about").is(":visible")) {
					$(".demo-2-about").fadeOut(600);
					
		} else {
			$(".demo-2-about").fadeIn(600);
		};
	});
	$(".demo-3").click(function() {
		if ($(".demo-3-about").is(":visible")) {
					$(".demo-3-about").fadeOut(600);
					
		} else {
			$(".demo-3-about").fadeIn(600);
		};
	});
	$(".demo-4").click(function() {
		if ($(".demo-4-about").is(":visible")) {
					$(".demo-4-about").fadeOut(600);
					
		} else {
			$(".demo-4-about").fadeIn(600);
		};
	});
	$(".demo-5").click(function() {
		if ($(".demo-5-about").is(":visible")) {
					$(".demo-5-about").fadeOut(600);
					
		} else {
			$(".demo-5-about").fadeIn(600);
		};
	});
	$(".demo-6").click(function() {
		if ($(".demo-6-about").is(":visible")) {
					$(".demo-6-about").fadeOut(600);
					
		} else {
			$(".demo-6-about").fadeIn(600);
		};
	});
	$(".demo-7").click(function() {
		if ($(".demo-7-about").is(":visible")) {
					$(".demo-7-about").fadeOut(600);
					
		} else {
			$(".demo-7-about").fadeIn(600);
		};
	});
	$(".demo-8").click(function() {
		if ($(".demo-8-about").is(":visible")) {
					$(".demo-8-about").fadeOut(600);
					
		} else {
			$(".demo-8-about").fadeIn(600);
		};
	});
	$(".demo-9").click(function() {
		if ($(".demo-9-about").is(":visible")) {
					$(".demo-9-about").fadeOut(600);
					
		} else {
			$(".demo-9-about").fadeIn(600);
		};
	});
//* form

$(".popup-toggle").click(function() {
	if ($(".popup").is(":visible")) {
        $(".popup").fadeOut(600);
        
	} else {
		$(".popup").fadeIn(600);
	};
});
   $(".popup-close").click(function() {
	if ($(".popup").is(":visible")) {
        $(".popup").fadeOut(600);
        
	} else {
		$(".popup").fadeIn(600);
	};
});
$(".form-btn").click(function() {
	if ($(".form-btn-check").is(":visible")) {
        $(".form-btn-check").slideUp(600);
        
	} else {
		$(".form-btn-check").slideDown(600);
	};
});

$(".ost-letter").click(function() {
    $(".card").addClass('active-letter');
    
    
   });
$(".back-back").click(function() {
    $(".card").removeClass('active-letter');
    
    
   });
   
});
