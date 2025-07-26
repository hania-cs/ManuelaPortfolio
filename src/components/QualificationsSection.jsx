"use client"

import { useState, useEffect, useRef } from "react"
import "./QualificationsSection.css"

const QualificationsSection = ({ onTextEnter, onTextLeave, onButtonEnter, onButtonLeave }) => {
  const [activeTab, setActiveTab] = useState("education")
  const titleRef = useRef(null)
  const tabsRef = useRef(null)
  const contentRef = useRef(null)
  const skillsRef = useRef(null)
  const [animateSkills, setAnimateSkills] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
            if (entry.target === skillsRef.current) {
              setAnimateSkills(true)
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (tabsRef.current) observer.observe(tabsRef.current)
    if (contentRef.current) observer.observe(contentRef.current)
    if (skillsRef.current) observer.observe(skillsRef.current)

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current)
      if (tabsRef.current) observer.unobserve(tabsRef.current)
      if (contentRef.current) observer.unobserve(contentRef.current)
      if (skillsRef.current) observer.unobserve(skillsRef.current)
    }
  }, [])

  useEffect(() => {
    if (activeTab === "skills") {
      setTimeout(() => {
        setAnimateSkills(true)
      }, 300)
    }
  }, [activeTab])

  const educationData = [
    {
      degree: "Bacharelado em Psicologia",
      institution: "Universidade Presbiteriana Mackenzie",
      years: "2023 - atualmente",
      description:
        "Cursando graduação em Psicologia, com foco na compreensão do comportamento humano, processos mentais e abordagens baseadas em evidências para o bem-estar emocional e cognitivo.",
    },
    {
      degree: "Ensino Médio",
      institution: "Escola Morumbi Alphaville",
      years: "2021 - 2023",
      description:
        "Formação completa no Ensino Médio, com ênfase em desenvolvimento acadêmico sólido, pensamento crítico e participação ativa em atividades escolares.",
    },
  ]

  const experienceData = [
    {
      position: "Assistente de Terapeuta",
      company: "",
      years: "1 mês",
      description:
        "Apoiei uma criança com necessidades especiais durante sessões terapêuticas, auxiliando na aplicação de estratégias desenvolvidas pelo terapeuta responsável. Colaborei com a equipe e a família para promover um ambiente acolhedor, seguro e estimulante, contribuindo para o progresso emocional e comportamental da criança.",
      achievements: [
        
      ],
    },
   
  ]



  const skillsData = [
    {
      category: "Habilidades de Pesquisa",
      skills: [
        { name: "Revisão Científica", level: 75 },
        { name: "Coleta de Dados", level: 70 },
        { name: "Planejamento de Pesquisa", level: 60 },
        { name: "Análise Estatística", level: 50 },
        { name: "Escrita Acadêmica", level: 78 },
      ],
    },
    {
      category: " Habilidades Clínicas e Interpessoais",
      skills: [
        { name: "Empatia", level: 95 },
        { name: "Escuta Ativa", level: 90 },
        { name: "Suporte Emocional", level: 80 },
        { name: "Estratégias Comportamentais", level: 60 },
        { name: "EFT", level: 60 },
      ],
    },
    {
      category: "Habilidades Técnicas",
      skills: [
        { name: "Google Workspace", level: 85 },
        { name: "Excel", level: 30 },
        { name: "Canva", level: 95 },
      ],
    },
  ]

  return (
    <section id="qualifications" className="qualifications">
      <h2
        ref={titleRef}
        className="section-title qualifications__title"
        onMouseEnter={onTextEnter}
        onMouseLeave={onTextLeave}
      >
        Qualificações e Habilidades
      </h2>

      <div ref={tabsRef} className="qualifications__tabs">
        <div
          className={`qualifications__tab ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
          onMouseEnter={onButtonEnter}
          onMouseLeave={onButtonLeave}
        >
          <h3 className="qualifications__tab-title">Educação</h3>
        </div>

        <div
          className={`qualifications__tab ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => setActiveTab("experience")}
          onMouseEnter={onButtonEnter}
          onMouseLeave={onButtonLeave}
        >
          <h3 className="qualifications__tab-title">Experiência</h3>
        </div>

      

        <div
          className={`qualifications__tab ${activeTab === "skills" ? "active" : ""}`}
          onClick={() => setActiveTab("skills")}
          onMouseEnter={onButtonEnter}
          onMouseLeave={onButtonLeave}
        >
          <h3 className="qualifications__tab-title">Habilidades</h3>
        </div>
      </div>

      <div ref={contentRef} className="qualifications__content">
        {activeTab === "education" && (
          <div className="qualifications__grid">
            {educationData.map((item, index) => (
              <div key={index} className="qualifications__card">
                <div className="qualifications__card-header">
                  <div className="qualifications__card-info">
                    <div className="qualifications__card-years" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                      {item.years}
                    </div>
                    <h3 className="qualifications__card-title" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                      {item.degree}
                    </h3>
                    <div
                      className="qualifications__card-subtitle"
                      onMouseEnter={onTextEnter}
                      onMouseLeave={onTextLeave}
                    >
                      {item.institution}
                    </div>
                  </div>
                </div>
                <p className="qualifications__card-description" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "experience" && (
          <div className="qualifications__grid">
            {experienceData.map((item, index) => (
              <div key={index} className="qualifications__card">
                <div className="qualifications__card-header">
                  <div className="qualifications__card-info">
                    <div className="qualifications__card-years" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                      {item.years}
                    </div>
                    <h3 className="qualifications__card-title" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                      {item.position}
                    </h3>
                    <div
                      className="qualifications__card-subtitle"
                      onMouseEnter={onTextEnter}
                      onMouseLeave={onTextLeave}
                    >
                      {item.company}
                    </div>
                  </div>
                </div>
                <p className="qualifications__card-description" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                  {item.description}
                </p>
               
              </div>
            ))}
          </div>
        )}

        {activeTab === "certifications" && (
          <div className="certifications__grid">
            {certificationsData.map((cert, index) => (
              <div key={index} className="certification__card">
                <div className="certification__card-header">
                  <div className="certification__card-info">
                    <h3 className="certification__card-title" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                      {cert.title}
                    </h3>
                    <div className="certification__card-meta">
                      <span
                        className="certification__card-issuer"
                        onMouseEnter={onTextEnter}
                        onMouseLeave={onTextLeave}
                      >
                        {cert.issuer}
                      </span>
                      <span className="certification__card-date" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="certification__card-description" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                  {cert.description}
                </p>
                <div className="certification__card-footer">
                  <div className="certification__card-credential" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                    <span className="certification__credential-label">Credential ID:</span> {cert.credential}
                  </div>
                  <div className="certification__card-skills">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="certification__skill-tag"
                        onMouseEnter={onTextEnter}
                        onMouseLeave={onTextLeave}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "skills" && (
          <div ref={skillsRef} className="skills__grid">
            {skillsData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skills__category">
                <h3 className="skills__category-title" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                  {category.category}
                </h3>
                <div className="skills__list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skills__item">
                      <div className="skills__info">
                        <h4 className="skills__name" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                          {skill.name}
                        </h4>
                        <span className="skills__percentage" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skills__bar">
                        <div
                          className={`skills__progress ${animateSkills ? "animate-skill" : ""}`}
                          style={{ "--skill-width": `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default QualificationsSection
