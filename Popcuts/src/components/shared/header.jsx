
import { Image } from '../tools/tags/image'

import { auth } from '../../firebase/config'
import firebase from "firebase/compat/app";


import { ButtonUser } from './login/buttonUser';
import { ButtonIcon } from '../tools/tags/buttonIcon';
import { Cart } from './cart/cart-icon'
 import {LoginButton} from './login/LoginButton'
 import {Favorites } from './favorites'
 import logo from '../../assets/logo.png'
 import useri from '../../assets/user.svg' 

 import '../../styles/Header.css'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';


export const Header = ({activepage, pages, statecart, dispatch}) => {

    const [condition, setcondition] = useState(false)

    const actualpage = activepage
    const page2 = pages.filter(page => page != activepage)[0]
    const page3 = pages.filter(page => page != activepage)[1]

    const redirect = useNavigate()

    useEffect(() => {

      auth.onAuthStateChanged((user)=>{ if (user){setcondition(true)} else {setcondition(false)}})
        
      
      
    })
    
    

    return(

        <div className='Header seccion'>
            

        <div className="logo logo-Encabezado"> 

            <Image img={logo} name='logo header' clase='logo logo-header'/>

        </div>

        <div className="nav nav-bar">

            <a className='menu-text active-page'>{actualpage}</a>
            <a className='menu-text' onClick={()=>redirect(`/${page2}`)}>{page2}</a>
            <a className='menu-text' onClick={()=>redirect(`/${page3}`)}>{page3}</a>

        </div>
        
        {

                condition ?
                
                <nav className="nav nav-options">
                
                <Cart statecart={statecart} dispatch={dispatch}/>
                <Favorites />
                {/* <ButtonIcon src={useri} clase={'button button-user'} func={() => {auth.signOut(); console.log(auth.currentUser)}}/> */}
                <ButtonUser />


                </nav>


                :

                <nav className="nav nav-options">

                <LoginButton statecart={statecart} dispatch={dispatch} />

                </nav>


        }

             
        


        </div>


    )
    
}