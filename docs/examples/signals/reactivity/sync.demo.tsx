import { createEffect, createSignal } from '@cerberus-design/signals'

const [count, _setCount] = createSignal(0)
const [_double, setDouble] = createSignal(0)

createEffect(() => {
  setDouble(count() * 2)
})
