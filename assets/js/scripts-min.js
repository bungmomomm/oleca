$(".slide-carousel").owlCarousel({animateOut:"fadeOut",animateIn:"fadeIn",smartSpeed:450,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,loop:!0,margin:0,nav:!1,dots:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(".home-carousel").owlCarousel({autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,loop:!0,margin:0,nav:!0,dots:!1,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(".testimony-carousel").owlCarousel({autoplay:!1,autoplayTimeout:3e3,autoplayHoverPause:!0,loop:!0,margin:0,nav:!0,dots:!1,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(".product-carousel").owlCarousel({autoplay:!1,autoplayTimeout:3e3,autoplayHoverPause:!0,loop:!0,margin:0,nav:!1,dots:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(window).scroll(function(){$(this).scrollTop()>=200?($(".navbar-default").css("border-color","#231F20"),$(".navbar-default").css("background-color","#F5EEE1"),$("body.body-home .navbar-default").css("background-color","#F5EEE1")):$(this).scrollTop()<=100&&($(".navbar-default").css("border-color","#F5EEE1"),$("body.body-home .navbar-default").css("border-color","transparent"),$("body.body-home .navbar-default").css("background-color","transparent"))}),function($){var o=$(".product-desc .product-desc--content, .distributor-area .distributor-area--content").hide();$(".distributor-area > h5 > strong, .product-desc > h5 > strong").click(function(){$this=$(this),$target=$this.parent().next(),$this.addClass("clicked"),$target.hasClass("active")||(o.removeClass("active").slideUp(),$target.addClass("active").slideDown())})}(jQuery);