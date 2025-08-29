import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import { Toaster } from "react-hot-toast"
import {
  BrowserRouter as Router
} from "react-router-dom";
function App() {

  return (
    <>
    <Router>
      <Navigation/>
      <Toaster
      toastOptions={{
        duration: 1000
      }}></Toaster>
    </Router>
    </>
  )
}

export default App
