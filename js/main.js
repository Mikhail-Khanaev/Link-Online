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
        infinity: false,
        // autoplay: true,
        autoplaySpeed: 6000,
        verticalSwiping: true,
        // touchThreshold: 4,
    });
    $(".works__slider").slick({
        arrows: true,
        slidesToShow: 5,
        initialSlide: 2,
        centerMode: true,
        // variableWidth: true,
        focusOnSelect: true,
        centerPadding: "0",



        responsive: [
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    centerMode: true,
                    variableWidth: true,
                }
            }

        ],
    });
});