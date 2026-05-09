"use client"

import { useState, useEffect } from "react"
import "./Header.css"

const Header = ({ activeSection, onMouseEnter, onMouseLeave }) => {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" })
    setMenuOpen(false)
  }

  const navItems = [
    { id: "about",           label: "Sobre"                      },
    { id: "qualifications",  label: "Qualificações"              },
    { id: "contact",         label: "Contato"                    },
  ]

  return (
    <header className={`header${scrolled ? " header--scrolled" : ""}`}>
      <div className="header__container">

        {/* Logo — Manuela Frota Freire split into weight variants */}
        <div
          className="header__logo"
          onClick={() => scrollToSection("hero")}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <span className="header__logo-first">Manuela</span>
          <span className="header__logo-middle">Frota</span>
          <span className="header__logo-last">Freire</span>
        </div>

        {/* Hamburger */}
        <div
          className={`header__menu-toggle${menuOpen ? " active" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </div>

        {/* Nav */}
        <nav className={`header__nav${menuOpen ? " header__nav--open" : ""}`}>
          <ul>
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? "active" : ""}
                  onClick={(e) => { e.preventDefault(); scrollToSection(id) }}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  {label}
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