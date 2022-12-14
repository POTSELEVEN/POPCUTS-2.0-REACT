

import { TYPES } from "./cartActions";



export const cartInitialState = {

    home: [

        {image: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg", info:{ title: 'Making the process easier for you.', body:[ 'We are here to make your process easier, giving you a lot of tools to achieve that goal']},},
        {image: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg", info:{ title: 'Making the process easier for you.', body:[ 'We are here to make your process easier, giving you a lot of tools to achieve that goal']},},
        {image: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg", info:{ title: 'Making the process easier for you.', body: ['We are here to make your process easier, giving you a lot of tools to achieve that goal']},}

],

    Recipes:[

        {image: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg", info:{ title: 'Recipes', body: ['here are recipes']},},
        {image: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg", info:{ title: 'Video Tutorial', body: ['Remember we have a full channel on YouTube to help you in all you want']},},
        {image: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg", info:{ title: '', body: ['']},}



    ],  



    ProductsP:[

        {image: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg", info:{ title: 'Products', body: ['here are Products']},},
        {image: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg", info:{ title: '', body: ['']},},
        {image: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg", info:{ title: 'Making the process easier for you.', body: ['We are here to make your process easier, giving you a lot of tools to achieve that goal']},}



    ],  






    products:

    [ {name: 'sushi proteico', price: 400, image: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg", id: 1, amount:1, info:{title:'Sushi Proteico', body: ['Macros:', '-16g of protein' , '- 1g of fat' , '- 20g of carbohidrates']}}, 
      {name: 'sushi proteico', price: 300, image: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg", id: 2, amount:1,info:{title:'lorem', body: ['lorem']}}, ]

    ,
    
    recipes:

    [ {name: 'sushi proteico', price: 400, image: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg", id: 1, amount:7, info:{title:'name of recipe', body: ['steps, description and macros']}}, 
      {name: 'sushi proteico', price: 300, image: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg", id: 2, amount:3,info:{title:'lorem', body: ['lorem']}}, ]

    ,

    cart: [{name: 'sushi proteico', price: 400, image: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg", id: 1, amount:0}]

    
    

}

export function cartReducer(state, action){

switch (action.type) {

    case TYPES.ADD_TO_CART:{   
        
        
        state.products.find((product) => product.id === action.payload).amount++        
        
        let newitem = state.products.find((product) => product.id === action.payload)

        console.log(newitem)

        return{
            ...state,

            cart: [... state.cart, newitem]
        }



    }
    
    case TYPES.INCREASE_AMOUNT: {

        
        
        state.cart.find((cart) => cart.id === action.payload).amount++
        

        // console.log(state.cart.find((cart) => cart.id === action.payload))

        return{
            ...state,

            cart: [... state.cart]
        }
        


    }

    case TYPES.REMOVE_FROM_CART: {

        

        state.cart.find((cart) => cart.id === action.payload).amount--

        // console.log(state.cart.find((cart) => cart.id === action.payload))

        state.cart = state.cart.filter((item) => item.amount !== 0) 
        

        return{
            ...state,

            cart: [... state.cart]
        }
        
        

    }

    default:
     return state;
}

}