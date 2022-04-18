import React, { useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import github from '../../images/github.png';
import auth from '../../Firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';


const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate();
   
    const [
        signInWithEmailAndPassword,
        user,loading
      ] = useSignInWithEmailAndPassword(auth);

      const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
      const [signInWithGithub, user3, loading3, error3] = useSignInWithGithub(auth);
     


      let errorMessage;
    const handleEmailBlur = event =>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    }
    if (user) {
        navigate('/home')
    }
    if(user2){
        navigate('/home')
    }
    if(error2){
        errorMessage= <p className='text-danger'>{error2?.message}</p>
    }
    if(error3){
        errorMessage= <p className='text-danger'>{error3?.message}</p>
    }
    if(loading){
       return <Loading></Loading>
    }

    const handleSignIn = event =>{
        event.preventDefault()
        if(!user){
            setError('Please create an register')
        }
        signInWithEmailAndPassword(email, password)
        
    }
    return (
            <div className='w-25 mx-auto border border-3 p-3 mt-5 mb-3'>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required/>
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                   Login
                </Button>
            </Form>
            <p>
              New to Tourist? <Link className='form-link' to='/register'>Create a account</Link>
           </p>
           <p className='text-danger'>{error}</p>
            <div className='d-flex align-items-center mt-3'>
                <div style={{height:'1px'}} className='w-50 bg-success'></div>
                <p className='mt-2 px-3'>or</p>
                <div style={{height:'1px'}} className='w-50 bg-success'></div>
            </div>
            {errorMessage}
           <div className='p-2 d-flex'>
           <div onClick={() => signInWithGoogle()}><img height={50} src={google}   alt="" /></div>
           <div><img height={50} src={facebook} className='ms-5'  alt="" /></div>
           <div onClick={() => signInWithGithub()}><img height={50} src={github} className='ms-5'  alt="" /></div>
           </div>
           
        </div>
    );
};

export default Login;