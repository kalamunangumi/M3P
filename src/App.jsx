import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Layout from './components/Layout'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import About from './pages/About'
import Job from './pages/Job'
import EditJob from './pages/EditJob'

// import {Home, About, Services, Contact} from './pages/'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='jobs/:id' element={<Job/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='services' element={<Services/>}/>
                <Route path='/jobs/:id/edit' element={<EditJob/>}/>               
            </Route>
          </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        reverseOrder={false}
      />

    </>
  )
}

export default App;