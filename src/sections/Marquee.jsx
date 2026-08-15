const items = ['设计', 'DESIGN', '视觉', 'VISUAL', '品牌', 'BRAND', '创作', 'CREATE']

export default function Marquee() {
  // Duplicate for seamless loop
  const doubled = [...items, ...items]

  return (
    <section className="marquee">
      <div className="marquee__track">
        <div className="marquee__group">
          {doubled.map((text, i) =>
            i % 2 === 0 ? (
              <div className="marquee__item" key={`m-${i}`}>
                <span className="marquee__label">{text}</span>
                <span className="marquee__separator">·</span>
              </div>
            ) : (
              <div className="marquee__item" key={`m-${i}`}>
                <span className="marquee__text">{text}</span>
                <span className="marquee__separator">·</span>
              </div>
            )
          )}
        </div>
        {/* Clone for seamless infinite scroll */}
        <div className="marquee__group">
          {doubled.map((text, i) =>
            i % 2 === 0 ? (
              <div className="marquee__item" key={`mc-${i}`}>
                <span className="marquee__label">{text}</span>
                <span className="marquee__separator">·</span>
              </div>
            ) : (
              <div className="marquee__item" key={`mc-${i}`}>
                <span className="marquee__text">{text}</span>
                <span className="marquee__separator">·</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
