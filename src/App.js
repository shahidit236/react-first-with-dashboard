import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './components/Blog' // Import Blog component
import About from './components/pages/About'
import Services from './components/pages/Services'
import Contacts from './components/pages/Contacts'
import Login from './components/pages/Login'
import UseScrollToTop from '../src/components/UseScrollToTop'
import Dashboard from './components/dashboard/pages/Dashboard'
import Users from './components/dashboard/pages/Users'
import Orders from './components/dashboard/pages/Orders'
import Vehicles from './components/dashboard/pages/Vehicles'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <UseScrollToTop/>
        <Header/>
        <Routes>
          <Route path='/' element={<Blog />} /> 
          <Route path='/home' element={<Home />} /> 
          <Route path='/about' element={<About />} /> 
          <Route path='/services' element={<Services />} /> 
          <Route path='/contacts' element={<Contacts />} /> 
          <Route path='/login' element={<Login />} /> 
          <Route path='/dashboard/*' element={<Dashboard />}>
            <Route path='users' element={<Users />} />
            <Route path='orders' element={<Orders />} />
            <Route path='vehicles' element={<Vehicles />} />
            <Route index element={<Users />} /> {/* Default route */}
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
