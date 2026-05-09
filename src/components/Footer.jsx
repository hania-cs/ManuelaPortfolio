"use client"

import "./Footer.css"

const Footer = ({ onTextEnter, onTextLeave }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
          &copy; {currentYear} Manuela Frota Freire
        </p>
        <p className="footer__credit" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
         Made with ❤️ by{" "}
          <a href="https://vertexa.digital" target="_blank" rel="noopener noreferrer">
            Vertexa Digital Studios
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer