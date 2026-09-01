import { createSignal } from '@cerberus-design/signals'

const [_count, _setCount] = createSignal<number>(0)
//     ^ getter  ^ setter
