import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import ListPokemons from '../components/ListPokemons'
import "./styles/pokedex.css"
import { paginationLogic } from '../helpers/paginationLogic'

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])
  const [types, setTypes] = useState([])
  const [namePokemon, setNamePokemon] = useState("")
  const [pokemonsFilter, setPokemonsFilter] = useState([])
  const [pokemonType, setPokemonType] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  
  const nameTrainer = useSelector(state => state.nameTrainer)

  const handleSubmit=(e)=>{
    e.preventDefault()
    const name = e.target.namePokemon.value
    setNamePokemon(name)
  }

  const handleChangeSelect = (e) => {
    setPokemonType (e.target.value)
  }

  const {lastPage, pagesInBlock, pokemonsInPage} = paginationLogic(currentPage, pokemonsFilter)

  const handleClickPage = (newPage)=>{
    setCurrentPage(newPage)
  }
  

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/${pokemonType ? `type/${pokemonType}/` : "pokemon/?limit=100"}` /*Limit 1154*/
    axios.get(URL)
    .then(res => {
      if(pokemonType){
        const newPokemons = res.data.pokemon.map(pokemon => pokemon.pokemon)
        setPokemons (newPokemons)
      }else{
        setPokemons(res.data.results)
      }
    })
    .catch(err => console.log(err))
  
  },[pokemonType])

  useEffect(()=> {
    const URL ="https://pokeapi.co/api/v2/type"
    axios.get(URL)
    .then(res=>setTypes(res.data.results))
    .catch(err=> console.log(err))

  },[])

  useEffect(() => {
   
    const newPokemons = pokemons.filter(pokemon => pokemon.name.includes(namePokemon))
    setPokemonsFilter(newPokemons)
  },[namePokemon, pokemons])
  
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
        <select onChange={handleChangeSelect} className='pokedex__select'>
          <option value="">All pokemons</option>
          {
            types.map(type => <option value={type.name} key={type.url}>{type.name}</option>)

          }
        </select>
      </form>
      </header>
      <ListPokemons pokemons={pokemonsInPage} />
      <ul>
        {
          pagesInBlock.map([pageInBlock=><li onClick={handleClickPage (pageInBlock)}  key={pageInBlock}>{pageInBlock}</li>])
        }
      </ul>
    </main>

  )
}

export default Pokedex