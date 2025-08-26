$(function () {

    $(window).scroll(function () {
        $('.da-box .title').each(function () {
            let dive = $(this).offset().scrollTop
            if ($(window).scrollTop() >= dive) {
                $(this).addClass(animate__jello)
            }
        })
    })

    // Main-swiper
    $('.swiper').hover(function () {
        swiper.autoplay.stop();
    }, function () {
        swiper.autoplay.start();
    });


    // Header - mobile
    $('.header-hamburger').click(function () {
        $('.mobile-menu').slideToggle()
        $('.header-hamburger').toggleClass('dark')
        $('.header-search').toggleClass('dark')
        if($('.header-hamburger').hasClass('dark')== true){
            $('body').css('overflow', 'hidden')
        }else{
            $('body').css('overflow', 'visible')
        }
    })

    // ★ Dive & Aim
    $('.active-map li').click(function () {
        let mapclick = ['image/B-section2/A-active11.png', 'image/B-section2/A-active22.png', 'image/B-section2/A-active33.png', 'image/B-section2/A-active44.png', 'image/B-section2/A-active55.png', 'image/B-section2/A-active66.png', 'image/B-section2/A-active77.png', 'image/B-section2/A-active88.png', 'image/B-section2/A-active99.png', 'image/B-section2/A-active99.png']

        let idx = $(this).index()
        let map = $('.map')
        map.css({
            'background-image': `url(${mapclick[idx]})`
        })
        $('.slidenum > .swiper').fadeOut(1100)
        $('.slidenum > .swiper').eq(idx).fadeIn(1100)
    })
    $('.active-map li').eq(6).trigger('click');

    // ★ Footer

    $(window).scroll(function () {
        console.log($(window).scrollTop())

        if ($(window).scrollTop() >= 500) {
            $('.gotop').fadeIn()
        } else {
            $('.gotop').fadeOut()
        }
    })
    $('.gotop').click(function (e) {
        e.preventDefault()
        $('html,body').stop().animate({
            scrollTop: 0
        }, 500)
    })
    $('.buttonbox div').click(function () {
        $(this).addClass('on').siblings().removeClass('on')
        let idx = $(this).index()

        $('.imgframebox > .imgframe').hide()
        $('.imgframebox > .imgframe').eq(idx).show()
    })
    $('.buttonbox div').eq(0).trigger('click')
    /*trigger은 강제로 이벤트를 실행시키게 하는것*/




})
