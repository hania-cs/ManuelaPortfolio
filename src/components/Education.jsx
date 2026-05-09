"use client"

import { useEffect, useRef } from "react"
import "./Experience.css"

const Experience = ({ onTextEnter, onTextLeave }) => {
  const cornerTLRef = useRef(null)
  const cornerTRRef = useRef(null)
  const headingRef  = useRef(null)
  const floatARef   = useRef(null)
  const floatBRef   = useRef(null)
  const itemsRef    = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("animate")),
      { threshold: 0.1 }
    )

    const singles = [cornerTLRef, cornerTRRef, headingRef, floatARef, floatBRef]
    singles.forEach((r) => r.current && observer.observe(r.current))
    itemsRef.current.forEach((el) => el && observer.observe(el))

    return () => {
      singles.forEach((r) => r.current && observer.unobserve(r.current))
      itemsRef.current.forEach((el) => el && observer.unobserve(el))
    }
  }, [])

  const experienceData = [
    {
      position: "Research Psychologist",
      company: "Cognitive Science Institute",
      years: "2022 – atual",
      description:
        "Leading research projects on cognitive behavioral interventions for anxiety disorders. Developing and testing new therapeutic approaches. Supervising graduate students and research assistants.",
      achievements: [
        "Published 5 papers in high-impact journals",
        "Secured $500,000 in research grants",
        "Developed a novel therapeutic protocol for PTSD",
      ],
    },
    {
      position: "Clinical Psychologist",
      company: "Mental Health Center",
      years: "2020 – 2022",
      description:
        "Provided evidence-based psychological assessment and treatment for adults with various mental health conditions. Specialized in cognitive-behavioral therapy for anxiety and mood disorders.",
      achievements: [
        "Maintained a caseload of 20+ clients",
        "Developed group therapy protocols",
        "Achieved 85% treatment completion rate",
      ],
    },
    {
      position: "Research Assistant",
      company: "Neuroscience Laboratory, UC Berkeley",
      years: "2016 – 2020",
      description:
        "Assisted in designing and conducting experiments on the neural basis of decision-making and emotional regulation. Analyzed data using advanced statistical methods and neuroimaging techniques.",
      achievements: [
        "Co-authored 3 research papers",
        "Presented findings at 5 international conferences",
        "Developed a novel fMRI analysis protocol",
      ],
    },
  ]

  return (
    <section id="experience" className="experience">

      {/* Dotted grid */}
      <div className="experience__dots" aria-hidden="true" />

      {/* Ghost watermark */}
      <span className="experience__bg-word" aria-hidden="true">Experiência</span>

      {/* Corner labels */}
      <span ref={cornerTLRef} className="experience__corner experience__corner--tl">Experiência</span>
      <span ref={cornerTRRef} className="experience__corner experience__corner--tr">Profissional</span>

      {/* Floating pills */}
      <span ref={floatARef} className="experience__float-tag experience__float-tag--a">Voluntária</span>
      <span ref={floatBRef} className="experience__float-tag experience__float-tag--b">Eventos</span>

      {/* Heading */}
      <div
        ref={headingRef}
        className="experience__heading-wrap"
        onMouseEnter={onTextEnter}
        onMouseLeave={onTextLeave}
      >
        <span className="experience__eyebrow">03 — Trajetória</span>
        <span className="experience__title">
          Experiência <em>Profissional</em>
        </span>
      </div>

      {/* Grid */}
      <div className="experience__inner">
        <div className="experience__grid">
          {experienceData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="experience__item"
              onMouseEnter={onTextEnter}
              onMouseLeave={onTextLeave}
            >
              <div className="experience__years">{item.years}</div>

              <h3 className="experience__position">{item.position}</h3>
              <hr className="experience__rule" />
              <div className="experience__company">{item.company}</div>

              <p className="experience__description">{item.description}</p>

              <span className="experience__achievements-label">Destaques</span>
              <ul className="experience__achievements">
                {item.achievements.map((a, i) => (
                  <li key={i} className="experience__achievement">{a}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Experience