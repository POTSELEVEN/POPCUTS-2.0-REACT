import { Header } from '../components/shared/header'
import { Footer } from '../components/shared/footer'
import {CartCard} from '../components/shared/cart/cartCard'
import { Presentation } from '../components/presentation'
import { ItemCard } from '../components/card'

import { cartInitialState, cartReducer } from '../components/shared/cart/cartReducer'
import { useReducer, useState, useEffect } from 'react'
import { CardSectionP } from '../components/shared/cardsectionP'

import Global from '../global'
import axios from 'axios'




export const Products = ({stateCart, dispatch}) => {

  
  const [products, setProducts] = useState([])

  const url = Global.urlP

  


  useEffect(() => {
      getProducts();
      console.log(products);
  },[products.length]);



  const getProducts = () => {
      axios.get(url + "products").then(res => {
          setProducts(res.data.products);
      });
  }
  

  

  

  // const [info, setInfo] = useState(stateCart.products[0])
  
  

  return (
    <div className='products page'>
    
    <Header activepage='products' pages={[ 'home', 'recipes', 'products' ]} statecart={stateCart} dispatch={dispatch}/>

    {/* <CartCard stateCart={stateCart} dispatch={dispatch}/> */}

    <Presentation info={stateCart.ProductsP[0]}/>
    <div className={`seccion seccion-b seccion-card container`}>

    <div className="container container-cards container-cards-products">

    { products.map((item, i)=> {return <div className="container"><ItemCard i={i} path={'/Product'} item={item} /> </div>})}

    </div>

</div>


    <Footer variant={'b'} state={stateCart} dispatch={dispatch}></Footer>

    

    </div>
  )
}

