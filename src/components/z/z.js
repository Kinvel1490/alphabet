import logo from './img/logo.svg'
import './z.css'
import { useEffect, useState } from 'react'
import data from './data'

function Z () {
    const [menushow, setmenushow] = useState(false)
    const [curMenu, setcurMenu] = useState(Object.values(data)[0].content)
    const [curLink, setcurLink] = useState(Object.keys(data)[0])
    const [curMenuRight, setcurMenuRight] = useState(Object.values(data)[0].content[0])

    function katalogClickHander (e) {
        e.preventDefault();
        setmenushow(!menushow)
        if(!document.querySelector('.z_menu_shown')){
            document.querySelector('.z_modal_content_wrapper').classList.add('z_menu_shown')
            document.querySelector('.z_modal_content_wrapper').classList.remove('z_menu_hidden')
            document.querySelector('.z_modal_cover').classList.remove('z_modal_cover_hidden')
        } else {
            document.querySelector('.z_modal_content_wrapper').classList.remove('z_menu_shown')
            document.querySelector('.z_modal_content_wrapper').classList.add('z_menu_hidden')
            document.querySelector('.z_modal_cover').classList.add('z_modal_cover_hidden')
        }
    }

    function linkClickHandler (e) {
        e.preventDefault()
        setcurLink(e.target.getAttribute('data-c'))
        setcurMenu(data[e.target.getAttribute('data-c')].content)
    }

    function menuHoverHandler (e) {
        curMenu.map(el=>{
            if (el.slug === e.target.closest('.z_modal_content_left_list_item').getAttribute('data-c')){
                setcurMenuRight(el);
            }
        })
        document.querySelectorAll('.z_modal_content_left_list_item').forEach(el=>el.classList.remove('z_modal_content_left_list_item_hovered'))
        e.target.closest('.z_modal_content_left_list_item').classList.add('z_modal_content_left_list_item_hovered')
    }

    
    useEffect (()=>{
        window.addEventListener('scroll', ()=>{
            console.log(window.pageYOffset)
            if(window.pageYOffset > 180){
                document.querySelector('.z_menu_wrapper').classList.add('z_shown_menu_styles')
            } else {
                if(!menushow){
                    document.querySelector('.z_menu_wrapper').classList.remove('z_shown_menu_styles')
                }
            }
        })
    }
    )

    return (
        <div className="z_top_content_wrapper">
            <div className={menushow ? 'z_menu_wrapper z_shown_menu_styles' : window.pageYOffset > 180 ? 'z_menu_wrapper z_shown_menu_styles' : 'z_menu_wrapper'}>
                <div className="z_top_menu_wrapper">
                    <div className="z_top_menu">
                        <div className="z_top_menu_items">
                        {Object.keys(data).map(el=>
                            <div className={curLink === el ? 'z_top_menu_item_wr active_link' : 'z_top_menu_item_wr'} key={el}>
                                <a className={'z_top_menu_item'} onClick={linkClickHandler} href='' data-c={el}>{data[el].name}</a>
                            </div>  
                        )}
                        </div>
                        <div className="z_top_menu_logo">
                            <a href=''>
                                <svg className="z_top_menu_logo_svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="139" height="25" viewBox="0 0 139 25" fill="#fff"><path fillRule="evenodd" clipRule="evenodd" d="M2.6849 12.5001H2.86537V4.13041L2.16607 1.22021H0.000488281L2.6849 12.5001ZM6.81304 19.471H4.54033V23.7799H6.31676C7.64769 23.7799 9.18164 22.1782 9.45234 19.471V23.7799H10.9186C11.9337 23.7799 12.633 22.8098 13.1519 20.6216L16.0393 8.52956V21.6142H16.2198C16.2361 21.5619 16.2536 21.506 16.2722 21.4466C16.6383 20.2766 17.4233 17.7677 18.0244 15.32L21.5209 1.22021H19.3554L16.7837 11.6428L16.0393 8.52956V1.22021H15.8588L12.7458 14.2146L9.63281 1.22021H9.45234V8.52956L8.70792 11.6428L6.15886 1.22021H3.99328L8.0763 17.9369L8.00862 18.3656C7.89583 19.0198 7.55746 19.471 6.81304 19.471ZM9.45234 8.52956L11.7082 17.9369L11.6405 18.3656C11.5277 19.0198 11.1893 19.471 10.4449 19.471H9.45234V8.52956ZM2.86537 23.7799V19.471H1.06072V23.7799H2.86537ZM22.6263 4.13041V12.5001H22.8067L25.4912 1.22021H23.3256L22.6263 4.13041ZM33.545 6.90445L37.724 13.8346H37.7249L41.2281 6.90445H43.3572L38.7937 15.906C38.0329 17.4245 37.2339 18.1843 34.9526 18.1843H32.4809V16.0952H35.3325C35.9729 16.0952 36.2575 16.001 36.5012 15.671L31.2637 6.90445H33.545ZM59.2527 14.9178V6.90445H57.1991V18.1843H59.1005L65.2612 10.1709V18.1843H67.3147V6.90445H65.4133L59.2527 14.9178ZM130.138 6.90445V18.1843H132.192V8.99356H139V6.90445H130.138ZM52.6356 11.3856H46.6271V6.90445H44.5735V18.1843H46.6271V13.4747H52.6356V18.1843H54.6891V6.90445H52.6356V11.3856ZM92.2243 6.90445H97.586C100.438 6.90445 101.997 7.9299 101.997 10.4366C101.997 12.9434 100.211 14.007 97.3582 14.007H94.2779V18.1843H92.2243V6.90445ZM94.2769 12.0317H97.8137V12.0326C99.2204 12.0326 99.8673 11.5767 99.8673 10.5131C99.8673 9.44941 99.2204 8.99356 97.8137 8.99356H94.2769V12.0317ZM109.793 15.9432L105.61 6.90445H103.594V18.1843H105.648V11.2561L108.767 18.1843H110.668L113.786 11.2561V18.1843H115.839V6.90445H113.824L109.793 15.9432ZM117.056 18.1843L121.81 6.90445H124.092L128.883 18.1843H126.754L125.677 15.6021H120.178L119.11 18.1843H117.056ZM122.915 8.98237L120.963 13.7031H124.884L122.915 8.98237ZM79.37 9.71509C79.37 8.08185 78.3815 6.90445 76.0619 6.90445H69.8257V18.1843H75.7959C78.0772 18.1843 79.3709 16.855 79.3709 14.956C79.3709 13.6267 78.6102 12.715 77.1652 12.4493C78.5719 12.0317 79.3709 11.0817 79.3709 9.71509H79.37ZM77.3547 14.7286C77.3547 15.6021 76.8227 16.1334 75.8332 16.1334H71.8783V13.361H75.8332C76.9356 13.361 77.3547 13.9306 77.3547 14.7286ZM75.7576 11.5385H71.8783V8.95534H75.795C77.0122 8.95534 77.3538 9.52492 77.3538 10.2465C77.3538 10.9298 77.0112 11.5376 75.7567 11.5376L75.7576 11.5385ZM89.9421 18.1843H81.4618V6.90445H90.322V8.99356H83.5154V11.3856H89.5622V13.2846H83.5154V16.0952H89.9421V18.1843Z"></path></svg>
                            </a>
                        </div> 
                        <div className='z_top_menu_city'>Город</div>
                    </div>
                </div>
                <div className='z_top_subnenu_wrapper'>
                    <div className='z_top_subnenu_items'>
                        <div className='z_top_subnenu_item'>
                            <a href='' className='z_top_subnenu_link z_top_subnenu_katalog' onClick={katalogClickHander}>Каталог</a>                            
                            </div>
                        <div className='z_top_subnenu_item'>
                            <a href='' className='z_top_subnenu_link'>Бренды</a> 
                        </div>
                        <div className='z_top_subnenu_item'>
                            <a href='' className='z_top_subnenu_link'>Одежда</a>
                            </div>
                        <div className='z_top_subnenu_item'>
                            <a href='' className='z_top_subnenu_link'>Обувь</a>
                        </div>
                        <div className='z_top_subnenu_item'>
                            <a href='' className='z_top_subnenu_link'>Аксессуары</a>
                        </div>
                        <div className='z_top_subnenu_item'>
                            <a href='' className='z_top_subnenu_link'>Красота</a>
                        </div>
                        <div className='z_top_subnenu_item'>
                            <a href='' className='z_top_subnenu_link'>Дом</a>
                        </div>
                        <div className='z_top_subnenu_item'>
                            <a href='' className='z_top_subnenu_link'>Ремесла</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='z_modal_wrapper'>
                {<div className={menushow ? 'z_modal_cover' : 'z_modal_cover z_modal_cover_hidden'} onClick={katalogClickHander}></div> }
                <div className={menushow ? 'z_modal_content_wrapper z_menu_hidden' : 'z_modal_content_wrapper z_menu_hidden'}>
                    <div className='z_modal_content'>
                        <div className='z_modal_content_left'>
                            <ul className='z_modal_content_left_list'>
                                {curMenu.map(el=>
                                    <li data-c={el.slug} className='z_modal_content_left_list_item' key={el.slug} onMouseEnter={menuHoverHandler}><a className='z_modal_content_left_list_item_link' href={el.link}>{el.name}</a></li>
                                )
                                }
                            </ul>
                        </div>
                        <div className='z_modal_content_right'>
                            <a href={curMenuRight.link}><h2 className='z_modal_content_right_header'>{curMenuRight.name}</h2></a>
                            <div className='z_modal_content_right_content'>
                                <ul>
                                <ListCreate list={curMenuRight.menuItems}></ListCreate>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ListCreate (list) {
    var content = []
    var intercon = []
    var subm = []
    var intersubm = []

    function menuOpener (e) {
        if(e.target.closest ('.z_modal_content_right_list_cats').querySelector('.z_hidden_item')){
        e.target.closest ('.z_modal_content_right_list_cats').querySelectorAll('.z_modal_content_right_list_cats_item').forEach(el=>el.classList.remove('z_hidden_item'));
        e.target.closest('.z_submenu_opener').innerHTML='Свернуть<svg style="transform: rotate(180deg)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19.997 10.007 12 18.004l-7.997-7.997 1.414-1.414L12 15.176l6.583-6.583z"></path></svg>'} else {
            e.target.closest('.z_submenu_opener').innerHTML= 'Ещё<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19.997 10.007 12 18.004l-7.997-7.997 1.414-1.414L12 15.176l6.583-6.583z"></path></svg>'
            e.target.closest('.z_modal_content_right_list_cats').querySelectorAll('.z_modal_content_right_list_cats_item').forEach(sm=>{
                if(Array.from(e.target.closest('.z_modal_content_right_list_cats').querySelectorAll('.z_modal_content_right_list_cats_item')).indexOf(sm) > 4){
                    sm.classList.add('z_hidden_item')
                }
            })
        }
    }

    var num = 0;
    list.list.map(el=>{
        if (list.list.indexOf(el) < parseInt(list.list.length/3) || list.list.indexOf(el) < parseInt(list.list.length/3*2) || list.list.indexOf(el) < parseInt(list.list.length/3*3)){
            if(el.content !== ''){
                el.content.map(cat => {
                    intersubm.push(<span key={cat.n} className={el.content.indexOf(cat) > 4 ? 'z_modal_content_right_list_cats_item z_hidden_item' : 'z_modal_content_right_list_cats_item'}><a href={cat.link}>{cat.n}</a></span>)
                })
                subm.push(
                    <div className='z_modal_content_right_list_cats' key={1}>{intersubm} {intersubm.length>5 && <span onClick={menuOpener} className='z_submenu_opener'>Ещё<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19.997 10.007 12 18.004l-7.997-7.997 1.414-1.414L12 15.176l6.583-6.583z"></path></svg></span>}</div>
                )
            }
            intercon.push(
                <li className='z_modal_content_right_list_item' key={el.name}>
                    <a className='z_modal_content_right_list_item_link' href={el.link}>{el.name}</a>
                    {subm}
                </li>
            )
            subm = []
            intersubm = []
        }
        if (list.list.indexOf(el) === parseInt(list.list.length/3) || list.list.indexOf(el) === parseInt(list.list.length/3*2) || list.list.indexOf(el) === parseInt(list.list.length/3*3-1)){
            content.push(
                <div className='z_modal_content_right_list_column' key={num}>{intercon}</div>
            )
            intercon = []
            num++
        }
    })
    num = 0
    return content
}

export default Z