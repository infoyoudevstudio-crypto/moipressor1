import { useEffect, useRef } from 'react'

export const useInertiaScroll = (ease = 0.1) => {
  const currentScroll = useRef(0)
  const targetScroll = useRef(0)
  const rafId = useRef<number | null>(null)
  const velocity = useRef(0)
  const lastDelta = useRef(0)
  const isAnimating = useRef(false)

  useEffect(() => {

    // ✅ IMPORTANT :
    // Désactivation complète du scroll inertiel sur mobile / tactile
    // (le scroll custom bloque le touch scroll)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    let timeout: number

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      
      // Accumuler la vélocité
      velocity.current += e.deltaY * 0.1
      lastDelta.current = e.deltaY
      
      // Réinitialiser le timeout
      clearTimeout(timeout)
      
      // Après un court délai sans scroll, appliquer l'inertie
      timeout = window.setTimeout(() => {
        isAnimating.current = true
      }, 50)
    }

    const animate = () => {
      // Appliquer l'inertie
      if (isAnimating.current) {
        velocity.current *= 0.95 // Friction
        
        if (Math.abs(velocity.current) < 0.5) {
          velocity.current = 0
          isAnimating.current = false
        }
      }
      
      // Mettre à jour la cible
      targetScroll.current += velocity.current
      targetScroll.current = Math.max(
        0,
        Math.min(
          targetScroll.current,
          document.body.scrollHeight - window.innerHeight
        )
      )
      
      // Interpolation fluide
      currentScroll.current +=
        (targetScroll.current - currentScroll.current) * ease
      
      window.scrollTo(0, currentScroll.current)
      
      rafId.current = requestAnimationFrame(animate)
    }

    // Initialiser la position
    currentScroll.current = window.scrollY
    targetScroll.current = window.scrollY

    window.addEventListener('wheel', handleWheel, { passive: false })
    animate()

    return () => {
      window.removeEventListener('wheel', handleWheel)
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
      clearTimeout(timeout)
    }
  }, [ease])
}
