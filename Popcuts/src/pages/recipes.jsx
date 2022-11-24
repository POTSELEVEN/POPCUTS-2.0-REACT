import { Header } from '../components/shared/header'
import { Footer } from '../components/shared/footer'
import {CartCard} from '../components/shared/cart/cartCard'
import { Presentation } from '../components/presentation'
import { ItemCard } from '../components/card'

import { cartInitialState, cartReducer } from '../components/shared/cart/cartReducer'
import { useReducer } from 'react'
import { useState } from 'react'
import { CardSection } from '../components/shared/cardsection'





export const Recipes = ({stateCart, dispatch}) => {

  

 

  

  // const [info, setInfo] = useState(stateCart.products[0])
  
  

  return (
    <div className='recipes page'>
    
    <Header activepage='recipes' pages={[ 'home', 'recipes', 'products' ]} statecart={stateCart} dispatch={dispatch}/>

    {/* <CartCard stateCart={stateCart} dispatch={dispatch}/> */}

    <Presentation info={stateCart.Recipes[0]}/>

    <CardSection path={'/Recipe'} info={stateCart.Recipes[0]} variant={'b'}/>

    <CardSection path={'/Recipe'} info={stateCart.Recipes[2]} variant={'b'}/>




    <Footer variant={'b'} state={stateCart} dispatch={dispatch}></Footer>

    

    </div>
  )
}


