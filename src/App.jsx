
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import AboutUS from './Pages/AboutUS/AboutUS'
import ExtraService from './Pages/ExtraService/ExtraService'
import Packages_Page from './Pages/packagesPage/Packages_Page'
import UsersOpinions from './Pages/UsersOpinions/UsersOpinions'
import AlbumPhotos from './Pages/AlbumPhotos/AlbumPhotos'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/about-us' element={<AboutUS/>}  />
          <Route path='/extraServices' element={<ExtraService/>}  />
          <Route path='/packages' element={<Packages_Page/>}  />
          <Route path='/user-opinion' element={<UsersOpinions/>}  />
          <Route path='/albums' element={<AlbumPhotos/>}  />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App