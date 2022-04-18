import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import github from '../../images/github.png';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';

const Regiter = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [comfirmPassword,setComfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [error2, setError2] = useState('');
  const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [signInWithGoogle, user2, loading2, error3] = useSignInWithGoogle(auth);
      const [signInWithGithub, user3, loading3, error4] = useSignInWithGithub(auth);
     


      let errorElement;
      let errorMessage;
      const handleEmailBlur = event =>{
          setEmail(event.target.value)
      }
      const handlePasswordBlur = event =>{
          setPassword(event.target.value)
      }
      const handleComfirmPassword = event =>{
          setComfirmPassword(event.target.value)
      }
      if(user){
          navigate('/home')
      }
      if(loading){
          return <Loading></Loading>
      }
     
    if(error2){
        errorElement = <p className='text-danger'>{error2?.message}</p>
    }
    if(error3){
        errorElement = <p className='text-danger'>{error3?.message}</p>
    }
      const createUser = event =>{
          event.preventDefault()
          if(password !== comfirmPassword){
            setError('Password No Matching')
            return
        }
        if(password <6){
            setError2('You give me long password')
            return
        }
          createUserWithEmailAndPassword(email,password,comfirmPassword)
      }

    return (
        <div className='w-25 mx-auto border border-3 p-3 mt-5 mb-3'>
        <Form onSubmit={createUser}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required/>
            </Form.Group>
            <p className='text-danger'>{error2}</p>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Comfirm Password</Form.Label>
                <Form.Control onBlur={handleComfirmPassword }  type="password" placeholder="comfirm-Password" required/>
            </Form.Group>
            <p className='text-danger'>{error}</p>
            <Button className='w-100' variant="primary" type="submit">
              Register
            </Button>
        </Form>
        <p>
         Already Have an Account? <Link className='form-link' to='/login'>Login</Link>
       </p>
        <div className='d-flex align-items-center mt-3'>
            <div style={{height:'1px'}} className='w-50 bg-success'></div>
            <p className='mt-2 px-3'>or</p>
            <div style={{height:'1px'}} className='w-50 bg-success'></div>
        </div>
        {errorElement}
        <div className='p-2 d-flex'>
           <div onClick={() => signInWithGoogle()}><img height={50} src={google}   alt="" /></div>
           <div><img height={50} src={facebook} className='ms-5'  alt="" /></div>
           <div onClick={() => signInWithGithub()}><img height={50} src={github} className='ms-5'  alt="" /></div>
           </div>
       
    </div>
    );
};

export default Regiter;