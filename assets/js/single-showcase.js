var vertSlide = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: '1',
    loop: false,
    centeredSlides: false,
    speed: 800,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
});

setTimeout(() => {
    vertSlide.update();
}, 500)

vertSlide.on('slideChange', function () {
    TweenMax.to('.overlay-bg', 0.3, {
        width: '100%',
    })
    TweenMax.to('.bg', 0.3, {
        scale: '0.95',
        x: '-50%',
        y: '-50%',
    })

});

vertSlide.on('slideChangeTransitionEnd', function () {
    TweenMax.to('.overlay-bg', 1, {
        width: '0',
    })
    TweenMax.to('.bg', 0.4, {
        scale: '1',
        x: '-50%',
        y: '-50%',
        skewX: '0',
        skewY: '0',

    })

    TweenMax.to('.head-text', 0.3, {
        marginTop: '0',
        delay: 0.2,
    })
    TweenMax.to('.tag-work', 0.3, {
        marginTop: '0',
        delay: 0.4
    })
    TweenMax.to('.learn-more', 0.3, {
        marginTop: '0',
        delay: 0.6
    })
});

vertSlide.on('slideNextTransitionStart', function () {
    TweenMax.to('.head-text', 0.3, {
        marginTop: '90px',
        delay: 0,
    })
    TweenMax.to('.tag-work', 0.3, {
        marginTop: '25px',
        delay: 0,
    })
    TweenMax.to('.learn-more', 0.3, {
        marginTop: '100px',
        delay: 0,
    })
});
vertSlide.on('slideNextTransitionEnd', function () {
    TweenMax.to('.head-text', 0, {
        marginTop: '-90px',
    })
    TweenMax.to('.tag-work', 0, {
        marginTop: '-25px',
    })
    TweenMax.to('.learn-more', 0, {
        marginTop: '-100px',
    })
});


vertSlide.on('slidePrevTransitionStart', function () {
    TweenMax.to('.head-text', 0.3, {
        marginTop: '-90px',
        delay: 0.1,
    })
    TweenMax.to('.tag-work', 0.3, {
        marginTop: '-25px',
        delay: 0,
    })
    TweenMax.to('.learn-more', 0.3, {
        marginTop: '-110px',
        delay: 0,
    })
});
vertSlide.on('slidePrevTransitionEnd', function () {
    TweenMax.to('.head-text', 0, {
        marginTop: '90px',
    })
    TweenMax.to('.tag-work', 0, {
        marginTop: '25px',
    })
    TweenMax.to('.learn-more', 0, {
        marginTop: '110px',
    })
});

$('.to-up').on('click', function () {
    vertSlide.slidePrev();
})
$('.to-down').on('click', function () {
    vertSlide.slideNext();
})