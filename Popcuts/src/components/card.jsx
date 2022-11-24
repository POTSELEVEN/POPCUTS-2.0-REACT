import React from "react"
import {useNavigate} from 'react-router-dom'

import { Image } from "./tools/tags/image"

import imagei from '../assets/proteic-sushi.png'
import { ButtonIcon } from "./tools/tags/buttonIcon"

export const ItemCard = ({path}) => {

    
    const data = {name: 'sushi proteico', price: 300, image: imagei, id: 2, amount:3,info:{title:'lorem', body: 'lorem'}}
    
    const {name,price,image,amount,info}= data

    const history = useNavigate()

    const redirect = (x) => {

        history(x)

    }

    

    return (


        <button onClick={()=>redirect(path)} className="item-card" >

            <div className="container container-image container-image-item">

            <Image img={image} clase='image image-item'/>

            </div>

            <div className="info info-item">

            <p className="subtitle subtitle-cart">{name}</p>
            <p className="subtitle subtitle-cart">{price}</p>

            </div>

            <div className="container container-buttons container-buttons-item">

            



            </div>


        </button>

    )

    

       

    


}