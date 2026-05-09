"use client"

import { useEffect, useRef } from "react"
import "./Contact.css"

const Contact = ({ onButtonEnter, onButtonLeave, onTextEnter, onTextLeave }) => {
  const cornerTLRef  = useRef(null)
  const cornerTRRef  = useRef(null)
  const headingRef   = useRef(null)
  const introRef     = useRef(null)
  const detailsRef   = useRef(null)
  const floatARef    = useRef(null)
  const floatBRef    = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("animate")),
      { threshold: 0.1 }
    )

    const refs = [cornerTLRef, cornerTRRef, headingRef, introRef, detailsRef, floatARef, floatBRef]
    refs.forEach((r) => r.current && observer.observe(r.current))
    return () => refs.forEach((r) => r.current && observer.unobserve(r.current))
  }, [])

  const details = [
    { label: "Email",      value: "psicomfrotafreire@gmail.com" },
    { label: "Telefone",   value: "(11) 94543-7667"             },
    { label: "Localização", value: "Santana de Parnaíba, São Paulo" },
  ]

  return (
    <section id="contact" className="contact">

      {/* Dotted grid */}
      <div className="contact__dots" aria-hidden="true" />

      {/* Ghost watermark */}
      <span className="contact__bg-word" aria-hidden="true">Contato</span>

      {/* Corner labels */}
      <span ref={cornerTLRef} className="contact__corner contact__corner--tl">Contato</span>
      <span ref={cornerTRRef} className="contact__corner contact__corner--tr">São Paulo</span>

      {/* Floating pills */}
      <span ref={floatARef} className="contact__float-tag contact__float-tag--a">Disponível</span>
      <span ref={floatBRef} className="contact__float-tag contact__float-tag--b">LinkedIn</span>

      {/* Heading */}
      <div
        ref={headingRef}
        className="contact__heading-wrap"
        onMouseEnter={onTextEnter}
        onMouseLeave={onTextLeave}
      >
        <span className="contact__eyebrow">05 — Contato</span>
        <span className="contact__title">
          Entre em <em>Contato</em>
        </span>
      </div>

      {/* Two-column panel */}
      <div className="contact__inner">

        {/* LEFT — intro + email CTA */}
        <div
          ref={introRef}
          className="contact__intro"
          onMouseEnter={onTextEnter}
          onMouseLeave={onTextLeave}
        >
          <h3 className="contact__intro-title">Vamos nos Conectar</h3>
          <hr className="contact__intro-rule" />
          <p className="contact__intro-text">
            Fique à vontade para entrar em contato caso tenha interesse em colaboração, tenha dúvidas sobre
            psicologia e saúde mental, ou simplesmente queira conversar.
          </p>

          <div className="contact__cta-row">
            <div className="contact__cta-line" />
            <a
              href="mailto:psicomfrotafreire@gmail.com"
              className="contact__cta-btn"
              onMouseEnter={onButtonEnter}
              onMouseLeave={onButtonLeave}
            >
              Enviar e-mail
            </a>
            <div className="contact__cta-line" />
          </div>
        </div>

        {/* RIGHT — details list */}
        <div
          ref={detailsRef}
          className="contact__details"
          onMouseEnter={onTextEnter}
          onMouseLeave={onTextLeave}
        >
          {details.map((d) => (
            <div key={d.label} className="contact__detail">
              <span className="contact__detail-label">{d.label}</span>
              <span className="contact__detail-value">{d.value}</span>
            </div>
          ))}

          {/* LinkedIn */}
          <div className="contact__social">
            <a
              href="#"
              className="contact__social-link"
              onMouseEnter={onButtonEnter}
              onMouseLeave={onButtonLeave}
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19,3H5C3.895,3 3,3.895 3,5V19C3,20.105 3.895,21 5,21H19C20.105,21 21,20.105 21,19V5C21,3.895 20.105,3 19,3M9,17H6.477V10H9V17M7.694,8.717C6.923,8.717 6.408,8.203 6.408,7.517C6.408,6.831 6.922,6.317 7.779,6.317C8.55,6.317 9.065,6.831 9.065,7.517C9.065,8.203 8.551,8.717 7.694,8.717M18,17H15.558V13.174C15.558,12.116 14.907,11.872 14.663,11.872C14.419,11.872 13.605,12.035 13.605,13.174C13.605,13.337 13.605,17 13.605,17H11.082V10H13.605V10.977C13.93,10.407 14.581,10 15.802,10C17.023,10 18,10.977 18,13.174V17Z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact