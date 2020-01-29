$(document).ready(function () {
    let $btns = $('.portpolio-area  .button-group button');


    $btns.click(function (e) {

        $('.portpolio-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.portpolio-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.portpolio-area .button-group #btn1').trigger('click');

    // Owl-carousel

    $(' .my-team .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            560: {
                items: 2
            },
            1200: {
                items: 4
            }
        }
    })
    // Owl-carousel-2

    $(' .t-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            560: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })

});