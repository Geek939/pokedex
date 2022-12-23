import React from 'react'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'
import {useDispatch} from 'react-redux'
import "./styles/FormHome.css"

const FormHome = () => {
  

  const dispatch =  useDispatch()

  const handleSubmit =(e) =>{
    e.preventDefault()
  const nameTrainer =  e.target.nameTrainer.value.trim()
    dispatch(setNameTrainerGlobal(nameTrainer))
  }
  return (
    
    <form className='home__form' onSubmit={handleSubmit}>
        <input required className='home__input' type="text" id='nameTrainer' placeholder='your name...'/>
        <button className='home__btn' >Start!</button>
    </form>

  )
}

export default FormHome