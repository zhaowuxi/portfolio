const stats = [
  { value: '11+', label: '年职场实战' },
  { value: '25+', label: 'AI 作品' },
  { value: '5', label: '大领域' },
  { value: '100%', label: '零差错记录' },
]

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__grid">
          {/* Left — Visual */}
          <div className="about__visual reveal">
            <div className="about__circle">
              <div className="about__circle-inner">
                <span>ZY</span>
              </div>
            </div>
            <div className="about__decor" />
            <div className="about__decor about__decor--bottom" />
          </div>

          {/* Right — Text */}
          <div className="about__text reveal reveal-delay-2">
            <div className="section-header">
              <span className="section-num">02</span>
              <h2 className="section-title">关于我</h2>
            </div>
            <p className="about__intro">
              我是<em>邹琰</em>，一名穿梭于传统与未来之间的创作者。<br /><br />
              以<em>AI 视觉设计</em>为矛，探索国风仙侠、机甲科幻、民国年代的无限可能；
              以<em>十一载职场经验</em>为盾，深谙流程、效率与交付的终极哲学。<br /><br />
              双重身份，一种信念——<em>让每一件作品都有灵魂</em>。
            </p>
            <div className="about__contact">
              <span>📍 成都</span>
              <span>✉ 592179937@QQ.com</span>
              <span>📞 15208316708</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="about__stats">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`stat-card reveal${i > 0 ? ` reveal-delay-${i + 2}` : ''}`}
            >
              <span className="stat-card__value">{stat.value}</span>
              <span className="stat-card__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
