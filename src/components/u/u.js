import './u.css'
import data from './data'

function U (){
    return(
        <div className="u__content">
            {data.map(el=>
                <div className='u__card' key={el.id}>
                    <img src={el.img} alt={el.alt} className='u__card_img'></img>
                    <p className='u__card_txt'>{el.txt}</p>
                </div>
            )}
        </div>
    )
}

export default U