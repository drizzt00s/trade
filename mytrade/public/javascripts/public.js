(function($) {

	$.extend({

		'dropdpwn_Menu': function(nName) {

			$(nName).css('display', 'none');
			$(nName).parent('li').hover(function() {
				$(this).children(nName).stop(true, true).slideDown(200);
			}, function() {
				$(this).children(nName).stop(true, true).slideUp(200);
			});

			return this;
		},

	})

})(jQuery);

$(document).ready(function() {

	/*Jquery Mmenu*/
	$("#mmenu").mmenu({
		"extensions": [
			"effect-menu-slide",
			"effect-listitems-slide",
			"pagedim-black"
		],
		"offCanvas": {
			position: "right"
		}
	}).css("opacity", "1");

	$.dropdpwn_Menu(".nav > ul > li > ul");

});

/*roll*/
// $(function() {
//
// 	$('.home-casemain').slick({
// 		slidesToShow: 4,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 		arrows: true,
// 		dots: false,
// 		autoplaySpeed: 3000,
// 		speed: 600,
// 		responsive: [{
// 				breakpoint: 991,
// 				settings: {
// 					slidesToShow: 3,
// 					slidesToScroll: 3,
// 					infinite: true,
// 				}
// 			}, {
// 				breakpoint: 767,
// 				settings: {
// 					slidesToShow: 2,
// 					slidesToScroll: 2
// 				}
// 			}, {
// 				breakpoint: 321,
// 				settings: {
// 					slidesToShow: 1,
// 					slidesToScroll: 1
// 				}
// 			}
//
// 		]
// 	});
// });
// $(function() {
// 	$('.home-title').slick({
// 		slidesToShow: 5,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 		arrows: false,
// 		dots: false,
// 		autoplaySpeed: 3000,
// 		speed: 600,
// 		responsive: [{
// 				breakpoint: 991,
// 				settings: {
// 					slidesToShow: 4,
// 					slidesToScroll: 3,
// 					infinite: true,
// 				}
// 			}, {
// 				breakpoint: 767,
// 				settings: {
// 					slidesToShow: 3,
// 					slidesToScroll: 2
// 				}
// 			}, {
// 				breakpoint: 480,
// 				settings: {
// 					slidesToShow: 2,
// 					slidesToScroll: 1
// 				}
// 			}
//
// 		]
//
// 	});
// });
//
//
//
// $(function() {
// 	$('.banner-phone').slick({
// 		dots:false,
// 		arrows: true,
// 		centerPadding: 0,
// 		slidesToShow: 1,
// 		autoplaySpeed:2500,
// 		speed: 800,
// 	});
// });

/*pc-banner*/
$(document).ready(function() {
	var _width = $(window).width();
	$('.banner-pc ul li').width($(window).width());
	var num = $('.banner-pc ul li').length;
	var _interval = 3000;
	var timer;

	$('.banner-pc').hover(function() {
		clearInterval(timer)
	}, function() {
		timer = setInterval(function() {
			bpnext();
		}, _interval)
	}).trigger('mouseleave')

	$(".bannerpc-next").click(function() {
		bpnext();
	})
	$(".bannerpc-prev").click(function() {
		bpprev();
	})

	function bpnext() {
		$(".banner-pc ul").animate({
			marginLeft: -_width,
		}, 800, function() {
			$(".banner-pc ul li").eq(0).appendTo($(".banner-pc ul"));
			$(".banner-pc ul").css({
				"marginLeft": "0"
			})
		})
	}

	function bpprev() {
		$(".banner-pc ul").css('marginLeft', -_width);
		$(".banner-pc ul li").eq(num - 1).prependTo($(".banner-pc ul"));
		$(".banner-pc ul").animate({
			marginLeft: "0px"
		}, 800);

	}
});


 

/*search*/
$(document).ready(function() {
	$(".search-click").click(function() {
		$(".search-left ul").slideToggle(150);
		if($(this).find("i").hasClass("i-1")) {
			$(this).find("i").addClass("i-2");
			$(this).find("i").removeClass("i-1");
		} else {
			$(this).find("i").addClass("i-1");
			$(this).find("i").removeClass("i-2");
		}
	})

	$(".search-left ul li").click(function() {
		var stext = $(this).text();
		$(".search-left p").text(stext);
		$(this).parent("ul").hide();
		if($(this).parents(".search-left").find("i").hasClass("i-1")) {
			$(this).parents(".search-left").find("i").addClass("i-2");
			$(this).parents(".search-left").find("i").removeClass("i-1");
		} else {
			$(this).parents(".search-left").find("i").addClass("i-1");
			$(this).parents(".search-left").find("i").removeClass("i-2");
		}
	})
})

/*link*/

$(document).ready(function() {
	$(".link-btn").click(function() {
		$(".link-main").slideToggle(150);
		if($(this).find("em").hasClass("em-1")) {
			$(this).find("em").addClass("em-2");
			$(this).find("em").removeClass("em-1");
		} else {
			$(this).find("em").addClass("em-1");
			$(this).find("em").removeClass("em-2");
		}
	})

	$(".link-main li").click(function() {
		var stext = $(this).text();
		$(".link-btn p").text(stext);
		$(this).parent(".link-main").slideUp();
		if($(this).parents(".link").find("em").hasClass("em-1")) {
			$(this).parents(".link").find("em").addClass("em-2");
			$(this).parents(".link").find("em").removeClass("em-1");
		} else {
			$(this).parents(".link").find("em").addClass("em-1");
			$(this).parents(".link").find("em").removeClass("em-2");
		}
	})
})

$(".related_newsmain li:nth-child(2n)").addClass("li-2");
$(".article li:eq(1)").addClass("li-2");

/*core-show*/
$(document).ready(function(){
	$(".core-nr:gt(0)").hide();
	var hw=$(".core-title li");
	hw.click(function(){
		$(this).addClass("active")
		    .siblings().removeClass("active");
		hw_index=hw.index(this);
		$(".core-nr").eq(hw.index(this)).show()
		.siblings().hide();
	})
})