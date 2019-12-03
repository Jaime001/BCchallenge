/*Scroll*/
$(document).ready(function(){
    $(document).scroll(function(){
        document.title = $(document).scrollTop()
    })

    $(window).on("scroll", function() {
        if($(window).scrollTop()) {
              $('nav').addClass('brown');
              $('nav').addClass('shadow-lg')
              $('.icon-menu').addClass('brown')
              $('img').addClass('show')
        }
    
        else {
              $('nav').removeClass('brown');
              $('nav').removeClass('shadow-lg')
              $('.icon-menu').removeClass('brown')
              $('a.responsive-image img').removeClass('show')
        }
    });
})



