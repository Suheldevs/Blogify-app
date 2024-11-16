import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form';
import Swal from 'sweetalert2';
function Signin() {

  const [Error , setError] = useState(null);
  const [loading, setloading]= useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = async(formData) =>{
    setloading(true);
    setError(null);
    if(!formData.username || !formData.email || !formData.password){
      setloading(false);
      return setError('Please fill out all fields.');
    }
    try{
      const res = await fetch('/api/auth/signup',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(formData),
      })
      const response = await res.json();
      setloading(false);
      if(response.success === false){
        return setError(response.message);
      }
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'sign in successful.',
        confirmButtonText: 'OK'
      });
    }
    catch(error){
      setError(error.message);
      setloading(false);
    }
  }
  return (
    <div className=' lg:mt-28 mt-12'>
      <div className='flex p-3 max-w-6xl mx-auto flex-col  md:flex-row md:items-center gap-10'>
      {/* left */}
      <div className='flex-1'>
          <div className='font-bold text-4xl dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Blogify</span>.com
          </div>
          <p className='mt-4 font-semibold '>
            This is a blog website project. Created by Mohd suhel. You can sign up with email and password.
            And if you want this type of websites , contact me on <a href='mailto:mohdsuhel.dev@gmail.com' className='text-blue-500 hover:text-blue-700'>mohdsuhel.dev@gmail.com</a>.
          </p>
      </div>
      {/* right */}
      <div className='flex-1'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
        {Error && (
        <Alert className='mb-2' color='failure'>
  {Error}
</Alert>
      )}
          <div className=''>
            <Label value='Your username'/>
            <TextInput
            type='text'
            placeholder='Username'
            {...register('username')}
            />
          </div>
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
          <span>Have an account?</span>
          <Link to='/sign-in' className='text-blue-500'>
          Sign In
          </Link>
        </div>
     
      </div>
      </div>
    </div>
  )
}

export default Signin