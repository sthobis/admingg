(function($) {
  "use strict";

    /*
     * initialize plugins and components
     */
    function initAdminGG() {
        initSidebarMenu();
    }

    /*
     * sidebar submenu toggle functions
     */
    function initSidebarMenu() {
        $(document).on('click', '.sidebar .menu .toggle', function(e) {
            e.preventDefault();
            $(this).parent().toggleClass('open');
            $(this).siblings('.submenu').stop().slideToggle();
        });
    }

    /*
     * on document ready
     */
    $(document).ready(function() {
        initAdminGG();
    });

})(jQuery);