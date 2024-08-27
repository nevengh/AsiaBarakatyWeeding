
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import AboutUS from './Pages/AboutUS/AboutUS'
const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/about-us' element={<AboutUS/>}  />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App