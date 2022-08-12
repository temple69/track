import React from 'react'
import About from '../About/About'
import Landing from '../Landing/Landing'
import Overview from '../Overview/Overview'
import Services from '../Services/Services'

const Home = () => {
  return (
    <>
    <main>
      <Landing/>
        <About/>
        <Services/>
        <Overview/>
   </main>
   
    </>
  )
}

export default Home