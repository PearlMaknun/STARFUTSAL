/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var $ = jQuery;
$(document).ready(function () {
    /**
     * Purchase button on extension page
     */
    $('#elm_form input').change(function () {
        $('input:checked').each(function () {
            $('#extension_purchase').attr('href', $(this).val());
        });
    });

    $('#extension_purchase').click(function (e) {
        e.preventDefault();
        if ($(this).attr('href') != '') {
            window.location.href = $(this).attr('href');
        } else {
            alert('Please check at least one subscription');
        }
    });
    /**
     * Faq button
     */
    $('#qaplus_searchsubmit').attr('class', 'fbtn green small');
    $('#qaplus_searchsubmit').css('border', '0');
    /**
     * Remove anchor from commnet url
     */
    $("#comment_list .url").each(function () {
        $(this).attr('href', '#');
        $(this).removeAttr("href");
        $(this).replaceWith(function () {
            return $("<b />").append($(this).contents());
        });
    });
});

$(document).ready(function () {
    var windowWidth = $(window).width();
    if (windowWidth < 972) {
        $("#feature-1").click(function () {
            //Code to add tooltip in features
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature1-sm").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
//            $('html, body').animate({
//                scrollTop: $(".inner-section-1").offset().top - 100
//            }, 1000);
            }
            $("#feature1-sm").toggle();
            // jquery to scroll feature area to top 
        });
        $("#feature-2").click(function () {
            //Code to add tooltip in features
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature2-sm").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
//            $('html, body').animate({
//                scrollTop: $(".inner-section-1").offset().top - 100
//            }, 1000);
            }
            $("#feature2-sm").toggle();
            // jquery to scroll feature area to top 
        });
        $("#feature-3").click(function () {
            //Code to add tooltip in features
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature3-sm").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
//            $('html, body').animate({
//                scrollTop: $(".inner-section-1").offset().top - 100
//            }, 1000);
            }
            $("#feature3-sm").toggle();
            // jquery to scroll feature area to top 
        });
        $("#feature-4").click(function () {
            //Code to add tooltip in features
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature4-sm").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
//            $('html, body').animate({
//                scrollTop: $(".inner-section-1").offset().top - 100
//            }, 1000);
            }
            $("#feature4-sm").toggle();
            // jquery to scroll feature area to top 
        });
        $("#feature-5").click(function () {
            //Code to add tooltip in features
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature5-sm").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
//            $('html, body').animate({
//                scrollTop: $(".inner-section-1").offset().top - 100
//            }, 1000);
            }
            $("#feature5-sm").toggle();
            // jquery to scroll feature area to top 
        });
        $("#feature-6").click(function () {
            //Code to add tooltip in features
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature6-sm").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
//            $('html, body').animate({
//                scrollTop: $(".inner-section-1").offset().top - 100
//            }, 1000);
            }
            $("#feature6-sm").toggle();
            // jquery to scroll feature area to top 
        });
        $("#feature-7").click(function () {
            //Code to add tooltip in features
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature7-sm").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
//            $('html, body').animate({
//                scrollTop: $(".inner-section-1").offset().top - 100
//            }, 1000);
            }
            $("#feature7-sm").toggle();
            // jquery to scroll feature area to top 
        });
        $("#feature-8").click(function () {
            //Code to add tooltip in features
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature8-sm").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
//            $('html, body').animate({
//                scrollTop: $(".inner-section-1").offset().top - 100
//            }, 1000);
            }
            $("#feature8-sm").toggle();
            // jquery to scroll feature area to top 
        });
        $("#feature-9").click(function () {
            //Code to add tooltip in features
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature9-sm").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
//            $('html, body').animate({
//                scrollTop: $(".inner-section-1").offset().top - 100
//            }, 1000);
            }
            $("#feature9-sm").toggle();
            // jquery to scroll feature area to top 
        });
        $("#feature-10").click(function () {
            //Code to add tooltip in features
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature10-sm").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
//            $('html, body').animate({
//                scrollTop: $(".inner-section-1").offset().top - 100
//            }, 1000);
            }
            $("#feature10-sm").toggle();
            // jquery to scroll feature area to top 
        });
        $("#feature-11").click(function () {
            //Code to add tooltip in features
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature11-sm").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
//            $('html, body').animate({
//                scrollTop: $(".inner-section-1").offset().top - 100
//            }, 1000);
            }
            $("#feature11-sm").toggle();
            // jquery to scroll feature area to top 
        });
        $("#feature-12").click(function () {
            //Code to add tooltip in features
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature12-sm").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
//            $('html, body').animate({
//                scrollTop: $(".inner-section-1").offset().top - 100
//            }, 1000);
            }
            $("#feature12-sm").toggle();
            // jquery to scroll feature area to top 
        });

    }
    if (windowWidth > 972) {
        $("#feature-1").click(function () {
            //Code to add tooltip in features
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature1").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
                $('html, body').animate({
                    scrollTop: $(".inner-section-1").offset().top - 100
                }, 100);
            }
            $("#feature1").toggle();
            // jquery to scroll feature area to top 
        });
        $("#feature-2").click(function () {
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature2").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
                $('html, body').animate({
                    scrollTop: $(".inner-section-1").offset().top - 100
                }, 100);
            }
            $("#feature2").toggle();
            // jquery to scroll feature area to top 

        });
        $("#feature-3").click(function () {
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature3").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
// jquery to scroll feature area to top 
                $('html, body').animate({
                    scrollTop: $(".inner-section-1").offset().top - 100
                }, 100);
            }
            $("#feature3").toggle();
        });
        $("#feature-4").click(function () {
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature4").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
// jquery to scroll feature area to top 
                $('html, body').animate({
                    scrollTop: $(".inner-section-2").offset().top - 100
                }, 100);
            }
            $("#feature4").toggle();
        });
        $("#feature-5").click(function () {
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature5").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
// jquery to scroll feature area to top 
                $('html, body').animate({
                    scrollTop: $(".inner-section-2").offset().top - 100
                }, 100);
            }
            $("#feature5").toggle();

        });
        $("#feature-6").click(function () {
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature6").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
// jquery to scroll feature area to top 
                $('html, body').animate({
                    scrollTop: $(".inner-section-2").offset().top - 100
                }, 100);
            }
            $("#feature6").toggle();
        });
        $("#feature-7").click(function () {
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature7").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
// jquery to scroll feature area to top 
                $('html, body').animate({
                    scrollTop: $(".inner-section-3").offset().top - 100
                }, 100);
            }
            $("#feature7").toggle();
        });
        $("#feature-8").click(function () {
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature8").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
                // jquery to scroll feature area to top 
                $('html, body').animate({
                    scrollTop: $(".inner-section-3").offset().top - 100
                }, 100);
            }
            $("#feature8").toggle();

        });
        $("#feature-9").click(function () {
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature9").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
// jquery to scroll feature area to top 
                $('html, body').animate({
                    scrollTop: $(".inner-section-3").offset().top - 100
                }, 100);
            }
            $("#feature9").toggle();
        });
        $("#feature-10").click(function () {
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature10").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
// jquery to scroll feature area to top 
                $('html, body').animate({
                    scrollTop: $(".inner-section-4").offset().top - 100
                }, 100);
            }
            $("#feature10").toggle();
        });
        $("#feature-11").click(function () {
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature11").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
                // jquery to scroll feature area to top 
                $('html, body').animate({
                    scrollTop: $(".inner-section-4").offset().top - 100
                }, 100);
            }
            $("#feature11").toggle();
        });
        $("#feature-12").click(function () {
            $("div.feature-tip").removeClass("feature-tip");
            $(this).addClass('feature-tip');
            var v = $("#feature12").is(':visible');
            if (v == false) {
                $(".section-test").not($(this)).hide();
                // jquery to scroll feature area to top 
                $('html, body').animate({
                    scrollTop: $(".inner-section-4").offset().top - 100
                }, 100);
            }
            $("#feature12").toggle();

        });
    }
});


$(window).resize(function () {
    var wi = $(window).width();
    fg_remove_xsclass(wi);
});
$(window).load(function () {
    var wi = $(window).width();
    fg_remove_xsclass(wi);
});

function fg_remove_xsclass(wi) {
    var elem = $('.element-list');
    if (wi <= 400) {
        elem.find(".col-xs-6").removeClass('col-xs-6');
    }
    if (wi > 400) {
        elem.find(".col-md-4,.col-md-3 ").addClass('col-xs-6');
    }
}

function moveUp($item) {
    $before = $item.prev();
    $item.insertBefore($before);
}

function moveDown($item) {
    $after = $item.next();
    $item.insertAfter($after);
}