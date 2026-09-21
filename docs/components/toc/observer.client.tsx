'use client'

import { createEffect, onCleanup } from '@cerberus-design/signals'
import { store } from './store.client'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

export function TocObserver() {
  const params = useParams()

  // URL changes
  useEffect(() => {
    store.setActiveHash(window.location.hash)
  }, [params])

  // Page scroll sections in view
  createEffect(() => {
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)
        if (visibleEntry) {
          store.setActiveHash(`#${visibleEntry.target.id}`)
        }
      },
      { rootMargin: '0px 0px -80% 0px' },
    )

    // A tiny timeout ensures the DOM has painted the MDX content
    const timer = setTimeout(() => {
      const headings = document.querySelectorAll('h2, h3, h4, h5, h6')
      headings.forEach((heading) => {
        if (heading.id) observer.observe(heading)
      })
    }, 100)

    onCleanup(() => {
      clearTimeout(timer)
      observer.disconnect()
    })
  })

  return null
}
