/*------------------
//
//  main app js file
//
//---------------*/
$(function() {
    function scaleBannerVideoSize(element) {
            $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
    }

    $('.carousel').carousel({
        interval: 2500,
        wrap: true,
        keyboard: true
    })

    $('#gallaryId').carousel({
        interval: 2500,
        wrap: true,
        keyboard: true
    })

    $('#dialogCarousel').carousel({
        interval: 2500
    })
    if ($('.responsive-calendar').responsiveCalendar) {
        $('.responsive-calendar').responsiveCalendar();
    }

    var from, to, subject, text;
    $('#send_email').click(function() {
        to = $('#to').val();
        subject = $('#subject').val();

        text = $('#content').val();
        $('#message').text('Sending E-mail...Please wait');
        $.get('http://localhost:3000/send', {
            to: to,
            subject: subject,
            text: text
        }, function(data) {
            if (data == 'sent') {
                $('#message').empty().html('Email is been sent at ' + to + '.Please check inbox!');
            }

        });
    });
})

$(window).load(function() {
    $('#landingVideo').get(0).play()
})
var checkScroll = function(event) {
    var scrollPos = document.body.scrollTop
    var nextPos = 0
    if (scrollPos > window.innerHeight) {
      document.getElementById('mainNavbar').style.opacity = 1
    }
}.bind(this)


$('.toMainPartButton').click(function() {
    $('.landPageContainer').stop().animate({
        scrollTop: window.innerHeight
    }, '300', 'swing')
})
var isScrollComplete = true;
$('.landPageContainer').scroll(checkScroll);
$(document).scroll(()=>{
    document.getElementById('mainNavbar').style.opacity = 0;
});
