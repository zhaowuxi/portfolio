import { useEffect } from 'react'

/**
 * Robust scroll-reveal: observes .reveal elements, adds .is-visible on enter.
 * Handles edge cases: fast scroll, initial viewport, StrictMode double-mount.
 */
function useScrollReveal() {
  useEffect(() => {
    let observer = null
    let timeoutId = null

    function setup() {
      // Clean up any previous observer
      if (observer) observer.disconnect()

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              // Once visible, no need to observe again
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.05,
          rootMargin: '0px 0px -10px 0px',
        }
      )

      // Observe all reveal elements
      document.querySelectorAll('.reveal').forEach((el) => {
        // Check if already visible (e.g., Hero at page top)
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Element is already in viewport — reveal immediately
          el.classList.add('is-visible')
        } else {
          observer.observe(el)
        }
      })
    }

    // Delay slightly to ensure React has rendered the DOM
    timeoutId = setTimeout(setup, 50)

    // Also run on load (catches late-rendered elements)
    const onLoad = () => setup()
    window.addEventListener('load', onLoad)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('load', onLoad)
      if (observer) observer.disconnect()
    }
  }, [])
}

export { useScrollReveal }
