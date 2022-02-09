
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
    });
};








// Star Rating 
// document.querySelector('.rating').addEventListener('click', function (e) {
//     let action = 'add';
//     for (const span of this.children) {
//         span.classList[action]('active');
//         if (span === e.target) action = 'remove';
//     }
// });

// const rating = document.getElementsByClassName('rating');
// const rate = document.querySelectorAll('.rating span');
// rate.addEventListener('click', function () {
//     for (const rate of rating) {
//         console.log('jaka');
//     }
// })



// let stars = document.querySelectorAll('.star');
// document.querySelector('.star-container').addEventListener('click', starRating);
// let rating = document.querySelector('.rating');

// function starRating(e) {
// 	if (e.target.classList[0] == 'star') {
// 		stars.forEach((star) => star.classList.remove('star__checked'));
// 		for (i = stars.length - 1, j = 0; i >= 0; i--, j++) {
// 			if (stars[i] !== e.target) {
// 				stars[i].classList.add('star__checked');
// 			} else {
// 				stars[i].classList.add('star__checked');
// 				rating.textContent = `${j + 1}/5`;
// 				break;
// 			}
// 		}
// 	} else {
// 		stars.forEach((star) => star.classList.remove('star__checked'));
// 		rating.textContent = `${0}/5`;
// 	}
// }




const allstars = document.querySelectorAll('.fa-star')

allstars.forEach(star => {
    star.onclick = () => {
        let starlevel = star.getAttribute('data-num');
        allstars.forEach(el => { //loop through stars again to compare the clicked star to all other stars
            if (starlevel < el.getAttribute('data-num')) {
                el.classList.remove('fas');
                el.classList.add('far');
            }
            else {
                el.classList.remove('far');
                el.classList.add('fas');
            }
        });
    };
});






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




// Animation For 50%
// When Scroll 
$(document).ready(function () {
    new WOW().init();
});



// Isotope Carousel for Most Reviewed 

var $grid = $('.mostReviewedProducts').isotope({
    // options
});
// filter items on button click
$('.mostReviewedLinks').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});