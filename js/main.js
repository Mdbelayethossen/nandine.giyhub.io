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

    // Counter Up 2 Init 
    jQuery(function ($) {
        "use strict";
        
        var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"
        
        var $counters = $(".counter");
        
        /* Start counting, do this on DOM ready or with Waypoints. */
		$counters.each(function (ignore, counter) {
			var waypoint = new Waypoint( {
				element: $(this),
				handler: function() { 
					counterUp(counter, {
						duration: 5000,
						delay: 16
					}); 
					this.destroy();
				},
				offset: 'bottom-in-view',
			} );
		});
        
    });
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