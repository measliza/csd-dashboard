import { useState } from 'react'
import './App.css'
import Menu from './pages/Menu';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Login from './pages/Login';
import Image from './pages/Image';
import Page from './pages/Page';
import Faculty from './pages/Faculty';
import Event from './pages/Event';
import New from './pages/New';
import Career from './pages/Career';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/menu"/>}/>
        <Route path='/menu' element={<Menu/>} />
        <Route path='/page' element={<Page/>} />
        <Route path='/faculty' element={<Faculty/>} />
        <Route path='/event' element={<Event/>} />
        <Route path='/new' element={<New/>} />
        <Route path='/career' element={<Career/>} />

        <Route path='/image' element={<Image/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App
