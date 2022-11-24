import { useState } from "react"
import { CartCard } from "../cart/cartCard"
import { LoginPopUp } from "./LoginPopUp"




export const LoginButton = ({statecart, dispatch}) => {

    const [condition, setcondition] = useState(false)

    

    const probe =()=>{

      

      console.log(statecart, condition)

      if(condition == false){
        setcondition(true)
      } 
      else {
        setcondition(false)
      }

      

    }

    



    return (

      <div > 

      


        




            
            
            <button className="button button-login" onClick={()=>probe()}>Login</button>
            

            {condition && <LoginPopUp/>}


        

        </div>


    

        

    )
    }