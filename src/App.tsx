import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import HomePage from './components/HomePage'
import Router from './components/Router'
import { RouterProvider } from 'react-router'
import MyUserContext from './components/MyUserContext'

function App() {

  return (
    <>
      <MyUserContext/>
      {/* <HomePage/> */}
      <RouterProvider router={Router}/>
    </>
  )
}

export default App
