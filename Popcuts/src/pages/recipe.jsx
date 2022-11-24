import { Header } from '../components/shared/header'
import { Footer } from '../components/shared/footer'
import {CartCard} from '../components/shared/cart/cartCard'
import { Presentation } from '../components/presentation'
import { ItemCard } from '../components/card'
import { SingleInfo } from '../components/tools/tags/SingleInfo'

import { cartInitialState, cartReducer } from '../components/shared/cart/cartReducer'
import { useReducer } from 'react'
import { useState, useEffect } from 'react'

import { TYPES } from '../components/shared/cart/cartActions'
import { PresentationP } from '../components/presentationP'


import {useParams} from 'react-router-dom'

import Global from '../global'
import axios from 'axios'



export const Recipe = ({stateCart, dispatch}) => {

  
  const params = useParams()

  const index = params.index


  






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

    {recipes.length > 0 && <PresentationP info={recipes[index]}/>}

    <div className=" container  seccion seccion-b">

    {recipes.length > 0 && <SingleInfo info={recipes[index]}/>}

    {recipes.length > 0 && <div className=" container  container-video">

          <iframe height="100%" width={"100%"} src={`${recipes[index].tutorialLink}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


      </div>}


    


    </div>


    




    <Footer variant={'b'} state={stateCart} dispatch={dispatch}></Footer>

    

    </div>
  )
}


