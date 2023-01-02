import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Pokemon = () => {

  const [dataPokemon, setDataPokemon] = useState()
  
  const {id} = useParams()
  
  useEffect(()=> {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
    .then(res => setDataPokemon(res.data))
    .catch(err => console.log(err))

  },[])
  
  
  return (
    <main>
     
      <section className='pokemonId'>
        <section className='pokemonId__header'></section>
        <img className='pokemonId__img' src={dataPokemon?.sprites.other["official-artwork"].front_default} alt="" />
        <h3 className='pokemonId__id'>{dataPokemon?.id}</h3>
        <h2 className='pokemonId__name'>{dataPokemon.name}</h2>
        <section className='pokemonId__features'>
          <div className='pokemonId__feature'>
            <p className='pokemonId__feature-name'>Weight</p>
            <p className='pokemonId__feature-value'>{dataPokemon.weight}</p>
          </div>
          <div className='pokemonId__feature'>
            <p className='pokemonId__feature-name'>Height</p>
            <p className='pokemonId__feature-value'>{dataPokemon.height}</p>
          </div>
        </section>
        <section className='pokemonId__info'>
          <div className='pokemonId__type'>
            <h4 className='pokemonId__type-title'>Types</h4>
            <div className='pokemonId__type-container'>
              {
                dataPokemon?.types.map(type => <p className='pokemonId__type-value' key={type.type.name}>{type.type.name}</p>)
              }
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
          <div className='pokemonId__info-skills'>
            <h4 className='pokemonId__skills-title'>Abilities</h4>
            <div className='pokemonId__skill-container'>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </section>
        <section className='pokemonId__stats'>
          <h3 className='pokemonId__stats-title'>Stats</h3>
          <div className='pokemonId__stats-container'>
            {/*Dinamicamente*/} 
            <div className='pokemonId__stat'>
              <div className='pokemonId__stat-header'>
                <p className='pokemonId__stat-name'>HP</p>
                <p className='pokemonId__stat-value'>45/150</p>
              </div>
              <div className='pokemonId__stat-bar'>
                <div className='pokemonId__stat-barProgress'></div>
              </div>
            </div>
          </div>

        </section>
      </section>
    </main>
  )
}

export default Pokemon