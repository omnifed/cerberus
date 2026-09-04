import { createEffect, onCleanup } from '@cerberus-design/signals'

createEffect(() => {
  const timer = setInterval(() => console.log('Tick'), 1000)
  onCleanup(() => clearInterval(timer))
})
