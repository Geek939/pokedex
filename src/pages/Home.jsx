import React from 'react'
import FormHome from '../components/FormHome'

const Home = () => {
  return (

    <main className='home'>
    <img className='home__img' src="" alt="" />    
    <h2 className='home__subtitle' >hi, trainer!</h2>
    <p className='home__text' >Give your name to start!</p>
    <FormHome/>
    </main>
  )
}

export default Home