'use client'

import {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
  type FocusEvent,
} from 'react'
import {
  applyTripEvent,
  RESTING_STATE,
  TRIP_SCRIPT,
  type TripEvent,
  type TripState,
} from './trip-script'

type Action = { type: 'event'; patch: TripEvent['patch'] }

function reducer(state: TripState, action: Action): TripState {
  return applyTripEvent(state, action.patch)
}

type HoldReason = 'user' | 'pointer' | 'focus' | 'offscreen' | 'hidden'

/** Wait after the intro copy animates in before the story starts. */
const START_DELAY = 1800
/** How long the story stays still after a visitor stops interacting. */
const RESUME_DELAY = 2500

/**
 * Runs the hero's ferry trip as one timeline. The visitor always wins: the
 * story holds while they point at or focus inside the showcase, while it is
 * off screen or the tab is hidden, and for good when they press pause or
 * prefer reduced motion. Every component stays controlled by `state`, so
 * whatever the visitor changes is kept until the next loop.
 */
export function useTripTimeline() {
  const [state, dispatch] = useReducer(reducer, RESTING_STATE)
  const [holds, setHolds] = useState<Set<HoldReason>>(() => new Set(['user']))
  const [started, setStarted] = useState(false)

  const regionRef = useRef<HTMLElement | null>(null)
  const elapsed = useRef(0)
  const cursor = useRef(0)
  const resumeTimer = useRef<number | undefined>(undefined)

  const hold = useCallback((reason: HoldReason, on: boolean) => {
    setHolds((prev) => {
      if (prev.has(reason) === on) return prev
      const next = new Set(prev)
      if (on) next.add(reason)
      else next.delete(reason)
      return next
    })
  }, [])

  const releaseLater = useCallback(
    (reason: HoldReason) => {
      window.clearTimeout(resumeTimer.current)
      resumeTimer.current = window.setTimeout(
        () => hold(reason, false),
        RESUME_DELAY,
      )
    },
    [hold],
  )

  // Autoplay starts once, after the intro, unless reduced motion is preferred.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduce.matches) return
    const id = window.setTimeout(() => {
      setStarted(true)
      hold('user', false)
    }, START_DELAY)
    return () => window.clearTimeout(id)
  }, [hold])

  // Hold while off screen or while the tab is hidden.
  useEffect(() => {
    const el = regionRef.current
    const onVisibility = () => hold('hidden', document.hidden)
    document.addEventListener('visibilitychange', onVisibility)

    let observer: IntersectionObserver | undefined
    if (el && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => hold('offscreen', !entry.isIntersecting),
        { threshold: 0.15 },
      )
      observer.observe(el)
    }

    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      observer?.disconnect()
      window.clearTimeout(resumeTimer.current)
    }
  }, [hold])

  const playing = holds.size === 0

  // The scheduler: one timeout to the next event, resumable mid-loop.
  useEffect(() => {
    if (!playing) return

    let timer: number | undefined
    let anchor = performance.now() - elapsed.current

    const step = () => {
      const { events, length } = TRIP_SCRIPT
      const now = performance.now() - anchor

      while (
        cursor.current < events.length &&
        events[cursor.current].at <= now
      ) {
        dispatch({ type: 'event', patch: events[cursor.current].patch })
        cursor.current += 1
      }

      elapsed.current = now

      if (cursor.current >= events.length && now >= length) {
        cursor.current = 0
        elapsed.current = 0
        anchor = performance.now()
      }

      const next =
        cursor.current < events.length ? events[cursor.current].at : length
      timer = window.setTimeout(
        step,
        Math.max(16, next - (performance.now() - anchor)),
      )
    }

    step()

    return () => {
      window.clearTimeout(timer)
      elapsed.current = performance.now() - anchor
    }
  }, [playing, started])

  const patch = useCallback((next: Partial<TripState>) => {
    dispatch({ type: 'event', patch: next })
  }, [])

  const userPaused = holds.has('user')
  const meantToRun = started && !userPaused

  const togglePlaying = useCallback(() => {
    if (meantToRun) {
      hold('user', true)
      return
    }
    setStarted(true)
    hold('user', false)
    hold('pointer', false)
    hold('focus', false)
  }, [hold, meantToRun])

  const regionProps = {
    ref: (el: HTMLElement | null) => {
      regionRef.current = el
    },
    onPointerEnter: (e: { pointerType: string }) => {
      if (e.pointerType === 'mouse') {
        window.clearTimeout(resumeTimer.current)
        hold('pointer', true)
      }
    },
    onPointerLeave: () => releaseLater('pointer'),
    onTouchStart: () => {
      window.clearTimeout(resumeTimer.current)
      hold('pointer', true)
    },
    onTouchEnd: () => releaseLater('pointer'),
    onFocus: () => {
      window.clearTimeout(resumeTimer.current)
      hold('focus', true)
    },
    onBlur: (e: FocusEvent<HTMLElement>) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node | null))
        releaseLater('focus')
    },
  }

  return {
    state,
    patch,
    // The control shows "pause" whenever the story is meant to run, even if a
    // hover or focus is holding it for a moment.
    playing: meantToRun,
    togglePlaying,
    regionProps,
  }
}
