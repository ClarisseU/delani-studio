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
    })
});