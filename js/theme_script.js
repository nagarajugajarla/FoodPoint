jQuery(document).ready(function($) {
    "use strict";
    // PrettyPhoto Script
    $('a[data-rel]').each(function() {
        $(this).attr('rel', $(this).data('rel'));
        $(".pretty-gallery a[rel^='prettyPhoto']").prettyPhoto();
    });
    if ($('.gallery').length) {
        $(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({
            animation_speed: 'normal',
            theme: 'light_square',
            slideshow: 3000,
            autoplay_slideshow: true
        });
        $(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({
            animation_speed: 'fast',
            slideshow: 10000,
            hideflash: true
        });
    }

    //Home Banner
    if ($('#home-banner').length) {
        $('#home-banner').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            items: 1,
            autoplay: true,
            smartSpeed: 2000,
            animateOut: 'flipOutY',
            animateIn: 'fadeIn',
            URLhashListener: true,
            autoplayHoverPause: false,


        });
    }

    //Blog Slider
    if ($('#post-slider').length) {
        $('#post-slider').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            items: 1,
            autoplay: true,
        });
    }

    //Back To Top
    if ($('.scrollToTop').length) {
        $(window).scroll(function() {
            "use strict";
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });


        //Click event to scroll to top
        $('.scrollToTop').on('click', function(e) {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    }

    //Causes Slider
    if ($('#causes-slider').length) {
        $('#causes-slider').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: '',
            items: 4,
            smartSpeed: 1000,
            padding: 0,
            margin: 30,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 2,
                },
                1199: {
                    items: 4,
                }
            }
        });
    }

    //Product Slider
    if ($('#product-slider').length) {
        $('#product-slider').owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            autoplay: true,
            navText: '',
            items: 4,
            smartSpeed: 1000,
            padding: 0,
            margin: 3,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 2,
                },
                1199: {
                    items: 4,
                }
            }
        });
    }


    //ISOTOPE GALLERY ELITE
    if ($(".gallery-metro-2 .isotope").length) {
        var $container = $('.gallery-metro-2 .isotope');
        $container.isotope({
            itemSelector: '.item',
            transitionDuration: '0.6s',
            masonry: {
                columnWidth: $container.width() / 12
            },
            layoutMode: 'masonry'
        });

        $(window).resize(function() {
            $container.isotope({
                masonry: {
                    columnWidth: $container.width() / 12
                }
            });
        });
    }


    //Scroll
    if ($('#content-3dtd').length) {
        $(window).on('load', function(e) {
            "use strict";
            $.mCustomScrollbar.defaults.scrollButtons.enable = true;
            $.mCustomScrollbar.defaults.axis = "yx";
            $("#content-3dtd").mCustomScrollbar({
                theme: "3d-thick-dark"
            })
        });
    }

    //Coming Soon
    if ($('.defaultCountdown').length) {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        $('.defaultCountdown').countdown({
            until: austDay
        });
        $('#year').text(austDay.getFullYear());
    }


    //Contact Map
    if ($('#map_contact_1').length) {
        var map;
        var myLatLng = new google.maps.LatLng(40.712784, -74.005941);
        var myOptions = {
            zoom: 12,
            center: myLatLng,
            //disableDefaultUI: true,
            zoomControl: true,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            styles: [{
                stylers: [{
                    hue: '#2b2b2b'
                }, {
                    saturation: -100,
                }, {
                    lightness: 10
                }]
            }],
        }
        map = new google.maps.Map(document.getElementById('map_contact_1'), myOptions);
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            icon: 'images/map-icon-2.png'
        });
        marker.getPosition();
        //End marker
    }
});