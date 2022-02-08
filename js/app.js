
// Scroll To Top 
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}


// New Arrival
// Wish Icons 

const wishIcons = document.getElementsByClassName('wish-icon');
for (const wishIcon of wishIcons) {
    wishIcon.addEventListener('click', function () {
        wishIcon.innerHTML = `<i class="fas fa-heart"></i>`;
    })
}




// Slick Carousel 
$(function () {
    $('.new-arrival').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        prevArrow: '<span class="priv-arrow"><i class=" fas fa-angle-left"></i></span>',
        nextArrow: '<span class="next-arrow"><i class=" fas fa-angle-right"></i></span>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});