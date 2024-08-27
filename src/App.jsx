
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import AboutUS from './Pages/AboutUS/AboutUS'
import ExtraService from './Pages/ExtraService/ExtraService'
import PackagesPage from './Pages/packagesPage/packagesPage'
const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/about-us' element={<AboutUS/>}  />
          <Route path='/extraServices' element={<ExtraService/>}  />
          <Route path='/packages' element={<PackagesPage/>}  />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App