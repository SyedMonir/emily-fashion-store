
// New Arrival

// Wish Icons 



const faHearts = document.getElementsByClassName('fa-heart');

for (const faHeart of faHearts) {
    faHeart.addEventListener('click', function () {
        if (faHeart.className == 'far fa-heart') {
            faHeart.classList.remove('far', 'fa-heart');
            faHeart.classList.add('fas', 'fa-heart');
        }
        else {
            faHeart.classList.remove('fas', 'fa-heart');
            faHeart.classList.add('far', 'fa-heart');
        }
    });

}







// Slick Carousel 
$(function () {
    $('.new-arrival').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
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





// When Scroll 


// Animation For 50%

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);


// Percent 50%

function percent50() {
    var reveals = document.querySelectorAll(".percent50");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("percent50Active");
        } else {
            reveals[i].classList.remove("percent50Active");
        }
    }
}

window.addEventListener("scroll", percent50);



// Scroll To Top 

var scrollToTopBtn = document.getElementById("scrollToTopBtn");
// When the user scrolls down 20px from the top of the document, showing button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}







// Isotope Carousel for Most Reviewed 

var $grid = $('.mostReviewedProducts').isotope({
    // options
});
// filter items on button click
$('.mostReviewedLinks').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});





//=========    Cart

const cartButton = document.getElementById('cartButton');
cartButton.addEventListener('click',function(){
    window.location.href = 'cart.html';
})