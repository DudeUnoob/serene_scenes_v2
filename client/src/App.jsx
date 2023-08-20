import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import  initializeFirebase from './functions/initializeFirebase'
import NavigationBar from './components/NavigationBar'
import Login from './pages/Login'
import { UserProvider } from './context/UserContext'


function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    initializeFirebase()
  }, [])

  return (
   
    <BrowserRouter>
    <UserProvider>
    <NavigationBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </NavigationBar>
    </UserProvider>
    </BrowserRouter>
  )
}

export default App
