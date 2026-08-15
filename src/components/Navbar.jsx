export default function Navbar({ scrolled }) {
  const links = [
    { label: '角色', href: '#showcase-character' },
    { label: '场景', href: '#showcase-scene' },
    { label: '短片', href: '#showcase-video' },
    { label: '音乐', href: '#showcase-music' },
    { label: '经历', href: '#career' },
  ]

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__logo">ZY</a>
        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
