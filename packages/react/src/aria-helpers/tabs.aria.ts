'use client'

import { useEffect, useState } from 'react'
import { useTabsContext } from '../context/tabs'

function getNextIndex(index: number, length: number) {
  return index === length - 1 ? 0 : index + 1
}

function getPrevIndex(index: number, length: number) {
  return index === 0 ? length - 1 : index - 1
}

export function useTabsKeyboardNavigation() {
  const { tabs } = useTabsContext()
  const [activeTab, setActiveTab] = useState(-1)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const index =
        activeTab === -1
          ? tabs.current.findIndex((tab) => tab.ariaSelected === 'true')
          : activeTab
      const nextIndex = getNextIndex(index, tabs.current.length)
      const prevIndex = getPrevIndex(index, tabs.current.length)

      // If the active tab is not found, do nothing
      if (index === -1) return

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault()
          setActiveTab(prevIndex)
          tabs.current[prevIndex].focus()
          break
        case 'ArrowRight':
          event.preventDefault()
          setActiveTab(nextIndex)
          tabs.current[nextIndex].focus()
          break
        case 'Home':
          event.preventDefault()
          setActiveTab(0)
          tabs.current[0].focus()
          break
        case 'End':
          event.preventDefault()
          setActiveTab(tabs.current.length - 1)
          tabs.current[tabs.current.length - 1].focus()
          break
        default:
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeTab, tabs.current])

  return {
    ref: (tab: HTMLButtonElement) => {
      if (tab && !tabs.current.includes(tab)) {
        tabs.current.push(tab)
      }
    },
  }
}
