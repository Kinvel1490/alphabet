//Импорт Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
//Остальные импорты
import data from "./data";
import './q.css'

function Q () {
    return(
        <div className='q__content'>
            <div className='q_btn-wrapper q_btn_left' id='q_btn_left'>
                <svg className='swiper-prev' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.13 9.25H2.848v1.5H14.13L8.7 16.18l1.06 1.061L17 9.999 9.76 2.758 8.7 3.818l5.43 5.431z"></path></svg>
            </div>
            <div className='q_btn-wrapper q_btn_right' id='q_btn_right'>
                <svg className='swiper-prev' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.13 9.25H2.848v1.5H14.13L8.7 16.18l1.06 1.061L17 9.999 9.76 2.758 8.7 3.818l5.43 5.431z"></path></svg>
            </div>
            <Swiper
            slidesPerGroup={4}
            slidesPerView={4}
            modules={[Navigation]}
            speed={1000}
            navigation={{
                nextEl: '.q_btn_right',
                prevEl: '.q_btn_left',
            }}>
                {data.map(el=>
                    <SwiperSlide key={el.id}>
                        <div className='q__card'>
                            <img className='q__img' src={el.img} alt={el.alt}></img>    
                            <p className='q__txt'>{el.head}</p>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default Q;