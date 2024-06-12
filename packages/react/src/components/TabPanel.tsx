'use client'

import { css, cx } from '@cerberus/styled-system/css'
import { useMemo, type HTMLAttributes } from 'react'
import { useTabsContext } from '../context/tabs'
import { Show } from './Show'

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  tab: string
}

export function TabPanel(props: TabPanelProps) {
  const { tab, ...nativeProps } = props
  const { active } = useTabsContext()
  const isActive = useMemo(() => active === tab, [active, tab])

  return (
    <Show when={isActive}>
      <div
        {...nativeProps}
        {...(isActive && { tabIndex: 0 })}
        aria-labelledby={tab}
        className={cx(nativeProps.className, css())}
        role="tabpanel"
      />
    </Show>
  )
}
