import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SearchFilter from './components/SearchBar'
import JobCard from './components/JobCard'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from './Layout/Layout'
import CreateJobPost from './components/CreateJobPost'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}/>
    <Route path='/create-job' element={<CreateJobPost/>}/>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
