
// Scroll To Top 
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}


// New Arrival

{/* <span class="wish-icon"><i class="fa fa-heart-o"></i></span> */ }
document.g

$(document).ready(function () {
    $(".wish-icon i").click(function () {
        $(this).toggleClass("fas fa-heart");
    });
});



// Slick Carousel 
$(function () {
    $('.blog-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<span class="priv-arrow"><i class=" fas fa-angle-left"></i></span>',
        nextArrow: '<span class="next-arrow"><i class=" fas fa-angle-right"></i></span>'
    });
});