import React from "react"
import {useNavigate} from 'react-router-dom'

import { Image } from "./tools/tags/image"

import imagei from '../assets/proteic-sushi.png'
import { ButtonIcon } from "./tools/tags/buttonIcon"
import { useState, useEffect } from "react"

export const ItemCard = ({i,path, item}) => {

    
   

    
    const [name, setName] = useState(item.name)
    
    const [price, setPrice] = useState(item.price)

    const [img, setImg] = useState(item.imageLink)

    const history = useNavigate()

    

    const redirect = (x) => {

        history(x)

    }

    

    return (


    <button onClick={()=>redirect(`${path}/${i}`)} className="item-card" >

            <div className="container container-image container-image-item">


            <Image img={img} clase='image image-item bordesito'/>

            </div>

            <div className="info info-item">

            <p className="subtitle subtitle-cart">{name}</p>

            { price &&
            <p className="subtitle subtitle-cart">{price}</p>
            }
            </div>

            <div className="container container-buttons container-buttons-item">

            



            </div>


        </button>

    )

    

       

    


}