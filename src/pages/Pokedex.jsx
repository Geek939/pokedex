import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import ListPokemons from '../components/ListPokemons'
import "./styles/pokedex.css"

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])
  const [types, setTypes] = useState([])
  const [namePokemon, setNamePokemon] = useState("")
  const [pokemonsFilter, setPokemonsFilter] = useState([])
  
  const nameTrainer = useSelector(state => state.nameTrainer)

  const handleSubmit=(e)=>{
    e.preventDefault()
    const name = e.target.namePokemon.value
    setNamePokemon(name)
  }
  

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon/?limit=15" /*1154*/
    axios.get(URL)
    .then(res => setPokemons(res.data.results))
    .catch(err => console.log(err))
  
  },[])

  useEffect(()=> {
    const URL ="https://pokeapi.co/api/v2/type"
    axios.get(URL)
    .then(res=>setTypes(res.data.results))
    .catch(err=> console.log(err))

  },[])

  useEffect(() => {
    const newPokemons = pokemons.filter(pokemon => pokemon.name.includes(namePokemon))
    setPokemonsFilter(newPokemons)
  },[namePokemon])
  
  return (  
    <main>
      <header>
      <h1>Pokedex</h1> 
      <p>Welcome <span>{nameTrainer}</span>, here you can find your favorite pokemon</p>
      <form onSubmit={handleSubmit} className='pokedex__form'>
        <div className='pokedex__search'>
          <input type="text" id='namePokemon' />
          <button type='submit'>Search</button>
        </div>
        <select className='pokedex__select'>
          <option value="">All pokemons</option>
          {
            types.map(type => <option value={type.name} key={type.url}>{type.name}</option>)

          }
        </select>
      </form>
      </header>
      <ListPokemons pokemons={pokemonsFilter} />
    </main>

  )
}

export default Pokedex