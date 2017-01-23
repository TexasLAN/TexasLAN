/**
 * Created by Drew on 8/29/15.
 */

$(document).ready(function() {
    setupCardClick();
});

/*
 * Card Stuff
 */

function setupCardClick() {
    console.log("ayy");
    var cards = document.getElementsByClassName("card");

    $('.card').click(function(event) {
        console.log("clicked");

        $(this).children("div:last").toggle('shown-card');

        //var cardDetail = $(this).children
        //cardDetail[0].toggle('shown-card');
    });
}