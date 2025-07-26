"use client"

import { useEffect, useRef } from "react"
import "./NeuronBackground.css"

const NeuronBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId
    let particles = []
    let connections = []

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 2 + 1
        this.color = `rgba(106, 48, 147, ${Math.random() * 0.5 + 0.2})`
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    class Connection {
      constructor(p1, p2) {
        this.p1 = p1
        this.p2 = p2
        this.distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))
        this.maxDistance = 150
      }

      update() {
        this.distance = Math.sqrt(Math.pow(this.p1.x - this.p2.x, 2) + Math.pow(this.p1.y - this.p2.y, 2))
      }

      draw() {
        if (this.distance < this.maxDistance) {
          ctx.beginPath()
          ctx.moveTo(this.p1.x, this.p1.y)
          ctx.lineTo(this.p2.x, this.p2.y)
          const opacity = 1 - this.distance / this.maxDistance
          ctx.strokeStyle = `rgba(106, 48, 147, ${opacity * 0.2})`
          ctx.lineWidth = opacity
          ctx.stroke()
        }
      }
    }

    // Define initParticles function before it's used in resizeCanvas
    const initParticles = () => {
      particles = []
      connections = []

      // Create particles
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100)
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }

      // Create connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          connections.push(new Connection(particles[i], particles[j]))
        }
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Update and draw connections
      connections.forEach((connection) => {
        connection.update()
        connection.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="neuron-background" />
}

export default NeuronBackground
