import IMGS from './img/images';
import './o.css'

function O () {
    return(
        <div className='o__wrapper'>
            <div className='o__scroller'>
            <div className='o__scrolls'>
                {IMGS.map(el=><div className='o__card' key={el.id}><a href={el.link}><img src={el.img} alt={el.alt} className='o__img'></img></a></div>)}
            </div>
            <div className='o__scrolls-cloned'>
                {IMGS.map(el=><div className='o__card' key={el.id}><a href={el.link}><img src={el.img} alt={el.alt} className='o__img'></img></a></div>)}
            </div>
            </div>
        </div>
    )
}

export default O;