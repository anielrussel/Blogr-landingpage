import React from "react"
import Design from "./components/Design"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import State from "./components/State"
import Tooling from "./components/Tooling"

function App() {

  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Design />
      <State />
      <Tooling />
      <Footer />
    </div>
  )
}

export default App
