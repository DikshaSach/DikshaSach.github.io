

function onMouseClick() {
    $('#scrolldown').on('click', function () {
        $('html, body').animate({
                scrollTop: $('#projects').offset().top - 100
            },
            500);
    })
}

function scrollDown() {
    $('.scroll-bttn').on('click', function () {
        $('html, body').animate({
                scrollTop: $('#projects').offset().top - 100
            },
            500);
    })
}

function mobileToggleOnClick() {
    $('.mobile-toggle').on('click', function () {
        if ($('.main_navigation').hasClass('open-nav')) {
            $('.main_navigation').removeClass('open-nav');
        } else {
            $('.main_navigation').addClass('open-nav');
        }
    });
}

function stickyNav() {
    $(window).scroll(function () {

        if ($(window).scrollTop() > 100) {
            $('.main_navigation').addClass('sticky');
        } else {
            $('.main_navigation').removeClass('sticky');
        }
    });
}

function navLinkOnClick() {
    $('nav a').click(function (event) {
        var id = $(this).attr("href");
        var offset = 70;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 500);
        event.preventDefault();
    });
}

function onMainNavigationClick() {
    $('.main_navigation li a').click(function () {
        if ($('.main_navigation').hasClass('open-nav')) {
            $('.navigation').removeClass('open-nav');
            $('.main_navigation').removeClass('open-nav');
        }
    });
}

$(document).ready(function () {
    onMouseClick();
    scrollDown();
    mobileToggleOnClick();
    stickyNav();
    navLinkOnClick();
    onMainNavigationClick();
   


    
    $(function () {
        var $elements = $('.animateBlock.notAnimated'); //contains all elements of nonAnimated class
        var $window = $(window);
        $window.on('scroll', function (e) {
            $elements.each(function (i, elem) { //loop through each element
                if ($(this).hasClass('animated')) // check if already animated
                    return;
                animateMe($(this));
            });
        });
    });

    function animateMe(elem) {
        var winTop = $(window).scrollTop(); // calculate distance from top of window
        var winBottom = winTop + $(window).height();
        var elemTop = $(elem).offset().top - 100; // element distance from top of page
        var elemBottom = elemTop + $(elem).height();
        if ((elemBottom <= winBottom) && (elemTop >= winTop)) {
            // exchange classes if element visible
            $(elem).removeClass('notAnimated').addClass('animated');
        }
    }

});
