

function formget_header_menu() {
    var width = jQuery(window).width();
    if (width > 760) {
        jQuery('.header-menu').superfish({
            //add options here if required
            delay: 0, // one second delay on mouseout
            animation: {opacity: 'show', height: 'show'}, // fade-in and slide-down animation
            speed: 'fast', // faster animation speed
        });
        jQuery('#header_menu').addClass('sf-menu header-menu');
        jQuery('#header_menu').addClass('sf-arrows');
    } else {
        jQuery('#header_menu').removeClass('sf-menu header-menu');
        jQuery('#header_menu').removeClass('sf-arrows');
    }
}
jQuery(document).ready(function () {
    /**
     * Responsive menu
     */
    jQuery('.product-menu').meanmenu({
        meanScreenWidth: "780", // set the screen width you want meanmenu to kick in at
    });

    formget_header_menu();
});

jQuery(window).resize(function () {
    formget_header_menu();
});

jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 66) {
        jQuery('#header_strip').addClass('fixed');
    } else {
        jQuery('#header_strip').removeClass('fixed');
    }
});