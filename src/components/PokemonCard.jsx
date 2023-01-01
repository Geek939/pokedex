import React from 'react'

const PokemonCard = ({pokemon}) => {
  return (
    <article className='pokeCard'>
  <h3>{pokemon.name}</h3>
  </article>
  )
}

export default PokemonCard