
import { Image } from '../tools/tags/image'

import { Cart } from './cart/cart-icon'
 import {LoginButton} from './login/LoginButton'
 import {Favorites } from './favorites'
 import logo from '../../assets/logo.png'

 import '../../styles/Header.css'



export const Header = ({activepage, pages, statecart, dispatch}) => {

    const actualpage = activepage
    const page2 = pages.filter(page => page != activepage)[0]
    const page3 = pages.filter(page => page != activepage)[1]

    return(

        <div className='Header seccion'>
            

        <div className="logo logo-Encabezado"> 

            <Image img={logo} name='logo header' clase='logo logo-header'/>

        </div>

        <div className="nav nav-bar">

            <a className='menu-text active-page'>{actualpage}</a>
            <a className='menu-text' href={page2}>{page2}</a>
            <a className='menu-text' href={page3}>{page3}</a>

        </div>

        <nav className="nav nav-options">

            <Cart statecart={statecart} dispatch={dispatch}/>
            <Favorites />
            <LoginButton statecart={statecart} dispatch={dispatch}/>
            
        </nav>
        


        </div>


    )
    
}