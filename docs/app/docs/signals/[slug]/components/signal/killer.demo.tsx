import { useSignal } from '@cerberus-design/signals'

export function AccessorDemo() {
  const [_local, _setLocal, getLocal] = useSignal('hello')

  // Even if this runs 10 minutes from now, it will ALWAYS have the
  // absolute latest state, with zero dependency arrays needed.
  setTimeout(() => {
    console.log(getLocal())
  }, 600000)

  return null
}
