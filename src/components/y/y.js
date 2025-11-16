import './y.css'
import data from './data'

const prepositions = ["без", "между", "под", "в", "на", "по", "вокруг", "или", "о", "по", "про", "и", "для", "1", "2", "4", "6", "удобный"];

function Y (){
    data.map(el=>{
        el.txt = addNbsp(el.txt)
    });
    data.map(el=>{
        el.subtxt = addNbsp(el.subtxt)
    });

    return(
        <div className="y__content">
            {data.map(el=>
                <div className='y__card' key={el.id}>
                    <img src={el.img} alt={el.alt} className='y__card_img'></img>
                    <div className='y__card_txt_wrapper'>
                        <p className='y__card_txt'>{el.txt}</p>
                        <p className='y__card_sub_txt'>{el.subtxt}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

function addNbsp(str) {
    return str.replace(/(\S+?)( )/g, (_, p) =>
    p + (prepositions.includes(p.toLowerCase()) ? '\u00A0' : ' '))
  }

export default Y