//Импорт Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
//Остальные импорты
import bg from './img/bg.webp'
import logo from './img/logo.webp'
import data from './data'
import { useState, useEffect } from 'react';
import './w.css'

function W () {
    const [current, setcurrent] = useState(Object.keys(data)[0])
    var i = 0
    const [slides, setslides] = useState(data[current].content)

    function btnClickHandler (e) {
        var curr = e.target.getAttribute('data-c')
        var btns = document.querySelectorAll('.w_btn')
        btns.forEach(btn => {
            btn.classList.remove('active')
        })
        e.target.classList.add('active')
        setcurrent(curr)
    }
    return (
        <div className='w__content-wrapper' style={{backgroundImage: `url(${bg})`}}>
            <div className='w__contenw_header_wrapper'>
                <div className='w__cheader'>
                    <img className='w_f_line' src={logo} alt=''></img>
                    <div className='w__second_line'>
                        <span className='w_s_lines'>мобильные аксессуары </span><span className='w_s_lines_from'>от</span><span className='w_header_price'>590</span><span className='w_s_lines_curency'> ₽</span>
                    </div>
                </div>
            </div>
            <div className='w_main_content'>
                <div className='w_control_btns'>
                    { 
                        Object.keys(data).map(btn=>{
                            var res = data[btn] === Object.values(data)[0] ? <div data-c={Object.keys(data)[i]} key={btn} onClick={btnClickHandler} className={'w_btn active '}>{data[btn].name}</div> : <div data-c={Object.keys(data)[i]} key={btn} onClick={btnClickHandler} className='w_btn'>{data[btn].name}</div>
                            i = i + 1
                            return res;
                        }
                        )
                    }
                </div>
                <div className='w_cards_swiper'>
                <div className='w_btn-wrapper w_btn_left' id='w_btn_left'>
                        <svg className='w_swiper-prev' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.13 9.25H2.848v1.5H14.13L8.7 16.18l1.06 1.061L17 9.999 9.76 2.758 8.7 3.818l5.43 5.431z"></path></svg>
                    </div>
                    <div className='w_btn-wrapper w_btn_right' id='w_btn_right'>
                        <svg className='w_swiper-prev' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.13 9.25H2.848v1.5H14.13L8.7 16.18l1.06 1.061L17 9.999 9.76 2.758 8.7 3.818l5.43 5.431z"></path></svg>
                    </div>
                <Swiper
                        slidesPerGroup={5}
                        slidesPerView={6}
                        modules={[Navigation]}
                        speed={1000}
                        navigation={{
                            nextEl: '.w_btn_right',
                            prevEl: '.w_btn_left',
                        }}
                    >                    
                    {data[current].content.map(slide=>
                    <SwiperSlide key={slide.id}>
                            <div className='w__card-wrapper' key={slide.id}>
                                <a href={slide.link} className='w_slide_link'>
                                    <div className='w__img-wraper'>
                                        <img className='w__img' src={slide.img}></img>
                                        <div className='w_sail-wrapper'>
                                            {slide.sail>0 && <span className='w__sail'>{'–'+slide.sail+"%"}</span>}
                                            {slide.promo>0 && <span className='w__promo'>{'промокод –'+slide.promo+"%"}</span>}
                                            {slide.excluse>0 && <span className='w__excluse'>
                                            <svg color="#fc9700" aria-hidden="true" className="w_excluse_svg w_excluse_svg_left" data-tid="f5ba7cbf 890bc542" data-tid-prop="890bc542" viewBox="0 0 5 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 7c0 3.934 1.857 6.01 2.649 6.717.085.076.127.114.217.164.064.036.181.08.253.097.1.022.178.022.333.022H5V0H3.452c-.155 0-.233 0-.333.022-.072.016-.19.061-.253.097-.09.05-.132.088-.217.164C1.857.989 0 3.066 0 7z"></path></svg>
                                            <span className='w_excluse_txt'>эксклюзив</span>
                                            <svg color="#fc9700" aria-hidden="true" className="w_excluse_svg w_excluse_svg_right" data-tid="f5ba7cbf 890bc542" data-tid-prop="890bc542" viewBox="0 0 5 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 7c0 3.934 1.857 6.01 2.649 6.717.085.076.127.114.217.164.064.036.181.08.253.097.1.022.178.022.333.022H5V0H3.452c-.155 0-.233 0-.333.022-.072.016-.19.061-.253.097-.09.05-.132.088-.217.164C1.857.989 0 3.066 0 7z"></path></svg>
                                            </span>}
                                        </div>
                                    </div>
                                    <div className='w__descr'>
                                        <div className='w__ya'>
                                            С картой
                                            <svg className='w__ya-svg' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5.70463 8.005H6.74923V2.005H5.22981C3.70175 2.005 2.89887 2.79062 2.89887 3.94745C2.89887 4.87119 3.33916 5.41508 4.12477 5.97623L2.76074 8.005H3.89168L5.4111 5.7345L4.88448 5.38054C4.24563 4.94889 3.93484 4.6122 3.93484 3.88702C3.93484 3.24817 4.38376 2.81652 5.23844 2.81652H5.70463V8.005Z" fill="currentColor"></path><rect x="0.25" y="0.25" width="9.5" height="9.5" rx="4.75" stroke="currentColor"></rect></svg>
                                            Пэй
                                        </div>
                                        <div className='w__price-wr'>
                                            <span className='w__price-ya'>{slide.price_pay}</span> <span className='w__price_curr'>₽</span><span className='w__price-noya'>{'без: '+slide.price}</span> <span className='w__price_noya_curr'>₽</span>
                                        </div>
                                        <div>
                                            <p className='w__descript'>{slide.descript}</p>
                                        </div>
                                    </div>
                                </a>
                                <div className='w_bucket_btn'>
                                    В корзину
                                </div>
                            </div>
                        </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default W