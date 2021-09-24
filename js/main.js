var $status = $(".slider-nums");
var $slickElement = $('.vertical-slider');
$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text("0" + i);
});

$(document).ready(function () {
    $(".vertical-slider").slick({
        vertical: true,
        arrows: false,
        dots: true,
        appendDots: $(".about__navigation"),
        infinity: true,
        // autoplay: true,
        autoplaySpeed: 6000,
    });
});