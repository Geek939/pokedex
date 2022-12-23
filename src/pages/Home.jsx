import React from 'react'

const Home = () => {
  return (

    <main className='home'>
    <img className='home__img' src="" alt="" />    
    <h2 className='home__subtitle' >hi, trainer!</h2>
    <p className='home__text' >Give your name to start!</p>
    <form className='home__form' >
    <input  className='home__input' type="text" placeholder='Your name...'/>
    <button className='home__btn' >Start!</button>
    </form>
    </main>
  )
}

export default Home