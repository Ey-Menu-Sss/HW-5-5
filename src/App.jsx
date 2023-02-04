import { useState, useCallback, useEffect, useMemo } from 'react'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import Login from './pages/login'
import Admin from './pages/admin'
import Uchastnik from './pages/uchastnik'
import Purchased from './pages/purchased'
import SinglePage from './components/singlePage'



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/uchastnik' element={<Uchastnik/>}/>
        <Route path='/purchased' element={<Purchased/>}/>
        <Route path='/:id' element={<SinglePage/>}/>
      </Routes>
    </div>
  )
}

export default App