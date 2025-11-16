import data from './data'
import './s.css'

function S () {
    return(
        <div className='s__content'>
            <h2 className='s__header'>
                Покупайте технику для кухни на Маркете
            </h2>
            <div className='s__slides_wrapper'>
        {data.map(slide=>
        <div className='s__slide_wr'>
        <div key={slide.id} className='s__slide'>
            <a className='s__link' href={slide.link}>
                <p className='s_text'>{slide.header}</p>
                <picture className='s__picture'>
                    <img className='s__img' src={slide.img} alt={slide.alt}></img>
                </picture>
            </a>
        </div>
        </div>)}
            </div>
        </div>          
    )
}

export default S