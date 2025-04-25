import './App.css'
import Home from './components/home/Home';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Education from './components/education/Education';

function App() {

  return (
    <>
     <Header />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </>
  )
}

export default App
