'use client'

import { useEffect, useRef } from 'react'
import { css } from 'styled-system/css'

/**
 * The footer's horizon: the three-color seam the page ends on, with the light
 * it casts into the footer. A bright point on the seam follows the pointer
 * across the footer. Decorative; under reduced motion it rests at the center.
 */
export function FooterHorizon() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    const footer = el?.closest('footer')
    if (!el || !footer) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    let x = 0.5
    const apply = () => {
      raf = 0
      el.style.setProperty('--x', x.toFixed(3))
    }
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      const r = footer.getBoundingClientRect()
      x = Math.min(1, Math.max(0, (e.clientX - r.left) / Math.max(1, r.width)))
      if (!raf) raf = requestAnimationFrame(apply)
    }
    const onLeave = () => {
      x = 0.5
      if (!raf) raf = requestAnimationFrame(apply)
    }
    footer.addEventListener('pointermove', onMove, { passive: true })
    footer.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      footer.removeEventListener('pointermove', onMove)
      footer.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className={css({
        '--x': '0.5',
        h: '0',
        insetInline: '0',
        pointerEvents: 'none',
        pos: 'absolute',
        top: '0',
      })}
    >
      {/* The seam: designer, developer and agent, converged. */}
      <span
        className={css({
          bgGradient: 'to-r',
          display: 'block',
          gradientFrom: 'dataViz.qualitative.100',
          gradientTo: 'dataViz.qualitative.500',
          gradientVia: 'dataViz.qualitative.300',
          h: '1px',
          insetInline: '0',
          pos: 'absolute',
          top: '0',
        })}
      />
      {/* The light it casts, softest at the edges. */}
      <span
        className={css({
          backgroundImage: `radial-gradient(50% 100% at 18% 0%, color-mix(in srgb, token(colors.dataViz.qualitative.100) 16%, transparent), transparent),
            radial-gradient(50% 100% at 50% 0%, color-mix(in srgb, token(colors.dataViz.qualitative.300) 14%, transparent), transparent),
            radial-gradient(50% 100% at 82% 0%, color-mix(in srgb, token(colors.dataViz.qualitative.500) 16%, transparent), transparent)`,
          h: '18rem',
          insetInline: '0',
          pos: 'absolute',
          top: '0',
        })}
      />
      {/* A hot point riding the seam, and its glow. */}
      <span
        className={css({
          insetInline: '0',
          pos: 'absolute',
          top: '0',
          transform: 'translateX(calc((var(--x) - 0.5) * 100%))',
          transitionDuration: '0.9s',
          transitionProperty: 'transform',
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        })}
      >
        <span
          className={css({
            backgroundImage:
              'radial-gradient(closest-side, token(colors.page.text.initial), transparent)',
            h: '3px',
            left: '50%',
            opacity: 0.85,
            pos: 'absolute',
            top: '-1px',
            transform: 'translateX(-50%)',
            w: 'min(36rem, 60%)',
          })}
        />
        <span
          className={css({
            backgroundImage:
              'radial-gradient(closest-side, color-mix(in srgb, token(colors.page.text.initial) 9%, transparent), transparent)',
            h: '14rem',
            left: '50%',
            pos: 'absolute',
            top: '-7rem',
            transform: 'translateX(-50%)',
            w: 'min(48rem, 80%)',
          })}
        />
      </span>
    </div>
  )
}
