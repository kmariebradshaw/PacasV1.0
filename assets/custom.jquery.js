$(window).scroll(function(){
    if ($(window).scrollTop() >= 40) {
        $('nav').addClass('fixed-nav');
        $('main').addClass('upper-pad')
    }
    else {
        $('nav').removeClass('fixed-nav');
                $('main').removeClass('upper-pad')

    }
});
