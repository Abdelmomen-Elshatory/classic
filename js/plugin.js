$(function() {

    // Adjust header height

    var myHeader = $(".header"),

    mySlider = $(".slider");

    myHeader.height($(window).height());

    $(window).resize(function() {

        myHeader.height($(window).height());

        // Adjust slider list item center

        mySlider.each(function() {

            $(this).css("padding-top", ($(window).height() - $(".slider li").height()) / 2)
        })
    });


    // Links add active class

    $(".links li a").click(function(e) {

        e.preventDefault();

        $(this).parent().addClass("active").siblings().removeClass("active")
    })

    // Adjust slider list item center

    mySlider.each(function() {

        $(this).css("padding-top", ($(window).height() - $(".slider li").height()) / 2)
    })

    // trigger the bx slider

    mySlider.bxSlider({

        pager: false
    });

    
    // Smooth scroll to div

    $(".links li a").click(function() {

        $("html, body").animate({

            scrollTop: $("#" + $(this).data("value")).offset().top
        }, 1000)
    })


    // Our auto slider code

    $(function autoSlider() {

        $(".my-slider .active").each(function() {

            if (!$(this).is(":last-child")) {

                $(this).delay(3000).fadeOut(1000, function() {

                    $(this).removeClass("active").next().addClass("active").fadeIn()

                    autoSlider()

                })

            } else {

                $(this).delay(3000).fadeOut(1000, function() {

                    $(this).removeClass("active");

                    $(".my-slider div").eq(0).addClass("active").fadeIn();

                    autoSlider()
                })

            }
        })

    }());

    // Triger mixitup

    $("#container").mixItUp();

    // Adjust shuffle links

    $(".our-project .shuffle li").click( function() {

        $(this).addClass("active").siblings().removeClass("active");
    })

    // Trigger nice scroll

    $("body").niceScroll({
        cursorcolor:"#c0392b",
        cursorwidth:"16px",
        cursorborder:"none"
    });


});