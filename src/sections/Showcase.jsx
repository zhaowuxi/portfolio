import { useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

/* ====== 模块数据 ====== */

const sections = [
  {
    id: 'character',
    label: '角色设计',
    en: 'CHARACTER DESIGN',
    desc: '国风仙侠人物设定 · 全身转面图 · 材质色彩板',
    type: 'image',
    items: [
      { img: '/images/projects/shenyan.jpg' },
      { img: '/images/projects/lingzhi.jpg' },
      { img: '/images/projects/villain.jpg' },
      { img: '/images/projects/corpse-puppet.jpg' },
      { img: '/images/projects/hero-male.jpg' },
    ],
  },
  {
    id: 'scene',
    label: '场景设计',
    en: 'SCENE CONCEPT',
    desc: 'AI生成场景 · 宋代山水美学 · 东方幻想',
    type: 'image',
    items: [
      { img: '/images/projects/xuanyuan-sect.jpg' },
      { img: '/images/projects/herb-valley.jpg' },
      { img: '/images/projects/mountains.jpg' },
      { img: '/images/projects/cloud-path.jpg' },
      { img: '/images/projects/blue-mountains.jpg' },
      { img: '/images/projects/temple.jpg' },
    ],
  },
  {
    id: 'video',
    label: '短片展示',
    en: 'AI VIDEO',
    desc: '水墨仙侠 · 科幻军事 · AI生成影像',
    type: 'video',
    items: [
      {
        bvid: 'BV1odGg6ZEyg',
        aid: '117019085179327',
        cid: '40496663571',
        cover: '/images/cover-0815.png',
        title: '墨剑诀',
        desc: '水墨笔触融合 AI 生成的仙侠概念短片',
      },
      {
        bvid: 'BV1BM3o6WEzR',
        aid: '117026265827942',
        cid: '40535196433',
        cover: '/images/cover-mecha.png',
        title: '破晓防线',
        desc: '科幻军事题材 AI 短片',
      },
      {
        video: '/videos/color-compare.mp4',
        cover: '/images/color-compare-cover.png',
        title: '调色',
        desc: '短片调色',
      },
      {
        bvid: 'BV1MquU6yEem',
        aid: '117066531081019',
        cid: '40757628391',
        cover: '/images/cover-0807.png',
        title: '新作',
        desc: 'AI短片',
      },
    ],
  },
  {
    id: 'music',
    label: '音乐',
    en: 'AI MUSIC',
    desc: 'AI作曲 · 算法与旋律的碰撞',
    type: 'music',
    items: [
      { audio: '/audio/mohen.mp3', title: '墨痕' },
      { audio: '/audio/shanshui.mp3', title: '山水之间' },
      { audio: '/audio/yunyanlu.mp3', title: '山水云烟录' },
    ],
  },
]

/* ====== 水波纹特效 ====== */

function useRipple() {
  const onPointerDown = (e) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const ripple = document.createElement('span')
    ripple.className = 'ripple'
    const size = Math.max(rect.width, rect.height) * 2
    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`
    el.appendChild(ripple)
    setTimeout(() => ripple.remove(), 600)
  }
  return onPointerDown
}

/* ====== 轮播区组件 ====== */

function ShowcaseSection({ section, index }) {
  const onRipple = useRipple()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="showcase-section reveal" id={`showcase-${section.id}`}>
      <div className="showcase-section__header">
        <div className="showcase-section__header-left">
          <button
            className="showcase-section__num"
            onPointerDown={onRipple}
            aria-label={`第 ${index + 1} 个模块`}
          >
            {String(index + 1).padStart(2, '0')}
          </button>
          <div>
            <h3 className="showcase-section__en">{section.en}</h3>
            <h4 className="showcase-section__label">{section.label}</h4>
            <p className="showcase-section__desc">{section.desc}</p>
          </div>
        </div>
      </div>

      <Swiper
        modules={[EffectCoverflow, Mousewheel]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        mousewheel={{ forceToAxis: true }}
        coverflowEffect={{
          rotate: 45,
          stretch: 0,
          depth: 180,
          modifier: 1,
          slideShadows: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="showcase-swiper"
      >
        {section.items.map((item, i) => (
          <SwiperSlide key={i} className="showcase-slide">
            <ShowcaseCard item={item} type={section.type} isActive={i === activeIndex} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

/* ====== 卡片渲染 ====== */

function ShowcaseCard({ item, type, isActive }) {
  const [playing, setPlaying] = useState(false)

  // Reset play state when this card leaves the center
  useEffect(() => {
    if (!isActive) setPlaying(false)
  }, [isActive])

  if (type === 'image') {
    return (
      <div className="showcase-card">
        <img src={item.img} alt="" loading="lazy" />
      </div>
    )
  }

  if (type === 'video') {
    const cover = item.cover || item.video

    // Bilibili embed
    if (item.bvid) {
      return (
        <div className="showcase-card showcase-card--video">
          <div className="showcase-card__video">
            {isActive && playing ? (
              <iframe
                src={`//player.bilibili.com/player.html?isOutside=true&aid=${item.aid}&bvid=${item.bvid}&cid=${item.cid}&p=1&autoplay=1`}
                scrolling="no"
                frameBorder="no"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            ) : (
              <button
                className="video-cover-btn"
                onClick={() => isActive && setPlaying(true)}
              >
                <img src={cover} alt="" loading="lazy" />
                <span className="video-cover-btn__play">▶</span>
              </button>
            )}
          </div>
        </div>
      )
    }

    // Local video
    return (
      <div className="showcase-card showcase-card--video">
        <div className="showcase-card__video">
          {isActive && playing ? (
            <video controls preload="metadata" playsInline autoPlay muted loop>
              <source src={item.video} type="video/mp4" />
            </video>
          ) : (
            <button
              className="video-cover-btn"
              onClick={() => isActive && setPlaying(true)}
            >
              <img src={cover} alt="" loading="lazy" />
              <span className="video-cover-btn__play">▶</span>
            </button>
          )}
        </div>
      </div>
    )
  }

  if (type === 'music') {
    return (
      <div className="showcase-card showcase-card--music">
        <div className="music-card__disc">
          <span className="music-card__play">▶</span>
        </div>
        <audio className="music-card__audio" controls preload="none">
          <source src={item.audio} type="audio/mpeg" />
        </audio>
      </div>
    )
  }

  return null
}

/* ====== 主导出 ====== */

export default function Showcase() {
  const [activeTab, setActiveTab] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id.replace('showcase-', ''))
          }
        })
      },
      { threshold: 0.3, rootMargin: '-20% 0px -20% 0px' }
    )
    const els = document.querySelectorAll('.showcase-section')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="showcase">
      <div className="container">
        <div className="section-header section-header--center reveal">
          <span className="section-num">01</span>
          <h2 className="section-title">精选作品</h2>
          <div className="gold-line" />
          <p className="section-desc">
            跨越国风仙侠、科幻机甲、AI短片与音乐的多元创作
          </p>
        </div>

        {/* 各模块 */}
        {sections.map((s, i) => (
          <ShowcaseSection key={s.id} section={s} index={i} />
        ))}
      </div>
    </section>
  )
}
