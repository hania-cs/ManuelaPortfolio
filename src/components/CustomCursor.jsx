"use client"

import { useState, useEffect } from "react"
import "./CustomCursor.css"

const CustomCursor = ({ variant }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)
    const handleMouseLeave = () => setHidden(true)
    const handleMouseEnter = () => setHidden(false)

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  const cursorClasses = `cursor ${clicked ? "cursor--clicked" : ""} ${
    hidden ? "cursor--hidden" : ""
  } cursor--${variant}`

  const ringClasses = `cursor-ring ${clicked ? "cursor-ring--clicked" : ""} ${
    hidden ? "cursor-ring--hidden" : ""
  } cursor-ring--${variant}`

  return (
    <>
      <div
        className={cursorClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={ringClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  )
}

export default CustomCursor
