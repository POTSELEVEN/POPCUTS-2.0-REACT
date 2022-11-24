import { Header } from '../components/shared/header'
import { Footer } from '../components/shared/footer'
import {CartCard} from '../components/shared/cart/cartCard'
import { Presentation } from '../components/presentation'
import { ItemCard } from '../components/card'
import { SingleInfo } from '../components/tools/tags/SingleInfo'

import { cartInitialState, cartReducer } from '../components/shared/cart/cartReducer'
import { useReducer } from 'react'
import { useState } from 'react'
import { CardSection } from '../components/shared/cardsection'
import { TYPES } from '../components/shared/cart/cartActions'






export const Recipe = ({stateCart, dispatch}) => {

  

  




  

  // const [info, setInfo] = useState(stateCart.products[0])
  
  

  return (
    <div className='recipes page'>
    
    <Header activepage='recipes' pages={[ 'home', 'recipes', 'products' ]} statecart={stateCart} dispatch={dispatch}/>

    {/* <CartCard stateCart={stateCart} dispatch={dispatch}/> */}

    <Presentation info={stateCart.recipes[0]}/>

    <div className=" container  seccion seccion-b">

      <SingleInfo info={stateCart.recipes[0]}/>

      <div className=" container  container-video">

          <iframe height="100%" width={"100%"} src="https://www.youtube.com/embed/HntGAHRFjUE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


      </div>


    


    </div>


    




    <Footer variant={'b'} state={stateCart} dispatch={dispatch}></Footer>

    

    </div>
  )
}


