import axios from 'axios'
import React, { useEffect, useState } from 'react'



const PokemonCard = ({pokemon}) => {

  const [datapokemon, setDatapokemon] = useState()



  useEffect(()=> {
    axios.get(pokemon.url)
      .then(res => setDatapokemon (res.data))
      .catch(err => console.log (err)) 
    
  },[])

    const types = datapokemon?.types.map(type => type.type.name[0].toUpperCase() + type.type.name.substring(1))


  return (
    <article className='pokeCard'>
      <section className='pokeCard_header'></section>
      <section className='pokecard_content'>
      <img className='pokeCard_img' src= {datapokemon?.sprites.other["official-artwork"].front_default} alt="" />
      <h3 className='pokeCard_name'></h3>
      <p className='pokeCard_types'></p>
      <p className='pokeCard_types-title'></p>
      <hr />
      <section className='pokeCard_stats'>
        <div className='pokeCard_stat' >
          <p className='pokeCard_stat-name' ></p>
          <p className='pokeCard_stat-value' ></p>
        </div>
      </section>
      </section>
  <h3>{pokemon.name}</h3>
  </article>
  )
}

export default PokemonCard