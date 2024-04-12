// ------------------------------------ //
// INSTALL
// 1. npm install swiper
// 2. Follow "EXAMPLE USE" above

// RESOURCES
// Demos: https://swiperjs.com/demos
// Getting Started: https://swiperjs.com/get-started
// ------------------------------------ //

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const setupSwiper = (container, options) => {
    const swiperOptions = {
        ...options,
        spaceBetween: 30,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }

    if(options && options.autoplay) {
        swiperOptions.autoplay = {
            delay: options.autoplay.delay || 6000,
            disabledOnInteraction: options.autoplay.disabledOnInteraction || false
        }
    }

    const swiper = new Swiper(container, swiperOptions);
}

export default setupSwiper;

// EXAMPLE USE
// setupSwiper('.mvp-swiper', { slidesPerView: 3, loop: true, autoplay: { delay: 1000 } })
// setupSwiper('.avoid-swiper', { slidesPerView: 2 })
