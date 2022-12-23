import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'


function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home/>} />

        <Route element={} >
        <Route path='/pokedex' element = {<Pokedex/>} />
        <Route path='/pokedex/:id' element = {<Pokedex/>} />
        </Route>
       
     </Routes>
       
    </div>
  )
}

export default App
