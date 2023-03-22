import React from 'react'
import FormHome from '../components/FormHome'
import "./styles/Home.css"

const Home = () => {
  return (

    <main className='home'>
      <a style={{ pointerEvents: 'none' }}  href="https://www.gifsanimados.org/cat-pikachu-1432.htm"><img src="https://www.gifsanimados.org/data/media/1432/pikachu-imagen-animada-0010.gif" border="0" alt="pikachu-imagen-animada-0010" /></a>
    <img className='home__img' src="/images/tittle.png" alt="" />    
    <h2 className='home__subtitle' >Hi, trainer!</h2>
    <p className='home__text' >Give your name to start!</p>
    <FormHome/>
    </main>
  )
}

export default Home