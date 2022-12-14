
function main() {

  (function () {
     'use strict';
  
     let $logo = $('#logo')
     let navbar_on = false
     
      $('a.page-scroll').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top - 40
              }, 900);
              return false;
            }
          }
        });
  
    
      // Show Menu on Book
      $(window).bind('scroll', function() {
          var navHeight = $(window).height() - 500;
          if ($(window).scrollTop() > navHeight) {
              $('.navbar-default').addClass('on');
              // $('#logo').addClass('logo_on');
  
              if (navbar_on){
                navbar_on = false;
                navbar_change()
              }
  
          } else {
              $('.navbar-default').removeClass('on');
      
              if (!navbar_on){
                navbar_on = true;
                navbar_change()
              }
          }
      });
  
      let navbar_change = function(){
        $logo.stop(true, true)
  
        if(navbar_on){
          $logo.animate({
            height: "100px"
          }, 500)
        }
        else{
          $logo.animate({
            height: "50px"
          }, 500)
        }
      }
  
  
  
      $('body').scrollspy({ 
          target: '.navbar-default',
          offset: 80
      });
  
    // Hide nav on click
    $(".navbar-nav li a").click(function (event) {
      // check if window is small enough so dropdown is created
      var toggle = $(".navbar-toggle").is(":visible");
      if (toggle) {
        $(".navbar-collapse").collapse('hide');
      }
    });
    
      // Portfolio isotope filter
      $(window).load(function() {
          var $container = $('.portfolio-items');
          $container.isotope({
              filter: '*',
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false
              }
          });
          $('.cat a').click(function() {
              $('.cat .active').removeClass('active');
              $(this).addClass('active');
              var selector = $(this).attr('data-filter');
              $container.isotope({
                  filter: selector,
                  animationOptions: {
                      duration: 750,
                      easing: 'linear',
                      queue: false
                  }
              });
              return false;
          });
  
      });
    
      // Nivo Lightbox 
      $('.portfolio-item a').nivoLightbox({
              effect: 'slideDown',  
              keyboardNav: true,                            
          });
  
  }());
  
  
  }
  main();