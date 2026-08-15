import { useEffect, useRef } from 'react'

/**
 * Mouse particle trail — draws a fading trail of dots that follow the cursor.
 * Uses a canvas overlay with pointer-events: none so it doesn't block clicks.
 * Color: muted slate-blue (#6B8DA8) with subtle glow.
 */
export default function CursorTrail() {
  const canvasRef = useRef(null)
  const pointsRef = useRef([])
  const mouseRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    // --- Render loop ---
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const { x, y } = mouseRef.current

      // Add new point
      pointsRef.current.push({
        x,
        y,
        life: 1,
        r: Math.random() * 4.8 + 2,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      })

      // Cap points
      if (pointsRef.current.length > 100) {
        pointsRef.current.shift()
      }

      // Draw all points
      for (let i = 0; i < pointsRef.current.length; i++) {
        const p = pointsRef.current[i]
        p.life -= 0.008
        p.x += p.vx
        p.y += p.vy

        if (p.life <= 0) continue

        const alpha = p.life * 0.35
        const size = p.r * p.life

        ctx.beginPath()
        // Outer glow
        ctx.arc(p.x, p.y, size * 4.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(107, 141, 168, ${alpha * 0.04})`
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(156, 188, 212, ${alpha})`
        ctx.fill()

        // Bright center
        ctx.beginPath()
        ctx.arc(p.x, p.y, size * 0.3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 218, 235, ${alpha * 0.4})`
        ctx.fill()
      }

      // Clean dead points
      pointsRef.current = pointsRef.current.filter((p) => p.life > 0)

      rafRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  )
}
