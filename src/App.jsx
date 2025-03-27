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
import Scholarship from './pages/scholarship';
import Research from './pages/Research';
import Researchlab from './pages/Researchlab';
import Feedback from './pages/Feedback';
import Partnership from './pages/Partnership';
import PageField from './components/Page/PageField';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/menu"/>}/>
        <Route path='/menu' element={<Menu/>} />

        <Route path='/page' element={<Page/>} />
        <Route path='/page/page-detail' element={<PageField/>} />

        <Route path='/faculty' element={<Faculty/>} />
        <Route path='/event' element={<Event/>} />
        <Route path='/new' element={<New/>} />
        <Route path='/career' element={<Career/>} />
        <Route path='/scholarship' element={<Scholarship/>} />
        <Route path='/research' element={<Research/>} />
        <Route path='/researchlab' element={<Researchlab/>} />
        <Route path='/feedback' element={<Feedback/>} />
        <Route path='/partnership' element={<Partnership/>} />

        <Route path='/image' element={<Image/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App
