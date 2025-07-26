"use client"

import { useState, useEffect } from "react"
import "./App.css"
import CustomCursor from "./components/CustomCursor"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import QualificationsSection from "./components/QualificationsSection"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import NeuronBackground from "./components/NeuronBackground"

function App() {
  const [cursorVariant, setCursorVariant] = useState("default")
  const [activeSection, setActiveSection] = useState("hero")

  const handleScroll = () => {
    const sections = ["hero", "about", "qualifications", "projects", "contact"]
    const scrollPosition = window.scrollY

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) {
        const offsetTop = element.offsetTop
        const height = element.offsetHeight

        if (scrollPosition >= offsetTop - 200 && scrollPosition < offsetTop + height - 200) {
          setActiveSection(section)
        }
      }
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const textEnter = () => setCursorVariant("text")
  const buttonEnter = () => setCursorVariant("button")
  const defaultCursor = () => setCursorVariant("default")

  return (
    <div className="app">
      <CustomCursor variant={cursorVariant} />
      <NeuronBackground />
      <Header activeSection={activeSection} onMouseEnter={textEnter} onMouseLeave={defaultCursor} />
      <main>
        <Hero
          onButtonEnter={buttonEnter}
          onButtonLeave={defaultCursor}
          onTextEnter={textEnter}
          onTextLeave={defaultCursor}
        />
        <About onTextEnter={textEnter} onTextLeave={defaultCursor} />
        <QualificationsSection
          onButtonEnter={buttonEnter}
          onButtonLeave={defaultCursor}
          onTextEnter={textEnter}
          onTextLeave={defaultCursor}
        />
       
        <Contact
          onButtonEnter={buttonEnter}
          onButtonLeave={defaultCursor}
          onTextEnter={textEnter}
          onTextLeave={defaultCursor}
        />
      </main>
      <Footer onTextEnter={textEnter} onTextLeave={defaultCursor} />
    </div>
  )
}

export default App
