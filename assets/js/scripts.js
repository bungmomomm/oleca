$('.slide-carousel').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed:450,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop:true,
    margin:0,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.home-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.testimony-carousel').owlCarousel({
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.product-carousel').owlCarousel({
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop:true,
    margin:0,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$(window).scroll(function(){
    if($(this).scrollTop()>= 200){           
        $('.navbar-default').css('border-color','#231F20');
        $('.navbar-default').css('background-color','#F5EEE1');
        $('body.body-home .navbar-default').css('background-color','#F5EEE1');
    } else if($(this).scrollTop()<= 100) {
      $('.navbar-default').css('border-color','#F5EEE1');
      $('body.body-home .navbar-default').css('border-color','transparent');
      $('body.body-home .navbar-default').css('background-color','transparent');
    }
}); 

(function($) {
    
    var allPanels = $('.product-desc .product-desc--content, .distributor-area .distributor-area--content').hide();
    
    

    $('.distributor-area > h5 > strong, .product-desc > h5 > strong').click(function() {
        $this = $(this);
        $target =  $this.parent().next();

        $this.addClass('clicked');

        if(!$target.hasClass('active')){
           allPanels.removeClass('active').slideUp();
           $target.addClass('active').slideDown();
        }
    });

  
  })(jQuery);