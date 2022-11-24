import React from 'react';
import { useState } from 'react';



import {auth} from '../../../firebase/config'

import firebase from "firebase/compat/app";




import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';




// import "@fortawesome/fontawesome-free/css/all.min.css";

export const LoginPopUp=() => {

  auth.currentUser
  

  

  const handleAuthGoogle = () => {

    

    const provider = new firebase.auth.GoogleAuthProvider()

      auth.signInWithPopup(provider)
      .then(result => console.log(`${result.user.email}`))
      .catch(error => console.log(`${error.code}: ${error.message}`))

  }

  const signIn = () =>{

    auth.signInWithEmailAndPassword(Email, Password)
    .then(result => {console.log(result.user.email , auth.currentUser)})
      .catch((error) => alert(error.message , auth.currentUser));

    
  }

  const [Email, setEmail] = useState('')

  const [Password, setPassword] = useState('')

  const onSetEmail= (event) =>{
    setEmail(event.target.value)

  }

  const onSetPassword= (event) =>{
    setPassword(event.target.value)

  }

  

  const register = () => {
    auth
      .createUserWithEmailAndPassword(Email, Password)
      .then(result => {console.log(result.user.email)})
      .catch((error) => alert(error.message));
  };



  return (
    <div className='loginpopup'>
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100' >
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column --cardcolor' >

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='email-input' type='email' size="lg" value={Email} onChange={(event) => onSetEmail(event) }/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='password-input' type='password' size="lg" value={Password} onChange={(event) => onSetPassword(event) }/>

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

              <MDBBtn size='lg' onClick={signIn}>
                Sign In
              </MDBBtn>

              <hr className="my-4" />

              <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'} } onClick={handleAuthGoogle}>
                <MDBIcon fab icon="google" className="mx-2" />
                Sign in with google
              </MDBBtn>

              <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}} onClick= {register}>
                <MDBIcon fab icon="facebook-f" className="mx-2"/>
                Create account
              </MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>

    </div>
  );
}

