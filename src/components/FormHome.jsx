import React from 'react'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'

const FormHome = () => {
  

  const dispatch =  useDispatch()

  const handleSubmit =(e) =>{
    e.preventDefault()
  const nameTrainer =  e.target.nameTrainer.value
    dispatch(setNameTrainerGlobal(nameTrainer))
  }
  return (
    
    <form className='home__form' onSubmit={handleSubmit}>
        <input  className='home__input' type="text" placeholder='Your name...'/>
        <button className='home__btn' >Start!</button>
    </form>

  )
}

export default FormHome