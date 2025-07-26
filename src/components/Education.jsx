"use client"

import { useEffect, useRef } from "react"
import "./Education.css"
import { Education as EducationIcon } from "./Icons"

const Education = ({ onTextEnter, onTextLeave }) => {
  const titleRef = useRef(null)
  const itemsRef = useRef([])

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

    if (titleRef.current) observer.observe(titleRef.current)
    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current)
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item)
      })
    }
  }, [])

  const educationData = [
    {
      degree: "Bacharelado em Psicologia",
      institution: "Universidade Presbiteriana Mackenzie",
      years: "2023- atualmente",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    {
      degree: "Certificado de Conclusão do Ensino Médio",
      institution: "Escola Morumbi Alphaville",
      years: "2021-2023",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    },
    
  ]

  return (
    <section id="education" className="education">
      <h2
        ref={titleRef}
        className="section-title education__title"
        onMouseEnter={onTextEnter}
        onMouseLeave={onTextLeave}
      >
        Education
      </h2>

      <div className="education__timeline">
        {educationData.map((item, index) => (
          <div key={index} ref={(el) => (itemsRef.current[index] = el)} className="education__item">
            <div className="education__icon">
              <EducationIcon />
            </div>
            <div className="education__content card">
              <div className="education__years" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                {item.years}
              </div>
              <h3 className="education__degree" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                {item.degree}
              </h3>
              <div className="education__institution" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                {item.institution}
              </div>
              <p className="education__description" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
    
    
  )
}

export default Education
