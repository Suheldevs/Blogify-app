import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import Projects from './Pages/Projects'
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App