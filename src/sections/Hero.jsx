import { useEffect, useRef } from 'react'

export default function Hero() {
  const frostRef = useRef(null)

  useEffect(() => {
    const frost = frostRef.current
    if (!frost) return
    let targetX = -100, targetY = -100
    let currentX = -100, currentY = -100
    let raf = null

    const onMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const animate = () => {
      // lerp — smooth follow with delay
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08
      frost.style.setProperty('--mx', `${currentX}px`)
      frost.style.setProperty('--my', `${currentY}px`)
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="hero" id="home">
      {/* Video Background */}
      <div className="hero__bg">
        <video autoPlay muted loop playsInline>
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero__frost" ref={frostRef} />
      </div>

      {/* Top bar — corner labels */}
      <div className="hero__top-bar">
        <div className="hero__top-left">
          <span className="hero__tag">( AI DESIGNER:)</span>
          <span className="hero__tag hero__tag--muted">BY ZOU YAN:(</span>
        </div>
        <div className="hero__top-right">
          <span className="hero__year-badge">↗ 2026</span>
        </div>
      </div>

      {/* Main content */}
      <div className="hero__body">
        <div className="hero__text-block">
          {/* Huge title — brutalist bold */}
          <h1 className="hero__name">
            <span className="hero__name-line">PORT</span>
            <span className="hero__name-line hero__name-line--extend">
              F<span className="hero__letter-o">O</span>LIO
            </span>
          </h1>

          {/* Chinese subtitle in white box with gold border */}
          <div className="hero__cn-box">
            <span>个人作品集</span>
          </div>

          <p className="hero__subtitle">
            邹琰 · AI 视觉 / 品牌 / 多领域创作<br />
            以 AI 为矛，探索国风仙侠、机甲科幻、民国年代的视觉可能<br />
            十一载职场经验为盾，深谙流程、效率与交付之道
          </p>

          <div className="hero__actions">
            <a href="#showcase" className="btn btn--outline">查看作品</a>
            <a href="#contact" className="btn btn--ghost">联系我</a>
          </div>
        </div>

        {/* Right — 3D Cubes & Decor */}
        <div className="hero__visual">
          <div className="cube-scene">
            <div className="cube">
              <div className="cube__face cube__face--front" />
              <div className="cube__face cube__face--back" />
              <div className="cube__face cube__face--right" />
              <div className="cube__face cube__face--left" />
              <div className="cube__face cube__face--top" />
              <div className="cube__face cube__face--bottom" />
            </div>
            <div className="cube cube--small">
              <div className="cube__face cube__face--front" />
              <div className="cube__face cube__face--back" />
              <div className="cube__face cube__face--right" />
              <div className="cube__face cube__face--left" />
              <div className="cube__face cube__face--top" />
              <div className="cube__face cube__face--bottom" />
            </div>
            <div className="cube cube--tiny">
              <div className="cube__face cube__face--front" />
              <div className="cube__face cube__face--back" />
              <div className="cube__face cube__face--right" />
              <div className="cube__face cube__face--left" />
              <div className="cube__face cube__face--top" />
              <div className="cube__face cube__face--bottom" />
            </div>
          </div>

          {/* Pixel-art decorative box */}
          <div className="hero__pixel-box">
            <svg viewBox="0 0 80 80" className="hero__pixel-art">
              <rect x="0" y="0" width="16" height="16" fill="currentColor" opacity="0.9" />
              <rect x="16" y="0" width="16" height="16" fill="currentColor" opacity="0.5" />
              <rect x="48" y="0" width="16" height="16" fill="currentColor" opacity="0.7" />
              <rect x="64" y="0" width="16" height="16" fill="currentColor" opacity="0.3" />
              <rect x="0" y="16" width="16" height="16" fill="currentColor" opacity="0.4" />
              <rect x="32" y="16" width="16" height="16" fill="currentColor" opacity="0.8" />
              <rect x="48" y="16" width="16" height="16" fill="currentColor" opacity="0.2" />
              <rect x="16" y="32" width="16" height="16" fill="currentColor" opacity="0.6" />
              <rect x="48" y="32" width="16" height="16" fill="currentColor" opacity="0.9" />
              <rect x="64" y="32" width="16" height="16" fill="currentColor" opacity="0.5" />
              <rect x="0" y="48" width="16" height="16" fill="currentColor" opacity="0.7" />
              <rect x="32" y="48" width="16" height="16" fill="currentColor" opacity="0.3" />
              <rect x="64" y="48" width="16" height="16" fill="currentColor" opacity="0.8" />
              <rect x="16" y="64" width="16" height="16" fill="currentColor" opacity="0.4" />
              <rect x="48" y="64" width="16" height="16" fill="currentColor" opacity="0.6" />
              <rect x="64" y="64" width="16" height="16" fill="currentColor" opacity="0.9" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom info */}
      <div className="hero__bottom-bar">
        <div className="hero__stamp">
          <span>集</span>
        </div>
        <div className="hero__meta">
          <span className="hero__meta-year">2026</span>
          <span className="hero__meta-text">Personal</span>
          <span className="hero__meta-text">Portfolio</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
