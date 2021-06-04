$(document).ready(function(){

// Picture Generator

    let randomDots = [
        "images/browntone-dots.jpg",
        "images/bubble-dots.jpg",
        "images/colourful-dots.jpg",
        "images/greyscale-dots.jpg",
        "images/sparse-dots.jpg",
        "images/constellation-dots.png",
        "images/twister-dots.jpg"
    ];

    let dotsPicAltText = [
        "Small, clustered dots in brown and yellow tones.",
        "Pink and purple bubble-like dots, perhaps in liquid.",
        "Coloured dots of different sizes, crowded and overlapping.",
        "Coarse white dots on a black background.",
        "Small, sparse coloured dots on a white background.",
        "White dots joined into constellations on a deep blue background.",
        "Bold coloured dots on a black background."
    ]
    function changeDots() {
        let dotsImgChoice = Math.floor(Math.random()*7);
        $('img').attr('src', randomDots[dotsImgChoice]);
        $('img').attr('alt', dotsPicAltText[dotsImgChoice]);
    };
    changeDots();

// Rating Mechanism

    const $dot1 = $('.dot1');
    const $dot2 = $('.dot2');
    const $dot3 = $('.dot3');
    const $dot4 = $('.dot4');
    const $dot5 = $('.dot5');
    let rating;

    $dot1.on('click', function(){
        if ( $dot1.hasClass('filled') ) {
            if ( $dot2.hasClass('filled') ) {
                $dot2.removeClass('filled');
                $dot3.removeClass('filled');
                $dot4.removeClass('filled');
                $dot5.removeClass('filled');
                rating = 1;
            } else {
                $dot1.removeClass('filled');
                rating = 0;
            }
        } else {
            $dot1.addClass('filled');
            rating = 1;
        }
    });

    $dot2.on('click', function(){
        if ( $dot2.hasClass('filled') ) {
            if ( $dot3.hasClass('filled') ) {
                $dot3.removeClass('filled');
                $dot4.removeClass('filled');
                $dot5.removeClass('filled');
                rating = 2;
            } else {
                $dot2.removeClass('filled');
                rating = 1;
            }
        } else {
            $dot1.addClass('filled');
            $dot2.addClass('filled');
            rating = 2;
        }
    });

    $dot3.on('click', function(){
        if ( $dot3.hasClass('filled') ) {
            if ( $dot4.hasClass('filled') ) {
                $dot4.removeClass('filled');
                $dot5.removeClass('filled');
                rating = 3;
            } else {
                $dot3.removeClass('filled');
                rating = 2;
            }
        } else {
            $dot1.addClass('filled');
            $dot2.addClass('filled');
            $dot3.addClass('filled');
            rating = 3;
        }
    });

    $dot4.on('click', function(){
        if ( $dot4.hasClass('filled') ) {
            if ( $dot5.hasClass('filled') ) {
                $dot5.removeClass('filled');
                rating = 4;
            } else {
                $dot4.removeClass('filled');
                rating = 3;
            }
        } else {
            $dot1.addClass('filled');
            $dot2.addClass('filled');
            $dot3.addClass('filled');
            $dot4.addClass('filled');
            rating = 4;
        }
    });

    $dot5.on('click', function(){
        if ( $dot5.hasClass('filled') ) {
            $dot5.removeClass('filled');
            rating = 4;
        } else {
            $dot1.addClass('filled');
            $dot2.addClass('filled');
            $dot3.addClass('filled');
            $dot4.addClass('filled');
            $dot5.addClass('filled');
            rating = 5;
        }
    });

// Submission & Feeback Mechanism

    let feedback = [
        "Can't please everyone.",
        "I'll try harder next time.",
        "I kinda liked these ones.",
        "Perfectly average dots.",
        "4 out of 5 dots recommend flossing.",
        "The champagne & caviar of dots."
    ]

    $('button').on('click', function() {
        $('.feedback').text(feedback[rating]);
        setTimeout(function() {
            changeDots();
            $('.dot').removeClass('filled');
            rating = 0;
            $('.feedback').text("");
        }, 1750);
    });

});