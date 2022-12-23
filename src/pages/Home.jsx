import React from 'react'
import FormHome from '../components/FormHome'
import "./styles/Home.css"

const Home = () => {
  return (

    <main className='home'>
    <img className='home__img' src="/images/tittle.png" alt="" />    
    <h2 className='home__subtitle' >hi, trainer!</h2>
    <p className='home__text' >Give your name to start!</p>
    <FormHome/>
    </main>
  )
}

export default Home