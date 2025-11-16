//Импорт Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
//Остальные импорты
import bg from './img/bg.webp'
import data from './data'
import './x.css'
import './fonts/fonts.css'
import Slide from './slide';

function X (){

    return (
        <div className='x_content-wrapper' style={{backgroundImage: `url(${bg})`}}>
            <h1 className='x_header'>Подписка Яндекс Плюс Мульти</h1>
            <div className='x_cards_swiper'>
            <div className='x_btn-wrapper x_btn_left' id='x_btn_left'>
                        <svg className='x_swiper-prev' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.13 9.25H2.848v1.5H14.13L8.7 16.18l1.06 1.061L17 9.999 9.76 2.758 8.7 3.818l5.43 5.431z"></path></svg>
                    </div>
                    <div className='x_btn-wrapper x_btn_right' id='x_btn_right'>
                        <svg className='x_swiper-prev' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.13 9.25H2.848v1.5H14.13L8.7 16.18l1.06 1.061L17 9.999 9.76 2.758 8.7 3.818l5.43 5.431z"></path></svg>
                    </div>
                <Swiper
                        slidesPerGroup={4}
                        slidesPerView={5}
                        modules={[Navigation]}
                        speed={1000}
                        navigation={{
                            nextEl: '.x_btn_right',
                            prevEl: '.x_btn_left',
                        }}
                    >                    
                    {data.map(slide=>
                        <SwiperSlide key={slide.id}>
                            <Slide props={slide}></Slide>
                        </SwiperSlide>
                        )}
                </Swiper>
            </div>
        </div>
    )
}

export default X