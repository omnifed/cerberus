'use client'

import { Button, Show } from '@cerberus-design/react'
import { animateIn, hstack, vstack } from 'styled-system/patterns'
import { useCallback, useState } from 'react'

export function AnimateInPreview() {
  const [animate, setAnimate] = useState<boolean>(false)

  const handleAnimateIn = useCallback(() => {
    setAnimate(true)
    setTimeout(() => {
      setAnimate(false)
    }, 4000)
  }, [])

  return (
    <div
      className={hstack({
        gap: '4',
      })}
    >
      <Button onClick={handleAnimateIn}>Animate In</Button>

      <div className={vstack()}>
        <Show when={animate}>
          <div
            className={animateIn({
              padding: '4',
            })}
          >
            <span>Default</span>
          </div>
          <div
            className={animateIn({
              delay: '600ms',
              padding: '4',
            })}
          >
            <span>Delayed</span>
          </div>
        </Show>
      </div>
    </div>
  )
}
