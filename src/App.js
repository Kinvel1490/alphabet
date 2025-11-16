import N from './components/n/n';
import O from './components/o/o';
import P from './components/p/p';
import Q from './components/q/q';
import R from './components/r/r';
import S from './components/s/s';
import T from './components/t/t';
import U from './components/u/u';
import V from './components/v/v';
import W from './components/w/w';
import X from './components/x/x';
import Y from './components/y/y';
import Z from './components/z/z';

import './fonts/stylesheet.css'

import { useState } from 'react';

function App () {
    const [menu1, setmenu1] = useState(true);
    const [menu2, setmenu2] = useState(true);
    const [menu3, setmenu3] = useState(true);

    function handleClick (e) {
        var el = e.target.getAttribute('id')
        switch(el){
            case 'menu1': setmenu1(false); setmenu2(true); setmenu3(true); break;
            case 'menu2': setmenu1(true); setmenu2(false); setmenu3(true); break;
            case 'menu3': setmenu1(true); setmenu2(true); setmenu3(false); break;
            default: setmenu1(true); setmenu2(true); setmenu3(true); break;
        }
    }

    return (
        <div>
    <div>
    <p onClick={handleClick} className='drop-list' id='menu1'>6. Нажмите чтобы открыть</p>
    {!menu1 && <ul className='ddmenu'>
      <li><N></N></li>
      <li><O></O></li>
      <li><P></P></li>
      <li><Q></Q></li>
    </ul>}
    </div>
    <div>
    <p onClick={handleClick} className='drop-list' id='menu2'>7. Нажмите чтобы открыть</p>
    {!menu2 && <ul className='ddmenu'>
      <li><R></R></li>
      <li><S></S></li>
      <li><T></T></li>
      <li><U></U></li>
      <li><V></V></li>
      <li><W></W></li>
      <li><X></X></li>
    </ul>}
    </div>
    <div>
    <p onClick={handleClick} className='drop-list' id='menu3'>8. Нажмите чтобы открыть</p>
    {!menu3 && <ul className='ddmenu'>
      <li><Y></Y></li>
      <li><Z></Z></li>
    </ul>}
    </div>
  </div>
    )
}

export default App;