'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PropsWithChildren,
} from 'react'
import { css } from 'styled-system/css'
import { useMotionAllowed } from './use-motion'
import type { Rgb, World, WorldState } from './world/styx'
import { mixPose, POSES, smoothstep, type PoseName } from './world/poses'

// Registered once, before any section asks for a scroll trigger.
gsap.registerPlugin(ScrollTrigger)

export type ThemeId = 'cerberus' | 'acheron' | 'elysium' | 'oceanus'
const THEMES: ThemeId[] = ['cerberus', 'acheron', 'elysium', 'oceanus']
const STREAMS = ['100', '300', '500'] as const

interface ExperienceApi {
  /** False on the server, under reduced motion, and before hydration. */
  motion: boolean
  /** Lets the tokens section recolor the world with any theme. */
  setThemeOverride: (theme: ThemeId | null) => void
}

const ExperienceContext = createContext<ExperienceApi>({
  motion: false,
  setThemeOverride: () => {},
})

export const useExperience = () => useContext(ExperienceContext)

interface Anchor {
  pose: PoseName
  center: number
}

function readRgb(el: Element | null): Rgb {
  if (!el) return [0.5, 0.5, 0.5]
  const value = getComputedStyle(el).color
  const rgb = value.match(/rgba?\(([^)]+)\)/)
  if (rgb) {
    const [r, g, b] = rgb[1]
      .split(/[\s,/]+/)
      .filter(Boolean)
      .map(Number)
    return [r / 255, g / 255, b / 255]
  }
  const srgb = value.match(/color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)/)
  return srgb
    ? [Number(srgb[1]), Number(srgb[2]), Number(srgb[3])]
    : [0.5, 0.5, 0.5]
}

const luminance = ([r, g, b]: Rgb) => 0.2126 * r + 0.7152 * g + 0.0722 * b

/** The theme-colored probes the world reads its three minds' colors from. */
const streamProbe = {
  '100': css({ color: 'dataViz.qualitative.100' }),
  '300': css({ color: 'dataViz.qualitative.300' }),
  '500': css({ color: 'dataViz.qualitative.500' }),
}

/**
 * The home page's stage. It owns the one smooth-scroll engine (Lenis, tied to
 * GSAP's ticker and ScrollTrigger), the world behind the page (the Styx at
 * night: smoke, a molten seam and rising embers), and the director that turns
 * scroll position into the world's pose. Under reduced motion there is no
 * smooth scroll and no canvas: a still frame of the world stands in, and
 * every section renders as final.
 */
export function HomeExperience(props: PropsWithChildren) {
  const motion = useMotionAllowed()
  const [ready, setReady] = useState(false)
  const stageRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const overrideRef = useRef<ThemeId | null>(null)

  const setThemeOverride = useCallback((theme: ThemeId | null) => {
    overrideRef.current = theme
  }, [])

  useEffect(() => {
    if (!motion) return

    // --- Smooth scroll: Lenis drives the window; ScrollTrigger listens. ---
    const navHeight =
      Number.parseFloat(getComputedStyle(document.documentElement).fontSize) *
      4.75
    const lenis = new Lenis({
      autoRaf: false,
      anchors: { offset: -navHeight },
      // Let menus, dialogs, popovers and the data grid scroll themselves.
      prevent: (node) =>
        node instanceof Element &&
        node.closest(
          '[role="dialog"], [role="menu"], [role="listbox"], [data-lenis-prevent]',
        ) !== null,
    })
    lenis.on('scroll', ScrollTrigger.update)
    const raf = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    // --- Colors: the three minds come from the theme's own data-viz tokens. ---
    const stage = stageRef.current
    let palettes: Record<string, [Rgb, Rgb, Rgb]> = {}
    let background: Rgb = [0, 0, 0]
    const readColors = () => {
      if (!stage) return
      const read = (scope: string) =>
        STREAMS.map((s) =>
          readRgb(stage.querySelector(`[data-probe="${scope}-${s}"]`)),
        ) as [Rgb, Rgb, Rgb]
      palettes = Object.fromEntries(
        [...THEMES, 'current'].map((id) => [id, read(id)]),
      )
      background = readRgb(stage.querySelector('[data-probe="page"]'))
    }
    readColors()
    const themeWatcher = new MutationObserver(readColors)
    themeWatcher.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-panda-theme'],
    })
    const scheme = window.matchMedia('(prefers-color-scheme: dark)')
    scheme.addEventListener('change', readColors)

    // --- Anchors: each [data-pose] element is a moment of the story. ---
    let anchors: Anchor[] = []
    let covers: { top: number; bottom: number }[] = []
    const measure = () => {
      const y = window.scrollY
      anchors = [...document.querySelectorAll<HTMLElement>('[data-pose]')]
        .map((el) => {
          const r = el.getBoundingClientRect()
          return {
            pose: el.dataset.pose as PoseName,
            center: r.top + y + r.height / 2,
          }
        })
        .sort((a, b) => a.center - b.center)
      covers = [
        ...document.querySelectorAll<HTMLElement>('[data-world-cover]'),
      ].map((el) => {
        const r = el.getBoundingClientRect()
        return { top: r.top + y, bottom: r.bottom + y }
      })
    }
    ScrollTrigger.addEventListener('refresh', measure)
    measure()
    document.fonts?.ready.then(() => ScrollTrigger.refresh())

    // --- The world: Three.js, loaded after first paint. ---
    let world: World | null = null
    let disposed = false
    let cancelIdle = () => {}
    const canvas = canvasRef.current
    const supportsWebGL = (() => {
      try {
        const probe = document.createElement('canvas')
        return !!probe.getContext('webgl2') || !!probe.getContext('webgl')
      } catch {
        return false
      }
    })()
    if (canvas && supportsWebGL) {
      const load = async () => {
        const { createWorld } = await import('./world/styx')
        // StrictMode and fast route changes can unmount before this lands.
        if (disposed) return
        world = createWorld({
          canvas,
          onReady: () => !disposed && setReady(true),
          onLost: () => setReady(false),
        })
      }
      const run = () => {
        if (!disposed) load().catch(() => setReady(false))
      }
      if (typeof window.requestIdleCallback === 'function') {
        const handle = window.requestIdleCallback(run, { timeout: 800 })
        cancelIdle = () => window.cancelIdleCallback(handle)
      } else {
        const handle = globalThis.setTimeout(run, 300)
        cancelIdle = () => globalThis.clearTimeout(handle)
      }
    }

    // --- Pointer: the cursor warms the seam; a tap sends a heat wave along it. ---
    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') world?.setPointer(e.clientX, e.clientY)
    }
    const onPointerDown = (e: PointerEvent) => {
      world?.pulse(e.clientX, e.clientY)
    }
    const onPointerOut = (e: PointerEvent) => {
      if (!e.relatedTarget) world?.setPointer(null, 0)
    }
    const onBlur = () => world?.setPointer(null, 0)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerdown', onPointerDown, { passive: true })
    document.addEventListener('pointerout', onPointerOut)
    window.addEventListener('blur', onBlur)

    // --- The intro: the seam arrives broken and cold, then seals and heats. ---
    const intro = { t: 0 }
    const introTween = gsap.to(intro, {
      t: 1,
      duration: 2.6,
      ease: 'power3.out',
      delay: 0.15,
    })

    // --- The director: every tick, scroll position becomes a pose. ---
    const tick = () => {
      const vh = window.innerHeight
      const focusLine = window.scrollY + vh / 2
      let pose: WorldState = POSES.hero
      let palette = palettes.current
      if (anchors.length) {
        let i = anchors.findIndex((a) => a.center > focusLine)
        if (i === -1) i = anchors.length
        const a = anchors[Math.max(0, i - 1)]
        const b = anchors[Math.min(anchors.length - 1, i)]
        const span = b.center - a.center
        const t = span > 0 ? smoothstep((focusLine - a.center) / span) : 0
        pose = mixPose(POSES[a.pose], POSES[b.pose], t)
        const near = t < 0.5 ? a : b
        if (near.pose === 'tokens' && overrideRef.current) {
          palette = palettes[overrideRef.current] ?? palette
        }
      }
      // Arrive broken and cold, then seal.
      pose = mixPose(
        { ...pose, unity: 0, heat: pose.heat * 0.25 },
        pose,
        intro.t,
      )

      const covered = covers.some(
        (c) => c.top <= window.scrollY && c.bottom >= window.scrollY + vh,
      )
      world?.setActive(!covered)
      if (palette) {
        world?.setFrame({
          state: pose,
          colors: palette,
          background,
          dark: luminance(background) < 0.4,
        })
      }
    }
    gsap.ticker.add(tick)

    return () => {
      disposed = true
      cancelIdle()
      introTween.kill()
      gsap.ticker.remove(tick)
      gsap.ticker.remove(raf)
      gsap.ticker.lagSmoothing(500, 33)
      ScrollTrigger.removeEventListener('refresh', measure)
      lenis.destroy()
      themeWatcher.disconnect()
      scheme.removeEventListener('change', readColors)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('pointerout', onPointerOut)
      window.removeEventListener('blur', onBlur)
      world?.dispose()
      world = null
    }
  }, [motion])

  const api = useMemo(
    () => ({ motion, setThemeOverride }),
    [motion, setThemeOverride],
  )

  return (
    <ExperienceContext.Provider value={api}>
      <div
        ref={stageRef}
        aria-hidden
        className={css({
          bgColor: 'page.bg.initial',
          inset: '0',
          overflow: 'hidden',
          pointerEvents: 'none',
          pos: 'fixed',
          zIndex: '-1',
        })}
      >
        {/* A still frame of the world, for first paint, reduced motion and no WebGL. */}
        <div
          className={css({
            backgroundImage: 'url(/home/world/still-dark.webp)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            inset: '0',
            pos: 'absolute',
            _light: { backgroundImage: 'url(/home/world/still-light.webp)' },
            _system: {
              _osLight: {
                backgroundImage: 'url(/home/world/still-light.webp)',
              },
            },
          })}
        />
        <canvas
          ref={canvasRef}
          data-ready={ready}
          className={css({
            h: 'full',
            inset: '0',
            opacity: 0,
            pos: 'absolute',
            transitionDuration: '1.4s',
            transitionProperty: 'opacity',
            transitionTimingFunction: 'ease-out',
            w: 'full',
            '&[data-ready=true]': { opacity: 1 },
          })}
        />
        <span data-probe="page" className={css({ color: 'page.bg.initial' })} />
        {STREAMS.map((s) => (
          <span
            key={`current-${s}`}
            data-probe={`current-${s}`}
            className={streamProbe[s]}
          />
        ))}
        {THEMES.flatMap((theme) =>
          STREAMS.map((s) => (
            <span
              key={`${theme}-${s}`}
              data-panda-theme={theme}
              data-probe={`${theme}-${s}`}
              className={streamProbe[s]}
            />
          )),
        )}
      </div>
      {/* Copy pools feather past the edges; clip, so nothing scrolls sideways. */}
      <div className={css({ overflowX: 'clip' })}>{props.children}</div>
    </ExperienceContext.Provider>
  )
}
