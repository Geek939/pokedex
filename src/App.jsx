import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import Pokemon from './pages/Pokemon'
import RouteProtected from './components/RouteProtected'



function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home/>} />

        <Route element={<RouteProtected/>} >
        <Route path='/pokedex' element = {<Pokedex/>} />
        <Route path='/pokedex/:id' element = {<Pokemon/>} />
        </Route>
       
     </Routes>
       
    </div>
  )
}

export default App
