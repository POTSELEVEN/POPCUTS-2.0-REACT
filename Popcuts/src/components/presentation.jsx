import { Image } from "./tools/tags/image"




import image  from "../assets/proteic-sushi.png"
import { useState } from "react"



export const Presentation =( info , images) => {

    const [enfo, setEnfo] = useState(info)

    console.log(info)
    

    const {title, body}= enfo.info.info

    const img = enfo.info.image

    

    


    return (


        <div className="presentation seccion">

            <div className="container">
                
                <div className="info info-presentation">

                <h1 className="title title-presentation">{title}<span> </span></h1>

                <p className="info-text">{body.map((line)=> <>{line}<br/></>)}</p>

                {/* <button className="button button-presentation">Get started</button> */}

                </div>

            </div>

            <div className="container container-img container-img-presentation">

                <Image img={img} />
                
            </div>


        </div>

    )

}