import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'

import "./styles/App.css"
import "./styles/Header.css"
import "./styles/Home.css"
import "./styles/Footer.scss"




const App = () => {
  return (
    <Router>
        <Header />
        <Routes>
            <Route  path='/' element={<Home />}/>
            {/* <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} /> */}
        </Routes>
        <Footer />
    </Router>
  )
}

export default App