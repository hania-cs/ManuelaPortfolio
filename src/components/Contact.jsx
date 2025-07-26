"use client"

import { useEffect, useRef, useState } from "react"
import "./Contact.css"

const Contact = ({ onButtonEnter, onButtonLeave, onTextEnter, onTextLeave }) => {
  const titleRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

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
    if (formRef.current) observer.observe(formRef.current)
    if (infoRef.current) observer.observe(infoRef.current)

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current)
      if (formRef.current) observer.unobserve(formRef.current)
      if (infoRef.current) observer.unobserve(infoRef.current)
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <section id="contact" className="contact">
      <h2 ref={titleRef} className="section-title contact__title" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
        Entre em Contato
      </h2>

      <div className="contact__container">
        <div ref={formRef} className="contact__form-container">
          <div className="contact__form-header">
            <h3 className="contact__form-title" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
              Enviar Mensagem
            </h3>
            <p className="contact__form-subtitle" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
             Adoraria receber sua mensagem. Envie-a e responderei o mais rápido possível.
            </p>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label className="contact__label" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  className="contact__input"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              <div className="contact__form-group">
                <label className="contact__label" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="contact__input"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu.email@exemplo.com"
                  required
                />
              </div>
            </div>

            <div className="contact__form-group">
              <label className="contact__label" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                Assunto
              </label>
              <input
                type="text"
                name="subject"
                className="contact__input"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Sobre o que é?"
                required
              />
            </div>

            <div className="contact__form-group">
              <label className="contact__label" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                Mensagem
              </label>
              <textarea
                name="message"
                className="contact__textarea"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Me conte mais..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact__btn btn"
              onMouseEnter={onButtonEnter}
              onMouseLeave={onButtonLeave}
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        <div ref={infoRef} className="contact__info">
          <div className="contact__info-header">
            <h3 className="contact__info-title" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
              Vamos nos Conectar
            </h3>
            <p className="contact__info-text" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
             Fique à vontade para entrar em contato caso tenha interesse na minha pesquisa, esteja buscando uma colaboração ou tenha alguma dúvida sobre psicologia e saúde mental.my research, looking for a collaboration, or have any
              questions about psychology and mental health.
            </p>
          </div>

          <div className="contact__info-items">
            <div className="contact__info-item">
              <div className="contact__info-item-label" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                Email
              </div>
              <div className="contact__info-item-text" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                psicomfrotafreire@gmail.com
              </div>
            </div>

            <div className="contact__info-item">
              <div className="contact__info-item-label" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                Phone
              </div>
              <div className="contact__info-item-text" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                (11) 94543-7667
              </div>
            </div>

            <div className="contact__info-item">
              <div className="contact__info-item-label" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                Location
              </div>
              <div className="contact__info-item-text" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
                Santana De Parnaíba, São Paulo
              </div>
            </div>
          </div>

          <div className="contact__social">
            <div className="contact__social-header" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
              Follow Me
            </div>
            <div className="contact__social-links">
              <a href="#" className="contact__social-link" onMouseEnter={onButtonEnter} onMouseLeave={onButtonLeave}>
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19,3H5C3.895,3 3,3.895 3,5V19C3,20.105 3.895,21 5,21H19C20.105,21 21,20.105 21,19V5C21,3.895 20.105,3 19,3M9,17H6.477V10H9V17M7.694,8.717C6.923,8.717 6.408,8.203 6.408,7.517C6.408,6.831 6.922,6.317 7.779,6.317C8.55,6.317 9.065,6.831 9.065,7.517C9.065,8.203 8.551,8.717 7.694,8.717M18,17H15.558V13.174C15.558,12.116 14.907,11.872 14.663,11.872C14.419,11.872 13.605,12.035 13.605,13.174C13.605,13.337 13.605,17 13.605,17H11.082V10H13.605V10.977C13.93,10.407 14.581,10 15.802,10C17.023,10 18,10.977 18,13.174V17Z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
