import { Header } from '../components/shared/header'
import { Footer } from '../components/shared/footer'
import {CartCard} from '../components/shared/cart/cartCard'
import { Presentation } from '../components/presentation'
import { ItemCard } from '../components/card'

import { cartInitialState, cartReducer } from '../components/shared/cart/cartReducer'
import { useReducer } from 'react'
import { useState, useEffect } from 'react'
import {  CardSectionR } from '../components/shared/cardsectionR'

import Global from '../global'
import axios from 'axios'






export const Recipes = ({stateCart, dispatch}) => {

  

 

  const [recipes, setrecipes] = useState([])

  const url = Global.urlR

  


  useEffect(() => {
      getrecipes();
      console.log(recipes);
  },[recipes.length]);



  const getrecipes = () => {
      axios.get(url + "recipes").then(res => {
          setrecipes(res.data.recipes);
      });
  }

  // const [info, setInfo] = useState(stateCart.recipes[0])
  
  

  return (
    <div className='recipes page'>
    
    <Header activepage='recipes' pages={[ 'home', 'recipes', 'products' ]} statecart={stateCart} dispatch={dispatch}/>

    {/* <CartCard stateCart={stateCart} dispatch={dispatch}/> */}

    <Presentation info={stateCart.Recipes[0]}/>


    <div className={`seccion seccion-b seccion-card container`}>

    <div className="container container-cards container-cards-products">

    { recipes.map((item, i)=> {return <div className="container"><ItemCard i={i} path={'/Recipe'} item={item} /> </div>})}

    </div>

</div>



    <Footer variant={'b'} state={stateCart} dispatch={dispatch}></Footer>

    

    </div>
  )
}


