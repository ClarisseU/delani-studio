$(document).ready(function() {
    //what we do
    //design part
    $("#design").click(function() {
        $("img#prem").toggle();
        $("p#prem").toggle();
        $("p#primo").toggle();

    });
    //development part
    $("#devs").click(function() {
        $("img#sec").toggle();
        $("p#segundo").toggle();
        $("p#sec").toggle();
    });
    //production management part
    $("#prodz").click(function() {
        $("p#tert").toggle();
        $("img#tert").toggle();
        $("p#tertio").toggle();
    });

    // portfolio section
    //image one
    $("#un").hide();
    $("#one").animate({ opacity: 5 });
    $("#one").hover(function() {
            $(this).stop().animate({ opacity: 0.4 });
            $("#un").fadeIn();
        },
        function() {
            $(this).stop().animate({ opacity: 1 });
            $("#un").fadeOut();
        });

    //image two    
    $("#deux").hide();
    $("#two").animate({ opacity: 5 });
    $("#two").hover(function() {
            $(this).stop().animate({ opacity: 0.4 });
            $("#deux").fadeIn();
        },
        function() {
            $(this).stop().animate({ opacity: 1 });
            $("#deux").fadeOut();
        });

    // image three    
    $("#trois").hide();
    $("#three").animate({ opacity: 5 });
    $("#three").hover(function() {
            $(this).stop().animate({ opacity: 0.4 });
            $("#trois").fadeIn();
        },
        function() {
            $(this).stop().animate({ opacity: 1 });
            $("#trois").fadeOut();
        });

    // image four    
    $("#quatre").hide();
    $("#four").animate({ opacity: 5 });
    $("#four").hover(function() {
            $(this).stop().animate({ opacity: 0.4 });
            $("#quatre").fadeIn();
        },
        function() {
            $(this).stop().animate({ opacity: 1 });
            $("#quatre").fadeOut();
        });

    //image five    
    $("#cinq").hide();
    $("#five").animate({ opacity: 5 });
    $("#five").hover(function() {
            $(this).stop().animate({ opacity: 0.4 });
            $("#cinq").fadeIn();
        },
        function() {
            $(this).stop().animate({ opacity: 1 });
            $("#cinq").fadeOut();
        });

    //image six    
    $("#sisi").hide();
    $("#six").animate({ opacity: 5 });
    $("#six").hover(function() {
            $(this).stop().animate({ opacity: 0.4 });
            $("#sisi").fadeIn();
        },
        function() {
            $(this).stop().animate({ opacity: 1 });
            $("#sisi").fadeOut();
        });

    //image seven    
    $("#sept").hide();
    $("#seven").animate({ opacity: 5 });
    $("#seven").hover(function() {
            $(this).stop().animate({ opacity: 0.4 });
            $("#sept").fadeIn();
        },
        function() {
            $(this).stop().animate({ opacity: 1 });
            $("#sept").fadeOut();
        });

    //image eight    
    $("#huit").hide();
    $("#eight").animate({ opacity: 5 });
    $("#eight").hover(function() {
            $(this).stop().animate({ opacity: 0.4 });
            $("#huit").fadeIn();
        },
        function() {
            $(this).stop().animate({ opacity: 1 });
            $("#huit").fadeOut();
        });


    //contact us section
    //submit button
    $("#suBmit").click(function(souMettre) {
        var yourName = $("#names").val();
        var yourEmail = $("#inputEmail4").val();
        var yourText = $("#exampleFormControlTextarea1").val();
        if (yourName === "" || yourEmail === "" || yourText === "") {
            alert("please fill in the required information!");
        } else {
            alert(yourName + " we have received your message. Thank you fro reaching out to us.");
        }
        souMettre.preventDefault();
        $("#names").val("");
        $("#inputEmail4").val("");
        $("#exampleFormControlTextarea1").val("");
    })

});