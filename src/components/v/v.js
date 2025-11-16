import data from './data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';

import './v.css'

function V () {
 return(
    <div className='v__content'>
            <h2 className='v__header'>
                Популярные бренды
            </h2>
            <div className='v__content-inner'>
            <div className='v_btn-wrapper v_btn_left' id='v_btn_left'>
                <svg className='v_swiper-prev' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.13 9.25H2.848v1.5H14.13L8.7 16.18l1.06 1.061L17 9.999 9.76 2.758 8.7 3.818l5.43 5.431z"></path></svg>
            </div>
            <div className='v_btn-wrapper v_btn_right' id='v_btn_right'>
                <svg className='v_swiper-prev' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.13 9.25H2.848v1.5H14.13L8.7 16.18l1.06 1.061L17 9.999 9.76 2.758 8.7 3.818l5.43 5.431z"></path></svg>
            </div>
        <Swiper
            slidesPerGroup={4}
            slidesPerView={5}
            modules={[Navigation]}
            speed={1000}
            navigation={{
                nextEl: '.v_btn_right',
                prevEl: '.v_btn_left',
            }}
        >
        {data.map(slide=>
        <SwiperSlide key={slide.id}>
            <a className='v__link' href={slide.link}><img className='v__img' src={slide.img} alt={slide.alt}></img></a>
        </SwiperSlide>)}
        </Swiper>
            </div>            
        </div>
 )
}

export default V