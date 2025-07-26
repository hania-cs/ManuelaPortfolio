"use client"

import { useState, useEffect } from "react"
import "./Header.css"
import { Brain } from "./Icons"

const Header = ({ activeSection, onMouseEnter, onMouseLeave }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
    setMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">
        <div
          className="header__logo"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={() => scrollToSection("hero")}
        >
          <Brain />
          <span>Manuela</span>
        </div>

        <div
          className={`header__menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
          <ul>
            {["about", "qualifications", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={activeSection === section ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(section)
                  }}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  {section === "qualifications"
                    ? "Qualificações e Habilidades"
                    : section === "about"
                    ? "Sobre"
                    : section === "contact"
                    ? "Contato"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
