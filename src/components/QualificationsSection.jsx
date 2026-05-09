"use client"

import { useState, useEffect, useRef } from "react"
import "./QualificationsSection.css"

const QualificationsSection = ({ onTextEnter, onTextLeave, onButtonEnter, onButtonLeave }) => {
  const [activeTab, setActiveTab]       = useState("education")
  const [animateSkills, setAnimateSkills] = useState(false)

  const cornerTLRef  = useRef(null)
  const cornerTRRef  = useRef(null)
  const headingRef   = useRef(null)
  const tabsRef      = useRef(null)
  const contentRef   = useRef(null)
  const floatARef    = useRef(null)
  const floatBRef    = useRef(null)
  const skillsRef    = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate")
            if (e.target === skillsRef.current) setAnimateSkills(true)
          }
        }),
      { threshold: 0.1 }
    )

    const refs = [cornerTLRef, cornerTRRef, headingRef, tabsRef, contentRef, floatARef, floatBRef]
    refs.forEach((r) => r.current && observer.observe(r.current))
    if (skillsRef.current) observer.observe(skillsRef.current)

    return () => {
      refs.forEach((r) => r.current && observer.unobserve(r.current))
      if (skillsRef.current) observer.unobserve(skillsRef.current)
    }
  }, [])

  // re-animate skill bars when tab is switched to "skills"
  useEffect(() => {
    if (activeTab === "skills") {
      setAnimateSkills(false)
      setTimeout(() => setAnimateSkills(true), 100)
    }
  }, [activeTab])

  /* ── DATA ── */
  const educationData = [
    {
      degree: "Bacharelado em Psicologia",
      institution: "Universidade Presbiteriana Mackenzie",
      years: "2023 – atual",
      description:
        "Cursando graduação em Psicologia, com foco na compreensão do comportamento humano, processos mentais e abordagens baseadas em evidências para o bem-estar emocional e cognitivo.",
    },
    {
      degree: "Ensino Médio",
      institution: "Escola Morumbi Alphaville",
      years: "2021 – 2023",
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
    },
  ]

  const skillsData = [
    {
      category: "Habilidades de Pesquisa",
      skills: [
        { name: "Revisão Científica",       level: 75 },
        { name: "Coleta de Dados",           level: 70 },
        { name: "Planejamento de Pesquisa",  level: 60 },
        { name: "Análise Estatística",       level: 50 },
        { name: "Escrita Acadêmica",         level: 78 },
      ],
    },
    {
      category: "Clínicas e Interpessoais",
      skills: [
        { name: "Empatia",                   level: 95 },
        { name: "Escuta Ativa",              level: 90 },
        { name: "Suporte Emocional",         level: 80 },
        { name: "Estratégias Comportamentais", level: 60 },
        { name: "EFT",                       level: 60 },
      ],
    },
    {
      category: "Habilidades Técnicas",
      skills: [
        { name: "Google Workspace",          level: 85 },
        { name: "Excel",                     level: 30 },
        { name: "Canva",                     level: 95 },
      ],
    },
  ]

  const tabs = [
    { id: "education",   label: "Educação"    },
    { id: "experience",  label: "Experiência" },
    { id: "skills",      label: "Habilidades" },
  ]

  return (
    <section id="qualifications" className="qualifications">

      {/* Dotted grid */}
      <div className="qualifications__dots" aria-hidden="true" />

      {/* Ghost watermark */}
      <span className="qualifications__bg-word" aria-hidden="true">Qualificações</span>

      {/* Corner labels */}
      <span ref={cornerTLRef} className="qualifications__corner qualifications__corner--tl">Qualificações</span>
      <span ref={cornerTRRef} className="qualifications__corner qualifications__corner--tr">Habilidades</span>

      {/* Floating pills */}
      <span ref={floatARef} className="qualifications__float-tag qualifications__float-tag--a">EFT</span>
      <span ref={floatBRef} className="qualifications__float-tag qualifications__float-tag--b">Mackenzie</span>

      {/* Heading */}
      <div
        ref={headingRef}
        className="qualifications__heading-wrap"
        onMouseEnter={onTextEnter}
        onMouseLeave={onTextLeave}
      >
        <span className="qualifications__eyebrow">04 — Competências</span>
        <span className="qualifications__title">
          Qualificações <em>&amp; Habilidades</em>
        </span>
      </div>

      <div className="qualifications__inner">

        {/* Tab switcher */}
        <div ref={tabsRef} className="qualifications__tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`qualifications__tab${activeTab === t.id ? " active" : ""}`}
              onClick={() => setActiveTab(t.id)}
              onMouseEnter={onButtonEnter}
              onMouseLeave={onButtonLeave}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div ref={contentRef} className="qualifications__content">

          {/* ── EDUCATION ── */}
          {activeTab === "education" && (
            <div className="qualifications__grid">
              {educationData.map((item, i) => (
                <div key={i} className="qualifications__card" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                  <div className="qualifications__card-years">{item.years}</div>
                  <h3 className="qualifications__card-title">{item.degree}</h3>
                  <hr className="qualifications__card-rule" />
                  <div className="qualifications__card-subtitle">{item.institution}</div>
                  <p className="qualifications__card-description">{item.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* ── EXPERIENCE ── */}
          {activeTab === "experience" && (
            <div className="qualifications__grid">
              {experienceData.map((item, i) => (
                <div key={i} className="qualifications__card" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                  <div className="qualifications__card-years">{item.years}</div>
                  <h3 className="qualifications__card-title">{item.position}</h3>
                  <hr className="qualifications__card-rule" />
                  {item.company && (
                    <div className="qualifications__card-subtitle">{item.company}</div>
                  )}
                  <p className="qualifications__card-description">{item.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* ── SKILLS ── */}
          {activeTab === "skills" && (
            <div ref={skillsRef} className="skills__grid">
              {skillsData.map((cat, ci) => (
                <div key={ci} className="skills__category" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                  <h3 className="skills__category-title">{cat.category}</h3>
                  <hr className="skills__category-rule" />
                  <div className="skills__list">
                    {cat.skills.map((skill, si) => (
                      <div key={si} className="skills__item">
                        <div className="skills__info">
                          <span className="skills__name">{skill.name}</span>
                          <span className="skills__percentage">{skill.level}%</span>
                        </div>
                        <div className="skills__bar">
                          <div
                            className={`skills__progress${animateSkills ? " animate-skill" : ""}`}
                            style={{ "--skill-width": `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

export default QualificationsSection