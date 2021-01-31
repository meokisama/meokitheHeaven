var vertSlide = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    
     loop:false,
    centeredSlides: false,
    speed: 10,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
   
});

setTimeout(() => {
    vertSlide.update();
}, 300)

vertSlide.on('slideChange', function () {
    TweenMax.to('.overlay-bg', 0.3, {
        width: '100%',
    })

    TweenMax.to('.bg', 0.3, {       
        x: '-50%',
        y: '-50%',
    })
    TweenMax.to('.over-1', 0.5, {
       height: '100%',      
    })
    TweenMax.to('.over-2', 0.5, {
        height: '100%',
        delay: '0.1'
     })
     TweenMax.to('.over-3', 0.5, {
        height: '100%',
        delay: '0.2'
     })
     TweenMax.to('.over-4', 0.5, {
        height: '100%',
        delay: '0.3'
     })   
     TweenMax.to('.over-5', 0.5, {
        height: '100%',
        delay: '0.4'
     })  

});

vertSlide.on('slideChangeTransitionEnd', function () {
    TweenMax.to('.over-1', 0.5, {
        height: 0,      
     })
     TweenMax.to('.over-2', 0.5, {
         height: 0,
         delay: '0.1'
      })
      TweenMax.to('.over-3', 0.5, {
         height: '0',
         delay: '0.2'
      })
      TweenMax.to('.over-4', 0.5, {
         height: 0,
         delay: '0.3'
      }) 

      TweenMax.to('.over-5', 0.5, {
        height: 0,
        delay: '0.4'
     }) 
    TweenMax.to('.overlay-bg', 1, {
        width: '0',
        delay: '1',
    })

    TweenMax.to('.bg', 0.4, {
        scale: '1',
        x: '-50%',
        y: '-50%',
        skewX: '0',
        skewY: '0',

    })

    TweenMax.to('.head-text', 0.3, {
        autoAlpha: 1,
        delay: 0.2,
    })
    TweenMax.to('.tag-work', 0.3, {
        autoAlpha: 1,
        delay: 0.4
    })
    TweenMax.to('.learn-more', 0.3, {
        autoAlpha: 1,
        delay: 0.6
    })
});

vertSlide.on('slideNextTransitionStart', function () {
   
    TweenMax.to('.head-text', 0.3, {
        autoAlpha: 0,
        delay: 0.4,
    })
    TweenMax.to('.tag-work', 0.3, {
        autoAlpha: 0,
        delay: 0.4,
    })
    TweenMax.to('.learn-more', 0.3, {
        autoAlpha: 0,
        delay: 0.4,
    })
  
   
});
vertSlide.on('slideNextTransitionEnd', function () {
   

});


vertSlide.on('slidePrevTransitionStart', function () {

    TweenMax.to('.head-text', 0.3, {
        autoAlpha: 0,
        delay: 0.4,
    })
    TweenMax.to('.tag-work', 0.3, {
        autoAlpha: 0,
        delay: 0.4,
    })
    TweenMax.to('.learn-more', 0.3, {
        autoAlpha: 0,
        delay: 0.4,
    })

   
});
vertSlide.on('slidePrevTransitionEnd', function () {

 
  
});

$('.to-up').on('click', function () {
    vertSlide.slidePrev();
})
$('.to-down').on('click', function () {
    vertSlide.slideNext();
})