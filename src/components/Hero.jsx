"use client"

import { useEffect, useRef } from "react"
import "./Hero.css"
import manuela from "../assets/manuela.jpg"

const Hero = ({ onButtonEnter, onButtonLeave, onTextEnter, onTextLeave }) => {
  const cornerTL  = useRef(null)
  const cornerBR  = useRef(null)
  const tlRef     = useRef(null)
  const brRef     = useRef(null)
  const photoRef  = useRef(null)
  const tag1Ref   = useRef(null)
  const tag2Ref   = useRef(null)
  const tag3Ref   = useRef(null)
  const ctaRef    = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("animate")),
      { threshold: 0.1 }
    )

    const refs = [cornerTL, cornerBR, tlRef, brRef, photoRef, tag1Ref, tag2Ref, tag3Ref, ctaRef]
    refs.forEach((r) => r.current && observer.observe(r.current))
    return () => refs.forEach((r) => r.current && observer.unobserve(r.current))
  }, [])

  return (
    <section id="hero" className="hero">

      {/* Dotted grid */}
      <div className="hero__dots" aria-hidden="true" />

      {/* Ghost surname — decorative only */}
      <span className="hero__bg-word" aria-hidden="true">Freire</span>

      {/* Corner labels */}
      <span ref={cornerTL} className="hero__corner hero__corner--tl">Portfólio</span>

      {/* Name top-left: Manuela + Frota */}
      <div
        ref={tlRef}
        className="hero__name-tl"
        onMouseEnter={onTextEnter}
        onMouseLeave={onTextLeave}
      >
        <span className="hero__name-first">Manuela</span>
        <span className="hero__name-middle">Frota Frierre</span>
      </div>

      {/* Circular photo — dead center, slightly above */}
      <div ref={photoRef} className="hero__photo-ring">
        <img src={manuela} alt="Manuela Frota Freire" className="hero__photo" />
        <div className="hero__photo-tint" aria-hidden="true" />
      </div>

      {/* Name bottom-right: Freire — pinned so it never clips */}
      <div
        ref={brRef}
        className="hero__name-br"
        onMouseEnter={onTextEnter}
        onMouseLeave={onTextLeave}
      >
        <span className="hero__name-last">Brasil</span>
      </div>

      {/* Floating tags */}
      <span ref={tag1Ref} className="hero__tag hero__tag--solid">Estudante de Psicologia</span>
      <span ref={tag2Ref} className="hero__tag hero__tag--outline">Psicologia Clínica</span>
      <span ref={tag3Ref} className="hero__tag hero__tag--muted">2024</span>

      {/* CTA — fixed 36px from bottom, always in view */}
      <div ref={ctaRef} className="hero__cta-row">
        <div className="hero__cta-line" />
        <button
          className="hero__cta-btn"
          onMouseEnter={onButtonEnter}
          onMouseLeave={onButtonLeave}
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Entre em contato
        </button>
        <div className="hero__cta-line" />
      </div>

    </section>
  )
}

export default Hero