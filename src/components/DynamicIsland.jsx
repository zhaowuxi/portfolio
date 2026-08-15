import { useEffect, useState } from 'react'

const sections = [
  { id: 'character', label: '角色设计' },
  { id: 'scene', label: '场景设计' },
  { id: 'video', label: '短片展示' },
  { id: 'music', label: '音乐' },
]

export default function DynamicIsland() {
  const [active, setActive] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past hero (~80vh)
      setVisible(window.scrollY > window.innerHeight * 0.6)

      // Detect which section is in view
      let found = null
      for (const s of sections) {
        const el = document.getElementById(`showcase-${s.id}`)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top < window.innerHeight * 0.5 && rect.bottom > 0) {
            found = s.id
          }
        }
      }
      setActive(found)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`dynamic-island${visible ? ' dynamic-island--visible' : ''}`}>
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#showcase-${s.id}`}
          className={`dynamic-island__tab${active === s.id ? ' dynamic-island__tab--active' : ''}`}
        >
          {s.label}
        </a>
      ))}
    </div>
  )
}
