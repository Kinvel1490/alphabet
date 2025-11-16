import { useState, useEffect } from 'react';

function Slide (props) {
    const {sail, img, expire, descript, link, price} = Object.values(props)[0]

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = expire

    function getTime (deadline) {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    }

    useEffect(() => {
        if (expire !== '') {
            const interval = setInterval(() => getTime(deadline), 1000);
    
            return () => clearInterval(interval);
        }
      }, []);

    return (
        <div className='x__card-wrapper'>
            <a href={link} className='x_slide_link'>
                <div className='x__img-wraper'>
                    <img className='x__img' src={img}></img>
                    <div className='x_sail-wrapper'>
                        {sail>0 && <span className='x__sail'>{'–'+sail+"%"}</span>}
                        {expire !== '' && <span className='x__expire'>
                        {days<10 ? '0' + days : days}:
                        {hours<10 ? '0' + hours : hours}:
                        {minutes<10 ? '0' + minutes : minutes}:
                        {seconds<10 ? '0' + seconds : seconds}
                        </span>}
                    </div>
                </div>
                <div className='x__descr'>
                    <div className='x__price-wr'>
                        <span className='x__price-ya'>{parseInt (price * (100-sail) /100).toLocaleString('ru-RU')}</span> <span className='x__price_curr'>₽</span><span className='x__price-noya'>{price} ₽</span>
                    </div>
                    <div>
                        <p className='x__descript'>{descript}</p>
                    </div>
                </div>
            </a>
            <div className='x_bucket_btn_wrapper'>
                <div className='x_bucket_btn'>
                    В корзину
                </div>
            </div>

        </div>
    )
}

export default Slide