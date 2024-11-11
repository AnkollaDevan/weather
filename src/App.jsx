import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import './App.css'
import Weather from './Components/Weather'


function App() {
  return (
      <>


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/weather' element={<Weather/>}/>
      </Routes>

      </>
  )
}

export default App
