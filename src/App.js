import React from "react"
import "./assets/main.css"
import Header from "./components/Header"
import Login from "./components/Login"

function App() {
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black flex flex-col h-screen justify-between">
      <Header classNameProps="h-10" />
      <div id="main" className="container mx-auto">
        <Login />
      </div>
      <footer className="h-10"></footer>
    </div>
  )
}

export default App
