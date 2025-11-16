//Импорт Swiper
import data from './data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
//Остальные импорты
import 'swiper/css';
import './t.css'

function T () {
    return(
        <div className='t__content'>
            <h2 className='t__header'>
                Популярные бренды
            </h2>
            <div className='t__content-inner'>
            <div className='t_btn-wrapper t_btn_left' id='t_btn_left'>
                <svg className='t_swiper-prev' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.13 9.25H2.848v1.5H14.13L8.7 16.18l1.06 1.061L17 9.999 9.76 2.758 8.7 3.818l5.43 5.431z"></path></svg>
            </div>
            <div className='t_btn-wrapper t_btn_right' id='t_btn_right'>
                <svg className='t_swiper-prev' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.13 9.25H2.848v1.5H14.13L8.7 16.18l1.06 1.061L17 9.999 9.76 2.758 8.7 3.818l5.43 5.431z"></path></svg>
            </div>
        <Swiper
            slidesPerGroup={5}
            slidesPerView={6}
            modules={[Navigation]}
            speed={1000}
            navigation={{
                nextEl: '.t_btn_right',
                prevEl: '.t_btn_left',
            }}
        >
        {data.map(slide=>
        <SwiperSlide key={slide.id}>
            <p className='s_text'></p>
            <a className='t__link' href={slide.link}><img className='t__img' src={slide.img} alt={slide.alt}></img></a>
        </SwiperSlide>)}
        </Swiper>
            </div>            
        </div>
    )
}

export default T