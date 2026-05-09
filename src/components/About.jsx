"use client"

import { useEffect, useRef } from "react"
import "./About.css"

const About = ({ onTextEnter, onTextLeave }) => {
  const cornerTLRef   = useRef(null)
  const cornerTRRef   = useRef(null)
  const headingRef    = useRef(null)
  const bioRef        = useRef(null)
  const asideRef      = useRef(null)
  const floatARef     = useRef(null)
  const floatBRef     = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("animate")),
      { threshold: 0.1 }
    )

    const refs = [cornerTLRef, cornerTRRef, headingRef, bioRef, asideRef, floatARef, floatBRef]
    refs.forEach((r) => r.current && observer.observe(r.current))
    return () => refs.forEach((r) => r.current && observer.unobserve(r.current))
  }, [])

  return (
    <section id="about" className="about">

      {/* Dotted grid */}
      <div className="about__dots" aria-hidden="true" />

      {/* Ghost watermark */}
      <span className="about__bg-word" aria-hidden="true">Sobre</span>

      {/* Corner labels */}
      <span ref={cornerTLRef} className="about__corner about__corner--tl">Sobre mim</span>
      <span ref={cornerTRRef} className="about__corner about__corner--tr">Psicologia</span>

      {/* Floating decorative pills */}
      <span ref={floatARef} className="about__float-tag about__float-tag--a">Mackenzie</span>
      <span ref={floatBRef} className="about__float-tag about__float-tag--b">2023 →</span>

      {/* ── HEADING ── */}
      <div
        ref={headingRef}
        className="about__heading-wrap"
        onMouseEnter={onTextEnter}
        onMouseLeave={onTextLeave}
      >
        <span className="about__label">01 — Quem sou eu</span>
        <span className="about__title">
          Sobre <em>Mim</em>
        </span>
      </div>

      {/* ── TWO-COLUMN BODY ── */}
      <div className="about__inner">

        {/* LEFT — bio */}
        <div
          ref={bioRef}
          className="about__bio"
          onMouseEnter={onTextEnter}
          onMouseLeave={onTextLeave}
        >
          <p className="about__bio-text">
            Olá! Sou Manuela Frota Freire, uma estudante apaixonada e dedicada de Psicologia na Universidade
            Presbiteriana Mackenzie. Com uma sólida formação acadêmica e experiência educacional internacional, estou
            sempre em busca de novos desafios profissionais que me permitam crescer, contribuir de forma significativa
            e adquirir vivências reais na área da Psicologia.
          </p>

          <p className="about__bio-text">
            Tenho experiência na organização de eventos acadêmicos e trabalhos voluntários, o que fortaleceu minhas
            habilidades de comunicação, empatia e trabalho em equipe. Tenho interesse especial em saúde emocional,
            resolução de conflitos e engajamento digital, e busquei formações complementares em Técnicas de Libertação
            Emocional (EFT) e Marketing Digital.
          </p>

          <hr className="about__rule" />

          <span className="about__interests-label">Áreas de Interesse</span>
          <div className="about__tags">
            <span className="about__tag about__tag--outline" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>Saúde Emocional</span>
            <span className="about__tag about__tag--muted"   onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>Resolução de Conflitos</span>
            <span className="about__tag about__tag--outline" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>EFT</span>
            <span className="about__tag about__tag--muted"   onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>Marketing Digital</span>
            <span className="about__tag about__tag--outline" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>Psicologia Clínica</span>
          </div>
        </div>

        {/* RIGHT — stats + languages */}
        <div
          ref={asideRef}
          className="about__aside"
          onMouseEnter={onTextEnter}
          onMouseLeave={onTextLeave}
        >

          {/* Stats grid — bordered, no cards */}
          <div className="about__stats">
            <div className="about__stat">
              <div className="about__stat-number">2023</div>
              <div className="about__stat-label">Início da Graduação</div>
            </div>
            <div className="about__stat">
              <div className="about__stat-number">3</div>
              <div className="about__stat-label">Idiomas</div>
            </div>
            <div className="about__stat">
              <div className="about__stat-number">100%</div>
              <div className="about__stat-label">Dedicação</div>
            </div>
            <div className="about__stat">
              <div className="about__stat-number">∞</div>
              <div className="about__stat-label">Curiosidade</div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <span className="about__lang-label">Idiomas</span>
            <div className="about__languages">
              <div className="about__language">
                <span className="about__language-name">Português</span>
                <span className="about__language-level">Nativo</span>
              </div>
              <div className="about__language">
                <span className="about__language-name">Inglês</span>
                <span className="about__language-level">Fluente</span>
              </div>
              <div className="about__language">
                <span className="about__language-name">Espanhol</span>
                <span className="about__language-level">Básico</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default About