"use client"

import { useEffect, useRef } from "react"
import "./Hero.css"

const Hero = ({ onButtonEnter, onButtonLeave, onTextEnter, onTextLeave }) => {
  const nameRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (nameRef.current) observer.observe(nameRef.current)
    if (titleRef.current) observer.observe(titleRef.current)
    if (descriptionRef.current) observer.observe(descriptionRef.current)
    if (buttonRef.current) observer.observe(buttonRef.current)

    return () => {
      if (nameRef.current) observer.unobserve(nameRef.current)
      if (titleRef.current) observer.unobserve(titleRef.current)
      if (descriptionRef.current) observer.unobserve(descriptionRef.current)
      if (buttonRef.current) observer.unobserve(buttonRef.current)
    }
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <h1 ref={nameRef} className="hero__name" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
        Manuela Frota Freire
        </h1>
        <h2 ref={titleRef} className="hero__title" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
        Estudante de Psicologia
        </h2>
        <p ref={descriptionRef} className="hero__description" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
        </p>
        <div ref={buttonRef} className="hero__buttons">
         
          <button
            className="btn hero__btn hero__btn--secondary"
            onMouseEnter={onButtonEnter}
            onMouseLeave={onButtonLeave}
            onClick={() => {
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }}
          >
            
            Entre em contato
          </button>
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero__brain">
          <div className="hero__brain-circle"></div>
          <div className="hero__brain-circle"></div>
          <div className="hero__brain-circle"></div>
          <div className="hero__brain-circle"></div>
          <div className="hero__brain-circle"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
