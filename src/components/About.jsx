"use client"

import { useEffect, useRef } from "react"
import "./About.css"
import image from "../assets/manuela.jpg"

const About = ({ onTextEnter, onTextLeave }) => {
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const statsRef = useRef(null)

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
    if (contentRef.current) observer.observe(contentRef.current)
    if (statsRef.current) observer.observe(statsRef.current)

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current)
      if (contentRef.current) observer.unobserve(contentRef.current)
      if (statsRef.current) observer.unobserve(statsRef.current)
    }
  }, [])

  return (
    <section id="about" className="about">
      <h2 ref={titleRef} className="section-title about__title" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
        Sobre Mim
      </h2>

      <div ref={contentRef} className="about__content">
        <div className="about__text">
          <div className="about__text-card">
            <p onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
              Olá! Sou Manuela Frota Freire, uma estudante apaixonada e dedicada de Psicologia na Universidade
              Presbiteriana Mackenzie. Com uma sólida formação acadêmica e experiência educacional internacional, estou
              sempre em busca de novos desafios profissionais que me permitam crescer, contribuir de forma significativa
              e adquirir vivências reais na área da Psicologia.
            </p>
            <p onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
              Tenho experiência na organização de eventos acadêmicos e trabalhos voluntários, o que fortaleceu minhas
              habilidades de comunicação, empatia e trabalho em equipe. Tenho interesse especial em saúde emocional,
              resolução de conflitos e engajamento digital, e busquei formações complementares em Técnicas de Libertação
              Emocional (EFT) e Marketing Digital.
            </p>
            <p onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
              Fluente em português e inglês, e com conhecimento básico em espanhol, estou entusiasmada para aplicar
              minhas habilidades, curiosidade e dedicação em oportunidades que promovam mudanças positivas e contínuo
              aprendizado.
            </p>
          </div>

          <div className="about__highlights">
            <div className="about__highlight">
              <h4 onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                Áreas de Interesse
              </h4>
              <div className="about__highlight-tags">
                <span className="about__tag" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                  Saúde Emocional
                </span>
                <span className="about__tag" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                  Resolução de Conflitos
                </span>
                <span className="about__tag" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                  EFT
                </span>
                <span className="about__tag" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                  Marketing Digital
                </span>
              </div>
            </div>

            <div className="about__highlight">
              <h4 onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                Idiomas
              </h4>
              <div className="about__languages">
                <div className="about__language" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                  <span className="about__language-name">Português</span>
                  <span className="about__language-level">Nativo</span>
                </div>
                <div className="about__language" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                  <span className="about__language-name">Inglês</span>
                  <span className="about__language-level">Fluente</span>
                </div>
                <div className="about__language" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                  <span className="about__language-name">Espanhol</span>
                  <span className="about__language-level">Básico</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about__image">
          <div className="about__image-container">
            <img src={image || "/placeholder.svg"} alt="Manuela Frota Freire" className="about__image-placeholder" />
          </div>
        </div>
      </div>

      <div ref={statsRef} className="about__stats">
        <div className="about__stat">
          <div className="about__stat-number" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
            2023
          </div>
          <div className="about__stat-label" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
            Início da Graduação
          </div>
        </div>

        <div className="about__stat">
          <div className="about__stat-number" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
            3
          </div>
          <div className="about__stat-label" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
            Idiomas
          </div>
        </div>

        <div className="about__stat">
          <div className="about__stat-number" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
            100%
          </div>
          <div className="about__stat-label" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
            Dedicação
          </div>
        </div>

        <div className="about__stat">
          <div className="about__stat-number" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
            ∞
          </div>
          <div className="about__stat-label" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
            Curiosidade
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
