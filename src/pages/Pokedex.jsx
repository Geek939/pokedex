import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import ListPokemons from '../components/ListPokemons'

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])
  
  const nameTrainer = useSelector(state => state.nameTrainer)

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon/?limit=15" /*1154*/
    axios.get(URL)
    .then(res => setPokemons(res.data.results))
    .catch(err => console.log(err))

  },[])
  
  return (  
    <main>
      <header>
      <h1>Pokedex</h1> 
      <p>Welcome <span>{nameTrainer}</span>, here you can find your favorite pokemon</p>
    
      </header>
      <ListPokemons pokemons={pokemons} />
    </main>

  )
}

export default Pokedex