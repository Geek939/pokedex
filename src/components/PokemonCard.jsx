import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./styles/PokemonCard.css"


const PokemonCard = ({pokemon}) => {

  const [datapokemon, setDatapokemon] = useState()



  useEffect(()=> {
    axios.get(pokemon.url)
      .then(res => setDatapokemon (res.data))
      .catch(err => console.log (err)) 
    
  },[])

    const types = datapokemon?.types.map(type => type.type.name).join(" / ")


  return (
    <article className='pokeCard'>
      <section className='pokeCard__header'></section>
      <section className='pokecard__content'>
      <img className='pokeCard__img' src= {datapokemon?.sprites.other["official-artwork"].front_default} alt="" />
      <h3 className='pokeCard__name'>{pokemon.name}</h3>
      <p className='pokeCard__types'>{types}</p>
      <p className='pokeCard__types-title'>Type</p>
      <hr />
      <section className='pokeCard__stats'>
        {
          datapokemon?.stats.map (stat => (
        <div className='pokeCard__stat' >
          <p className='pokeCard__stat-name'>{stat.stat.name}</p>
          <p className='pokeCard__stat-value'>{stat.base_stat}</p>
        </div>
          ))
        }
      </section>
      </section>
  </article>
  )
}

export default PokemonCard