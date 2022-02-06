
// Scroll To Top 
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}


// New Arrival

{/* <span class="wish-icon"><i class="fa fa-heart-o"></i></span> */}


$(document).ready(function () {
    $(".wish-icon i").click(function () {
        $(this).toggleClass("fa-heart fa-heart-o");
    });
});	
