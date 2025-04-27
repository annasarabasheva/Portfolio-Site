import './App.css'
import Home from './components/home/Home';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';

function App() {

  return (
    <>
     <Header />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/skills" element={<Skills/>} />
      </Routes>
    </>
  )
}

export default App
