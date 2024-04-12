/*

--------------------
    INSTALL
-------------------
1. npm install swiper

-------------------
    HOW TO USE
-------------------
- HTML - 
1. Add classes `swiper` and a container name like `mvp-swiper' to the relevent div:
div class="swiper mvp-swiper">

- JS -
2. In your main JS file:
setupSwiper('.mvp-swiper', { slidesPerView: 3, loop: true })
setupSwiper('.avoid-swiper', { slidesPerView: 2 })

3. To add AUTOPLAY, add 'is-auto' class and 'data-delay="3000"' to the element, otherwise, it defaults to 6000
<div class="swiper mvp-swiper is-auto" data-delay="3000">

-------------------
    RESOURCES
-------------------
- Demos: https://swiperjs.com/demos
- Getting Started: https://swiperjs.com/get-started

*/

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const setupSwiper = (container, options) => {
    const swiperContainer = document.querySelector(`${container}`);
    
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

    if(swiperContainer.classList.contains('is-auto')) {
        swiperOptions.autoplay = {
            delay: swiperContainer.dataset.delay || 5000,
        }
    }

    const swiper = new Swiper(container, swiperOptions);
}

export default setupSwiper;
