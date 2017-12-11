/**
 * Footer Responsive Menu
 */
function responsiveMobileMenu() {
    jQuery(".rmm").each(function () {
        jQuery(this).children("ul").addClass("rmm-main-list");
        var b = jQuery(this).attr("data-menu-style");
        if (typeof b == "undefined" || b == false) {
            jQuery(this).addClass("graphite")
        } else {
            jQuery(this).addClass(b)
        }
        var a = 0;
        jQuery(this).find("ul li").each(function () {
            a += jQuery(this).outerWidth()
        });
        if (jQuery.support.leadingWhitespace) {
        } else {
        }
    })
}

function getMobileMenu() {
    jQuery(".rmm").each(function () {
        var a = jQuery(this).data('menutitle');
                
        if (a == "") {
            a = "Menu"
        } else {
            if (a == undefined) {
                a = "Menu"
            }
        }
        var c = jQuery(this).children(".rmm-main-list").html();
        var b = "<div class='rmm-toggled-controls'><div class='rmm-toggled-title'>" + a + "</div><div class='rmm-button'><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></div></div>";
        jQuery(this).prepend("<div class='rmm-toggled rmm-closed'>" + b + "<ul>" + c + "</ul></div>")
    })
}

function adaptMenu() {
    jQuery(".rmm").each(function () {
        var a = jQuery(this).css("max-width");
        a = a.replace("px", "");
        if (jQuery(document).width() < 1000) {
            jQuery(this).children(".rmm-main-list").hide(0);
            jQuery(this).children(".rmm-toggled").show(0);
            jQuery("#content_wrapper.content .sidebar-page .sidebar-title").hide(0)
        } else {
            jQuery(this).children(".rmm-main-list").show(0);
            jQuery(this).children(".rmm-toggled").hide(0);
            jQuery("#content_wrapper.content .sidebar-page .sidebar-title").show(0)
        }
    })
}
/**
 * Sidebar Category menu
 * @type jQuery
 */
jQuery(document).ready(function () {
    jQuery('.side-blog').each(function () {
        jQuery('.sidebar-page').attr('data-menutitle', jQuery(this).find('.sidebar-title').text());
    });
});


jQuery(document).ready(function () {
    jQuery("#footer .rmm").addClass("minimal");
    jQuery("#footer .rmm").attr("data-menutitle", "Footer Menu");
    responsiveMobileMenu();
    getMobileMenu();
    adaptMenu();
    jQuery(".rmm-toggled, .rmm-toggled .rmm-button").click(function () {
        if (jQuery(this).is(".rmm-closed")) {
            jQuery(this).find("ul").stop().show(300);
            jQuery(this).removeClass("rmm-closed")
        } else {
            jQuery(this).find("ul").stop().hide(300);
            jQuery(this).addClass("rmm-closed")
        }
    })
});
jQuery(window).resize(function () {
    adaptMenu()
});