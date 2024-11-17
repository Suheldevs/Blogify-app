import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form';
import Swal from 'sweetalert2';
//redux
import { useDispatch,useSelector } from 'react-redux';
import { signinStart, signinSuccess,singFailure } from '../redux/user/userSlice';

function Signin() {

  const {loading, error} = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = async(formData) =>{

    if(!formData.email || !formData.password){
      return dispatch(singFailure('Please fill all the fields'));
    }
    try{
      dispatch(signinStart())
      const res = await fetch('/api/auth/signin',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(formData),
      })
      const response = await res.json();
      if(response.success === false){
        dispatch(singFailure(response.message));
      }
      if(res.ok){
        dispatch(signinSuccess(response));
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'sign in successful.',
        confirmButtonText: 'OK'
      });
      navigate('/');
    }
  }
    catch(error){
    return  dispatch(singFailure(error.message));
    }
  }
  return (
    <div className=' lg:mt-28 mt-12 h-[75vh]'>
      <div className='flex p-3 max-w-6xl mx-auto flex-col  md:flex-row md:items-center gap-10'>
      {/* left */}
      <div className='flex-1'>
          <div className='font-bold text-4xl dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Blogify</span>.com
          </div>
          <p className='mt-4 font-semibold '>
            This is a blog website project. Created by Mohd suhel. You can sign in with email and password.
            And if you want this type of websites , contact me on <a href='mailto:mohdsuhel.dev@gmail.com' className='text-blue-500 hover:text-blue-700'>mohdsuhel.dev@gmail.com</a>.
          </p>
      </div>
      {/* right */}
      <div className='flex-1'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
        {error && (
        <Alert className='mb-2' color='failure'>
  {error}
</Alert>
      )}
          
          <div className=''>
            <Label value='Your email'/>
            <TextInput
            type='email'
            placeholder='email'
            {...register('email')}
            />
          </div>
          <div className=''>
            <Label value='Your password'/>
            <TextInput
            type='password'
            placeholder='password'
            {...register('password')}
            />
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit' className='w-full mt-3' disabled={loading} >
           {loading ? (
            <>
            <Spinner size='sm' />
            <span>Loading..</span>
            </>
           ):('Sign In')}
          </Button>
        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Don't have an account?</span>
          <Link to='/signup' className='text-blue-500'>
          Sign Up
          </Link>
        </div>
     
      </div>
      </div>
    </div>
  )
}

export default Signin