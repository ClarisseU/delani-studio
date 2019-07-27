$(document).ready(function() {
    // $("#primo").hide();
    // $("#segundo").hide();
    // $("#tertio").hide();
    $("#design").click(function() {
        $("img#prem").toggle();
        $("p#prem").toggle();
        $("p#primo").toggle();

    });
    $("#devs").click(function() {
        $("img#sec").toggle();
        $("p#segundo").toggle();
        $("p#sec").toggle();
    });

    $("#prodz").click(function() {
        $("p#tert").toggle();
        $("img#tert").toggle();
        $("p#tertio").toggle();
    });

});
$(document).ready(function() {
    $("#un").hide();
    $("#one").animate({ opacity: 5 });
    $("#one").hover(function() {
            $(this).stop().animate({ opacity: 0.4 });
            $("#un").fadeIn();
        }),
        (function() {
            $(this).stop().animate({ opacity: 1 });
            $("#un").fadeOut();
        });
    $("#deux").hide();
    $("#two").animate({ opacity: 5 });
    $("#two").hover(function() {
            $(this).stop().animate({ opacity: 0.4 });
            $("#deux").fadeIn();
        }),
        (function() {
            $(this).stop().animate({ opacity: 1 });
            $("#deux").fadeOut();
        });
    $("#trois").hide();
    $("#three").animate({ opacity: 5 });
    $("#three").hover(function() {
            $(this).stop().animate({ opacity: 0.4 });
            $("#trois").fadeIn();
        }),
        (function() {
            $(this).stop().animate({ opacity: 1 });
            $("#trois").fadeOut();
        });
    $("#quatre").hide();
    $("#four").animate({ opacity: 5 });
    $("#four").hover(function() {
            $(this).stop().animate({ opacity: 0.4 });
            $("#quatre").fadeIn();
        }),
        (function() {
            $(this).stop().animate({ opacity: 1 });
            $("#quatre").fadeOut();
        });
    $("#cinq").hide();
    $("#five").animate({ opacity: 5 });
    $("#five").hover(function() {
            $(this).stop().animate({ opacity: 0.4 });
            $("#cinq").fadeIn();
        }),
        (function() {
            $(this).stop().animate({ opacity: 1 });
            $("#cinq").fadeOut();
        });
    $("#sisi").hide();
    $("#six").animate({ opacity: 5 });
    $("#six").hover(function() {
            $(this).stop().animate({ opacity: 0.4 });
            $("#sisi").fadeIn();
        }),
        (function() {
            $(this).stop().animate({ opacity: 1 });
            $("#sisi").fadeOut();
        });
    $("#sept").hide();
    $("#seven").animate({ opacity: 5 });
    $("#seven").hover(function() {
            $(this).stop().animate({ opacity: 0.4 });
            $("#sept").fadeIn();
        }),
        (function() {
            $(this).stop().animate({ opacity: 1 });
            $("#sept").fadeOut();
        });
    $("#huit").hide();
    $("#eight").animate({ opacity: 5 });
    $("#eight").hover(function() {
            $(this).stop().animate({ opacity: 0.4 });
            $("#huit").fadeIn();
        }),
        (function() {
            $(this).stop().animate({ opacity: 1 });
            $("#huit").fadeOut();
        });
});