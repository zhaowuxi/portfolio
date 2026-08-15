export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__glow footer__glow--1" />
      <div className="footer__glow footer__glow--2" />

      <div className="footer__inner">
        <div className="footer__content">
          {/* Gold decorative arc */}
          <div className="footer__arc" />

          <h2 className="footer__title reveal">开始合作</h2>
          <p className="footer__text reveal reveal-delay-1">
            无论是一个项目、一次合作，或只是一个想法——<br />
            我都在这里，期待与你的相遇
          </p>

          <div className="footer__contact reveal reveal-delay-2">
            <a href="tel:15208316708" className="footer__contact-link">
              15208316708
            </a>
            <a href="mailto:592179937@qq.com" className="footer__contact-link">
              592179937@QQ.com
            </a>
          </div>

          <a href="#" className="btn btn--primary reveal reveal-delay-3">
            回到顶部
          </a>
        </div>

        <div className="footer__bottom">
          <span>© 2026 邹琰</span>
          <span>让每一件作品都有灵魂</span>
        </div>
      </div>
    </footer>
  )
}
