"use client"

import "./Footer.css"

const Footer = ({ onTextEnter, onTextLeave }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright" onMouseEnter={onTextEnter} onMouseLeave={onTextLeave}>
          &copy; {currentYear} Hania Seifeldeen. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
