$(document).ready(function(){


	var duration = 2000;
    var $go = $('.go-to');
    var $page = $('body, html');

    $go.click(function(e){
    e.preventDefault();
    var id = $(this).attr("href")//.substring(1);
    var topMargin = parseInt($('.wrapper').css("margin-top"));
    var targetScroll = $(id).offset().top-0;  

    $page.animate({scrollTop:targetScroll}, duration, "easeOutExpo");

});

// FLEXSLIDER

    $(window).load(function() {
    $('.flexslider').flexslider({
    animation: "slide"
    });
      });

// NAV

    $('nav ul li a').click(function() {
    $('nav ul li a').removeClass('selected');
    $(this).addClass('selected');
    });

//alert("hi")

// ANIMATE POINTER

    moveDown();

    function moveDown(){
        $(".pointer").animate({"margin-top":"40px"},700).animate({"margin-top": "-40px"},700, function(){
            moveDown();
        });
        
    }

//ANIMATE NAV

    $(".tab").mouseover(function(){
        $("#sticker").stop(true, false).animate({top:"0px"},500)
    })

    $(".tab").mouseleave(function(){
        $("#sticker").animate({top:"-55px"},500)
    })

    $("#sticker").mouseover(function(){
        $("#sticker").stop(true, false).animate({top:"0px"},500)
    })

    $("#sticker").mouseleave(function(){
        $("#sticker").animate({top:"-55px"},500)
    })


//HIDE AND SHOW

    $(".showcase").hover(function(){
        $(".launch").stop(true, false).fadeToggle('slow',"linear")
    })

    //$(".hand").css("margin-top", "200px ");


// BACKGROUND


// PLUG-IN

	 $("#sticker").sticky({topSpacing:0});
     $(".contact-form").formvalidation();
     $("")

}); // end of ready();


