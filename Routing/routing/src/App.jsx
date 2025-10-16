import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Users from './Pages/Users'
import Navbar from '../component/Navbar'
import User from './Pages/User'
import Notfound from './Pages/Notfound'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/users' element={<Users />} />
        <Route path='/user/:username' element={<User />} />
        <Route path='*' element = {<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
  }

export default App