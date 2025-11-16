import data from './data'
import './r.css'

const prepositions = ["без", "между", "под", "в", "на", "по", "вокруг", "о", "по", "про", "и", "для"];

function R () {
    data.map(el=>{
        el.header = addNbsp(el.header)
    });

    return(
        <div className='r__content'>
            <h3 className='r__header'>Электроника</h3>
            <div className='r_img-wrapper'>
                {data.map(el=>
                    <a href={el.link} key={el.id}>
                        <div className='r__img-content'>
                            <p className='r__img_header'>{el.header}</p>
                            <img className='r__img' src={el.img} alt={el.alt}></img>
                        </div>
                    </a>
                )}
            </div>
        </div>
    )
}

function addNbsp(str) {
    return str.replace(/(\S+?)( )/g, (_, p) =>
    p + (prepositions.includes(p.toLowerCase()) ? '\u00A0' : ' '))
  }

export default R