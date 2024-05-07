import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar/Navbar'
import MainSection from './MainSection/MainSection'
import Footer from './Footer/Footer'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <MainSection/>
    <Footer/>
  </React.StrictMode>,
)
