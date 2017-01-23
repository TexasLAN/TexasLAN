/**
 * Created by Drew on 8/29/15.
 */

var elems;

$(document).ready(function() {
    setupNavBar();
    if(!isNotMobile()) {
        // Not transparent
        for(var i = 0; i < elems.length; i++) {
            elems[i].style.color = rgbToHex(119,119,119);
        }

        $('nav').css('border-width', '1');
        $('nav').css('background', 'rgba(248,248,248,1)');
    }
});


/*
 * For Scrolling Nav Bar Effect
 */

$(document).scroll(function() {
    var dWidth = $(window).width();

    var dHeight = $(window).height();
    var transparency = $(this).scrollTop() / dHeight;

    if (dHeight >= $(this).scrollTop() && isNotMobile()) {
        // Part transparent
        var textColor = Math.floor(255 - transparency * 136);
        for(var i = 0; i < elems.length; i++) {
            elems[i].style.color = rgbToHex(textColor,textColor,textColor);

        }

        $('nav').css('border-width', '0');
        $('nav').css('background', 'rgba(248,248,248,' + transparency + ')');
    } else {
        // Not transparent
        for(var i = 0; i < elems.length; i++) {
            elems[i].style.color = rgbToHex(119,119,119);
        }

        $('nav').css('border-width', '1');
        $('nav').css('background', 'rgba(248,248,248,1)');

    }
});

function isNotMobile() {
    return ($(window).width() > 767);
}

function setupNavBar() {
    elems = document.getElementsByClassName("navtext");
    for(var i = 0; i < elems.length; i++) {
        elems[i].style.color = rgbToHex(255,255,255);
    }

    $('nav').css('border-width', '0');
    $('nav').css('background', 'rgba(248,248,248,0)');
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}