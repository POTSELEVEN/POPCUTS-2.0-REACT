import React from 'react'
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { Home } from './pages/home';
import { Product } from "./pages/product";
import { Products } from "./pages/products";
import { Recipe } from "./pages/recipe";
import { Recipes } from "./pages/recipes";
import { cartInitialState, cartReducer } from './components/shared/cart/cartReducer';
import { useReducer } from 'react';
// import { Admin } from "./pages/admin";
// import { NotFoundPage } from "./NotFoundPage";

export const MainApp = () => {


    const [stateCart, dispatch] = useReducer(cartReducer, cartInitialState)

    return(

    <Routes>

        <Route path='/' element={<Home stateCart={stateCart} dispatch={dispatch}/>}/>
        <Route path='Product' element={<Product stateCart={stateCart} dispatch={dispatch}/>}/>
        <Route path='Products' element={<Products stateCart={stateCart} dispatch={dispatch}/>}/>
        <Route path='Recipes' element={<Recipes stateCart={stateCart} dispatch={dispatch}/>}/>
        <Route path='Recipe' element={<Recipe stateCart={stateCart} dispatch={dispatch}/>}/>
        {/* <Route path='Admin' element={<Admin/>}/> */}
        <Route path='/*' element={<Navigate to={'/'}/>}/>



    </Routes>

    )

}