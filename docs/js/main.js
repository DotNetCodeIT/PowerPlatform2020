$(window).load(function () {
    $("#preloader").fadeOut("slow");
});

$(document).ready(function () {


    new WOW().init();


    $('#top-nav').onePageNav({
        currentClass: 'current',
        changeHash: true,
        scrollSpeed: 1200
    });

    //animated header class
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //console.log(scroll);
        if (scroll > 200) {
            //console.log('a');
            $(".navigation").addClass("animated");
        } else {
            //console.log('a');
            $(".navigation").removeClass("animated");
        }
    });

    

    $(".about-slider").owlCarousel({
        singleItem: true,
        pagination: true,
        autoPlay: 5000,
    });
    

    $year = $('#countdown_dashboard').data('year');
    $month = $('#countdown_dashboard').data('month');
    $day = $('#countdown_dashboard').data('day');
    $hour = $('#countdown_dashboard').data('hour');
    $min = $('#countdown_dashboard').data('min');
    $sec = $('#countdown_dashboard').data('sec');

    $('#countdown_dashboard').countDown({
        targetDate: {
            'day': $day,
            'month': $month,
            'year': $year,
            'hour': $hour,
            'min': $min,
            'sec': $sec,
        },
        omitWeeks: true
    });

});