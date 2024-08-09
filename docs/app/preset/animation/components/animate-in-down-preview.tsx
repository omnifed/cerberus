'use client'

import { Button, Show } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'
import { hstack, vstack } from '@cerberus/styled-system/patterns'
import { useCallback, useState } from 'react'

export function AnimateInDownPreview() {
  const [animate, setAnimate] = useState<boolean>(false)

  const handleAnimateIn = useCallback(() => {
    setAnimate(true)
    setTimeout(() => {
      setAnimate(false)
    }, 1500)
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
            className={css({
              animationName: 'fadeInDown',
              animationDuration: '250ms',
              animationTimingFunction: 'ease-in',
              animationFillMode: 'forwards',
              opacity: '0',
              padding: '4',
            })}
          >
            <span>Default</span>
          </div>
        </Show>
      </div>
    </div>
  )
}
