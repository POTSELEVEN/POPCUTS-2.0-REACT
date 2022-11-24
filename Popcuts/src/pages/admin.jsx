import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBTextArea
}
from 'mdb-react-ui-kit';
import '../styles/admin.css'

import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import Global from '../global';
import axios from 'axios'

import firebase from "firebase/compat/app";


import { auth} from '../firebase/config';


export const Admin= () => {


    const [email, setEmail] = useState(firebase.auth().currentUser.email)
    



    const redirect = useNavigate()




   const urlPr = Global.urlP
   const urlRe = Global.urlR

   const sendDataP = (e) => {

    //Evitamos que al recibir los datos se recargue la pantalla:
    e.preventDefault()

    
    //Petición http por POST para guardar el artículo:
    axios.post(urlPr + 'save', Product).then(res => {
        
        console.log(res.data);
    });

}
const sendDataR = (e) => {

    //Evitamos que al recibir los datos se recargue la pantalla:
    e.preventDefault();

    
    //Petición http por POST para guardar el artículo:
    axios.post(urlRe + 'save', Recipe).then(res => {
        
        console.log(res.data);
        
    });

}






    const  [Product, setProduct] = useState({name: '', imageLink: '' ,description: '', price: 0, macros: {protein: 0, carbohidrates: 0, fat: 0}})
    const [Recipe, setRecipe] = useState({name: '', imageLink: '' , tutorialLink: '',description: '', macros: {protein: 0, carbohidrates: 0, fat: 0}, recipe: ''})


    const onSetName = (event) => {

        setProduct({... Product, name: event.target.value })

    }

    const onSetImageLink = (event) => {

        setProduct({... Product, imageLink: event.target.value })

    }

    const onSetDescription = (event) => {

        setProduct({... Product, description: event.target.value })

    }

    const onSetPrice = (event) => {

        setProduct({... Product, price: event.target.value })

    }

    const onSetProtein = (event) => {

        setProduct({... Product, macros: {... Product.macros, protein: event.target.value} })

    }

    const onSetCarbohidrates = (event) => {

        setProduct({... Product, macros: {... Product.macros, carbohidrates: event.target.value} })

    }

    const onSetFat = (event) => {

        setProduct({... Product, macros: {... Product.macros, fat: event.target.value} })

    }


    const onSetNamer = (event) => {

      setRecipe({... Recipe, name: event.target.value })

  }

  const onSetImageLinkr = (event) => {

      setRecipe({... Recipe, imageLink: event.target.value })

  }

  const onSetDescriptionr = (event) => {

      setRecipe({... Recipe, description: event.target.value })

  }

  const onSetPricer = (event) => {

      setRecipe({... Recipe, price: event.target.value })

  }

  const onSetProteinr = (event) => {

      setRecipe({... Recipe, macros: {... Recipe.macros, protein: event.target.value} })

  }

  const onSetCarbohidratesr = (event) => {

      setRecipe({... Recipe, macros: {... Recipe.macros, carbohidrates: event.target.value} })

  }

  const onSetFatr = (event) => {

      setRecipe({... Recipe, macros: {... Recipe.macros, fat: event.target.value} })

  }

  const onSetTutorialLinkr = (event) => {

      setRecipe({... Recipe, tutorialLink: event.target.value})

  }

  const onSetReciper = (event) => {

    setRecipe({... Recipe, recipe: event.target.value})

}
    

 return (<>
    {(email == 'popcuts777@gmail.com') ? <MDBContainer fluid className='d-flex align-items-center  bg-image flex-column' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
    <MDBContainer fluid className='d-flex align-items-center  bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      
      
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">CREATE A NEW PRODUCT</h2>
          <MDBInput wrapperClass='mb-4' label= 'Product Name' size='lg' id='form1' type='text' value= {Product.name} onChange={(event) => onSetName(event) }/>
          <MDBInput wrapperClass='mb-4' label='Image Link' size='lg' id='form1' type='text' value= {Product.imageLink} onChange={(event) => onSetImageLink(event) }/>
          <MDBInput wrapperClass='mb-4' label='Description' size='lg' id='form2' type='text' value= {Product.description} onChange={(event) => onSetDescription(event) }/>
          <MDBInput wrapperClass='mb-4' label='Price' size='lg' id='form3' type='number' value= {Product.price} onChange={(event) => onSetPrice(event) }/>
          <MDBInput wrapperClass='mb-4' label='Protein (g)' size='lg' id='form4' type='number' value= {Product.macros.protein} onChange={(event) => onSetProtein(event) }/>
          <MDBInput wrapperClass='mb-4' label='Carbohidrates (g)' size='lg' id='form4' type='number' value= {Product.macros.carbohidrates} onChange={(event) => onSetCarbohidrates(event) }/>
          <MDBInput wrapperClass='mb-4' label='Fat (g)' size='lg' id='form4' type='number' value= {Product.macros.fat} onChange={(event) => onSetFat(event) }/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={sendDataP}>Add Product</MDBBtn>
        </MDBCardBody>
      </MDBCard>

        <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
        <h2 className="text-uppercase text-center mb-5">CREATE A NEW RECIPE</h2>
        <MDBInput wrapperClass='mb-4' label= 'Product Name' size='lg' id='form1' type='text' value={Recipe.name} onChange={(event) => onSetNamer(event) }/>
        <MDBInput wrapperClass='mb-4' label='Image Link' size='lg' id='form1' type='text' value={Recipe.imageLink} onChange={(event) => onSetImageLinkr(event) }/>
        <MDBInput wrapperClass='mb-4' label='Tutorial Link' size='lg' id='form1' type='text' value={Recipe.tutorialLink} onChange={(event) => onSetTutorialLinkr(event) }/>
        <MDBInput wrapperClass='mb-4' label='Description' size='lg' id='form2' type='text' value={Recipe.description} onChange={(event) => onSetDescriptionr(event) }/>
        <MDBInput wrapperClass='mb-4' label='Protein (g)' size='lg' id='form4' type='number' value={Recipe.macros.protein} onChange={(event) => onSetProteinr(event) }/>
        <MDBInput wrapperClass='mb-4' label='Carbohidrates (g)' size='lg' id='form4' type='number' value={Recipe.macros.carbohidrates} onChange={(event) => onSetCarbohidratesr(event) }/>
        <MDBInput wrapperClass='mb-4' label='Fat (g)' size='lg' id='form4' type='number' value={Recipe.macros.fat} onChange={(event) => onSetFatr(event) }/>
        <MDBTextArea wrapperClass='mb-4' label='Recipe' size='lg' id='form3' type='textAreaExample' value={Recipe.recipe} onChange={(event) => onSetReciper(event) }/>

        <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
        </div>
        <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={sendDataR}>Add Recipe</MDBBtn>
        </MDBCardBody>
    </MDBCard>


    
    </MDBContainer>

    <button onClick={()=> redirect('/List')}>see Products and Articles published</button>


    
    </MDBContainer> : <h1>no estas autorizado</h1>}
    </>
);
}


