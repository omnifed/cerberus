'use client'

import { gsap } from 'gsap'
import { useEffect } from 'react'
import { useExperience } from './experience'

/**
 * The page's shared scroll choreography: live plates rise into place as they
 * arrive. It never hides what is already on screen, and does nothing under
 * reduced motion.
 */
export function Choreography() {
  const { motion } = useExperience()

  useEffect(() => {
    if (!motion) return
    const ctx = gsap.context(() => {
      const below = (el: Element) =>
        el.getBoundingClientRect().top > window.innerHeight * 0.9

      gsap.utils
        .toArray<HTMLElement>('[data-plate]')
        .filter(below)
        .forEach((el) => {
          // Opacity only, never visibility: a plate's controls stay reachable
          // by keyboard, and focus arriving early finishes the reveal at once.
          const tween = gsap.from(el, {
            y: 72,
            opacity: 0,
            duration: 1.2,
            ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          })
          el.addEventListener('focusin', () => tween.progress(1), {
            once: true,
          })
        })
    })
    return () => ctx.revert()
  }, [motion])

  return null
}
