!function(e){"use strict";function s(){o(),i(),l()}function o(){e(".sidebar .menu .toggle").on("click",function(s){s.preventDefault(),e(this).parent().toggleClass("open"),e(this).siblings(".submenu").stop().slideToggle()}),e(".menu-toggle").on("click",function(s){s.preventDefault(),e(".admingg").toggleClass("compact-menu"),e(".submenu").each(function(){e(this).parent().removeClass("open"),e(this).slideUp()})}),e("ul.submenu").each(function(){e(this).parent().on("mouseenter",function(){e(".admingg").hasClass("compact-menu")&&e(this).addClass("open")}).on("mouseleave",function(){e(".admingg").hasClass("compact-menu")&&e(this).removeClass("open")})})}function i(){e(".slider-demo-1").slick(),e(".slider-demo-2").slick({slidesToShow:3,slidesToScroll:1,infinite:!1}),e(".slider-demo-3").slick({dots:!0,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:960,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".slider-demo-4-1").slick({slidesToShow:1,slidesToScroll:1,asNavFor:".slider-demo-4-2",fade:!0}),e(".slider-demo-4-2").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".slider-demo-4-1",centerMode:!0,focusOnSelect:!0,arrows:!1,autoplay:!0,autoplaySpeed:2e3})}function l(){e(".dropdown-select").each(function(){e(this).select2()})}e(document).ready(function(){s()})}(jQuery);
