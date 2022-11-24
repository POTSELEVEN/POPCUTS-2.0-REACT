

import { Link } from 'react-router-dom'
import backIcon from '../../../assets/back-icon.svg'
import plusIcon from '../../../assets/minus-icon.svg'
import { ButtonIcon } from '../../tools/tags/buttonIcon'
import { CartList } from './cartList'


export const CartCard = ({stateCart, dispatch, condition}) =>{
    





    return (

        <div className={`cart-card ${condition ? '' : 'second-plane'}`}>

            <div className="head">
                
                <ButtonIcon src={backIcon}></ButtonIcon>

                <h1 className='subtitle subtitle-cart'> shopping cart </h1>

            
            </div>

            <div className="seccion seccion-list seccion-product-list">
            
                <CartList stateCart={stateCart} dispatch={dispatch}/>
            
            </div>            

            <div className="footer footer-checkout">

                <ButtonIcon src={plusIcon} clase='button-icon-checkout'/>

                <button className="button button-checkout "><a className="subtitle subtitle-checkout " href='https://www.paypal.me/elpotes11'> checkout</a></button>

            </div>



          

        </div>


    )



}