import './App.css'
import Login from './components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Appointments from './components/Appointments'


function App() {
  return (
<BrowserRouter>
  <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/appointments' element={<Appointments/>}/>

      
    </Routes>
   
  </BrowserRouter>

  


    
  )
}

export default App
