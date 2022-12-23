import React from 'react'
import PokemonCard from './PokemonCard'

const ListPokemons = ({pokemons}) => {
  return (
    <ul>
        {
            pokemons.map((pokemon)=> <PokemonCard  pokemon={pokemon}/>)
        }

    </ul>
  )
}

export default ListPokemons