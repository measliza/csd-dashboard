import { useState } from 'react'
import './App.css'
// import Home from './pages/home';
import Menu from './pages/Menu';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Login from './pages/Login';
import Image from './pages/Image';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/menu"/>}/>
        {/* <Route path='/home' element={<Home/>} /> */}
        <Route path='/menu' element={<Menu/>} />

        <Route path='/image' element={<Image/>} />

        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App
