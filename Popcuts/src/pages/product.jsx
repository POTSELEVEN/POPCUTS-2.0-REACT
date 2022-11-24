import { Header } from '../components/shared/header'
import { Footer } from '../components/shared/footer'
import {CartCard} from '../components/shared/cart/cartCard'
import { PresentationP } from '../components/presentationP'
import { ItemCard } from '../components/card'

import { cartInitialState, cartReducer } from '../components/shared/cart/cartReducer'
import { useReducer } from 'react'
import { useState, useEffect } from 'react'
import { TYPES } from '../components/shared/cart/cartActions'

import {useParams} from 'react-router-dom'

import Global from '../global'
import axios from 'axios'





export const Product = ({stateCart, dispatch}) => {




  const params = useParams()

  const index = params.index


  






  const [products, setProducts] = useState([])

  const url = Global.urlP

  


  useEffect(() => {
      getProducts();
      console.log(products, index);
  },[products.length]);



  const getProducts = () => {
      axios.get(url + "products").then(res => {
          setProducts(res.data.products);
      });
  }
  






  const addToCart = (id) => {

    if (stateCart.cart.find((product) => product.id === id)){
        dispatch({type: TYPES.INCREASE_AMOUNT, payload: id})
        console.log('sumo')
    }

    else{
    
    dispatch({type: TYPES.ADD_TO_CART, payload: id})
    console.log('añadio')
    }

}



// const id = products[index]._id

  

  // const [info, setInfo] = useState(stateCart.products[0])
  
  

  return (
    <div className='recipes page'>
    
    <Header activepage='Products' pages={[ 'Home', 'Recipes', 'Products' ]} statecart={stateCart} dispatch={dispatch}/>

    {/* <CartCard stateCart={stateCart} dispatch={dispatch}/> */}

    {products.length>0 && <PresentationP info={products[index]}/>}

    <div className="container seccion">

    
      <button className='button button-add seccion-b subtitle' onClick={()=>addToCart(1)}> Add To Card </button>


    </div>


    




    <Footer variant={'a'} state={stateCart} dispatch={dispatch}></Footer>

    

    </div>
  )
}


