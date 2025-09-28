
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function setupSwiper(){
    new Swiper('.swiper', {
        modules: [Autoplay, Pagination],
        loop: true,
        autoplay: {
            delay: 2000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}
