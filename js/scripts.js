

// Load More
$(document).ready(function () {

    $("#loadMoreBtn").on('click', function (e) {
        e.preventDefault();
        $(".dsNone:hidden").slice(0, 3).slideDown();
        if ($(".dsNone:hidden").length == 0) {
            $("#loadMoreBtn").fadeOut('slow');
        }
    });
});

//owl-carousel

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [" ", " "],

        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});

//Scroll to top
//Apearing
const scrollToTop = document.querySelector(".scrollToTop");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        scrollToTop.classList.add("active");
    } else {
        scrollToTop.classList.remove("active");
    }
})
//Working Function
$(function () {
    $('.scrollToTop').bind("click", function () {
        $('html, body').animate({ scrollTop: 0 }, );
        return false;
    });
});

//
