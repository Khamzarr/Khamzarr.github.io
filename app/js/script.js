$(function() {
    let header = $("#header");
    let intro = $("#intro");
    let introh = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll", function() {
        scrollPos = $(this).scrollTop();

        if (scrollPos > introh) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }




    });

});