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
import Scholarship from './pages/Scholarship';
import Research from './pages/Research';
import Researchlab from './pages/Researchlab';
import Feedback from './pages/Feedback';
import Partnership from './pages/Partnership';
import PageField from './components/Page/PageField';
import FacultyField from './components/Faculty/FacultyField';
import ResearchField from './components/Research/ResearchField';
import EventsField from './components/Event/EventField';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/menu"/>}/>
        <Route path='/menu' element={<Menu/>} />
        <Route path='/page' element={<Page/>} />
        <Route path='/page/page-detail' element={<PageField/>} />
        <Route path='/faculty' element={<Faculty/>} />
        <Route path='/faculty/faculty-detail' element={<FacultyField/>} />
        <Route path='/event' element={<Event/>} />
        <Route path='/event/event-detail' element={<EventsField/>} />
        <Route path='/new' element={<New/>} />
        <Route path='/career' element={<Career/>} />
        <Route path='/scholarship' element={<Scholarship/>} />
        <Route path='/research' element={<Research/>} />
        <Route path='/research/research-detail' element={<ResearchField/>} />
        <Route path='/lab' element={<Researchlab/>} />
        <Route path='/feedback' element={<Feedback/>} />
        <Route path='/partnership' element={<Partnership/>} />
        <Route path='/image' element={<Image/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App
