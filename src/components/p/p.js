//Импорт Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
//Остальные импорты
import slides from './data';
import './p.css';
import star from './img/star.svg';
import star_inactive from './img/star_inactive.svg';
// import arrow from './img/arrow.svg'

function P () {
    return(
        <div className='p__content'>
            <div className='p_btn-wrapper p_btn_left' id='p_btn_left'>
                <svg className='swiper-prev' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.13 9.25H2.848v1.5H14.13L8.7 16.18l1.06 1.061L17 9.999 9.76 2.758 8.7 3.818l5.43 5.431z"></path></svg>
            </div>
            <div className='p_btn-wrapper p_btn_right' id='p_btn_right'>
                <svg className='swiper-prev' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.13 9.25H2.848v1.5H14.13L8.7 16.18l1.06 1.061L17 9.999 9.76 2.758 8.7 3.818l5.43 5.431z"></path></svg>
            </div>
        <Swiper
            slidesPerGroup={4}
            slidesPerView={4}
            modules={[Navigation]}
            navigation={{
                nextEl: '.p_btn_right',
                prevEl: '.p_btn_left',
            }}
        >
        {slides.map(slide=>
        <SwiperSlide key={slide.id}>
                <div className='p__card-wrapper' key={slide.id}>
                <a href={slide.link}>
                <div className='p__shoe-wraper'>
                        <div className='p__shoe' style={{backgroundImage: `url(${slide.img})`}}>
                            <span className='p__sail'>{'-'+slide.sail+"%"}</span>
                        </div>
                    </div>
                    <div className='p__descr'>
                        <div className='p__ya'>
                            С картой
                            <svg className='p__ya-svg' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path><rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor"></rect></svg>
                             Пэй
                        </div>
                        <div className='p__price-wr'>
                            <span className='p__price-ya'>{slide.price_pay}</span> <span className='p__price_curr'>₽</span><span className='p__price-noya'>{'без: '+slide.price}</span> <span className='p__price_noya_curr'>₽</span>
                        </div>
                        <div className='p__fb-wr'>
                            <div className='p__stars_wrapper'>
                                <div className='p__stars'>
                                    <span className='p__star' style={{backgroundImage: `url(${star_inactive})`}}></span>
                                    <span className='p__star' style={{backgroundImage: `url(${star_inactive})`}}></span>
                                    <span className='p__star' style={{backgroundImage: `url(${star_inactive})`}}></span>
                                    <span className='p__star' style={{backgroundImage: `url(${star_inactive})`}}></span>
                                    <span className='p__star' style={{backgroundImage: `url(${star_inactive})`}}></span>
                                </div>
                                <div className='p__stars p__satrs_abs' style={{width: `calc(${slide.rait} * 20%`}}>
                                    <span className='p__star' style={{backgroundImage: `url(${star})`}}></span>
                                    <span className='p__star' style={{backgroundImage: `url(${star})`}}></span>
                                    <span className='p__star' style={{backgroundImage: `url(${star})`}}></span>
                                    <span className='p__star' style={{backgroundImage: `url(${star})`}}></span>
                                    <span className='p__star' style={{backgroundImage: `url(${star})`}}></span>
                                </div>
                            </div>                            
                            <span className='p__feedback'>{slide.feedback} {slide.feedback === '11' || slide.feedback.at(-1) === '12' || slide.feedback.at(-1) === '13' || slide.feedback.at(-1) === '14' ? ' отзывов' : slide.feedback.at(-1) === '1' ? ' отзыв' : slide.feedback.at(-1) === '2' || slide.feedback.at(-1) === '3' || slide.feedback.at(-1) === '4' ? ' отзыва' : ' отзывов' }</span>
                        </div>
                        <div>
                            <p className='p__descript'>{slide.descript}</p>
                        </div>
                    </div>
                </a>
                </div>
            </SwiperSlide>
            )}
        </Swiper>
        </div>
    )
}

// function checkStatus (swiper){
//     swiper.is
// }

export default P;