'use client'

import { HStack } from '@/styled-system/jsx'
import { Button } from '@cerberus-design/react'
import {
  batch,
  createComputed,
  createEffect,
  createSignal,
  ReactiveText,
  type Accessor,
} from '@cerberus-design/signals'

type ClockStore = {
  time: Accessor<string>
  hours: Accessor<number>
  minutes: Accessor<number>
  seconds: Accessor<number>
  shortTime: Accessor<string>
  startClock: () => void
}

export function globalStoreDemo(): ClockStore {
  const [hours, setHours] = createSignal<number>(0)
  const [minutes, setMinutes] = createSignal<number>(0)
  const [seconds, setSeconds] = createSignal<number>(0)
  const [turnOn, setTurnOn] = createSignal<boolean>(false)

  const time = createComputed<string>(() => `${hours()}:${minutes()}:${seconds()}`)
  const shortTime = createComputed<string>(() => `${hours()}:${minutes()}`)

  function getTime() {
    const now = new Date()
    setHours(now.getHours())
    setMinutes(now.getMinutes())
    setSeconds(now.getSeconds())
  }

  createEffect(() => {
    if (turnOn()) {
      const interval = setInterval(() => getTime(), 1000)
      return () => clearInterval(interval)
    }
  })

  return {
    time,
    shortTime,
    hours,
    minutes,
    seconds,
    // actions
    startClock: () => {
      batch(() => {
        setTurnOn(true)
        getTime()
      })
    },
  }
}

export function GlobalDemo() {
  const store = globalStoreDemo()
  return (
    <HStack gap="md" w="3/4">
      <Button onClick={store.startClock}>Start</Button>
      <ReactiveText data={store.time} />
    </HStack>
  )
}
