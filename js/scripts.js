$(document).ready(function() {
    // $("#primo").hide();
    // $("#segundo").hide();
    // $("#tertio").hide();
    $("#prem").click(function() {
        $("img#prem").toggle();
        $("p#prem").toggle();
        $("p#primo").toggle();

    });
    $("#sec").click(function() {
        $("#segundo").show();
        $("img#sec").hide();
        $("p#segundo").show();
        $("p#sec").show();
    });


    $("#tert").click(function() {
        $("p#tert").toggle();
        $("img#tert").toggle();
        $("p#tertio").toggle();
    })
});