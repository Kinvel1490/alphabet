import opt1 from './img/optimize.webp'
import opt2 from './img/optimize2.webp'
import opt3 from './img/optimize3.webp'
import opt4 from './img/optimize4.webp'
import './n.css'

const md = [
    {
        id: 1,
        img: opt1,
        header: "Примерка",
        txt: "Покупайте то, что точно подойдёт"
    },
    {
        id: 2,
        img: opt2,
        header: "Сплитуйте",
        txt: "Делите оплату на 4 части и выплачивайте постепенно"
    },
    {
        id: 3,
        img: opt3,
        header: "Частичный выкуп",
        txt: "Оплачивайте все или несколько товаров после получения"
    },
    {
        id: 4,
        img: opt4,
        header: "Удобный возврат",
        txt: "Курьером или в пункт выдачи в течение 7 дней"
    }
]

function O () {
    const content = md.map(el=><div className='n__card-wrapper' key={el.id}>
        <img className='n__img' src={el.img} alt=''></img>
        <div>
            <p className='n__header'>{el.header}</p>
            <p className='n__text'>{el.txt}</p>
        </div>
    </div>)
    return (
        <div className='n__content-wrapper'>
            {content}
        </div>
    )
}

export default O;