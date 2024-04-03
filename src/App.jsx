import React from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Service from './components/Service'
//import AppHeader from './components/AppHeader'
//import PageTitle from './components/PageTitle'

function App() { 
  return (
    <>
     <Sidenav/> 
     <Main/>
     <About/>
     {/* <Work/> */}
     <Service/>
     <Projects/> 
     <Contact/>
     {/* <AppHeader/> */}
    </>
  )
}

export default App
