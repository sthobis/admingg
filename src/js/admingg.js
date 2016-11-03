(function($) {
  "use strict";

    /*
     * initialize plugins and components
     */
    function initAdminGG() {
        initSidebarMenu();
        initSliderDemo();
        initSelect2();
    }

    /*
     * sidebar submenu handler
     */
    function initSidebarMenu() {
        // normal mode submenu toggle handler
        $('.sidebar .menu .toggle').on('click', function(e) {
            e.preventDefault();
            $(this).parent().toggleClass('open');
            $(this).siblings('.submenu').stop().slideToggle();
        });
        // compact menu toggle handler
        $('.menu-toggle').on('click', function(e) {
            e.preventDefault();
            $('.admingg').toggleClass('compact-menu');
            // close opened menu to preserve style consistency
            $('.submenu').each(function() {
                $(this).parent().removeClass('open');
                $(this).slideUp();
            });
        });
        // compact mode submenu toggle handler
        $('ul.submenu').each(function() {
            $(this).parent()
            .on('mouseenter', function() {
                // on hover show submenu
                if ($('.admingg').hasClass('compact-menu')) {
                    $(this).addClass('open');
                }
            })
            .on('mouseleave', function() {
                // on mouseleave hide submenu
                if ($('.admingg').hasClass('compact-menu')) {
                    $(this).removeClass('open');  
                }
            });
        });
    }

    /*
     * sliders initialization
     */
     function initSliderDemo() {

        // DEMO - can be erased
        // Single Item
        $('.slider-demo-1').slick();

        // DEMO - can be erased
        // Multiple Item
        $('.slider-demo-2').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false
        });

        // DEMO - can be erased
        // Responsive Display
        $('.slider-demo-3').slick({
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        // DEMO - can be erased
        // Slider syncing + Autoplay
        $('.slider-demo-4-1').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-demo-4-2',
            fade: true
        });

        $('.slider-demo-4-2').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-demo-4-1',
            centerMode: true,
            focusOnSelect: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000
        });
     }

    /*
     * dropdown initialization
     */
     function initSelect2() {

        $('.dropdown-select').each(function() {
            $(this).select2();
        });
     }

    /*
     * on document ready
     */
    $(document).ready(function() {
        initAdminGG();
    });

})(jQuery);