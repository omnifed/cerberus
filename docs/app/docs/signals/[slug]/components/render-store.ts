import { batch, createSignal } from '@cerberus-design/signals'

export function createRenderStore() {
  let interval: NodeJS.Timeout | undefined

  const [count, setCount] = createSignal<number>(0)
  const [renderCount, setRenderCount] = createSignal<number>(0)

  const stopCounter = () => {
    if (interval) clearInterval(interval)
    interval = undefined
  }

  return {
    count,
    renderCount,

    setCount,
    startCounter: () => {
      if (interval) clearInterval(interval)
      interval = setInterval(() => {
        setCount(count() + 1)
      }, 1000)
    },

    trackRenders: () => {
      setRenderCount(renderCount() + 1)
    },

    onUnmount: () => {
      batch(() => {
        stopCounter()
        setCount(0)
        setRenderCount(0)
      })
    },
  }
}
