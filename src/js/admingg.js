(function($) {
  "use strict";

    /*
     * initialize plugins and components
     */
    function initAdminGG() {
        initSidebarMenu();
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
     * on document ready
     */
    $(document).ready(function() {
        initAdminGG();
    });

})(jQuery);