import { createSignal } from '@cerberus-design/signals'

const [myObj, setMyObj] = createSignal({})
const [myArr, setMyArr] = createSignal<number[]>([])

// Object immutable updates
setMyObj((prev) => ({ ...prev, one: 1 }))
setMyObj({ ...myObj(), two: 2 })

// Array immutable updates
setMyArr((prev) => [...prev, 1])
setMyArr(myArr().with(1, 2))
setMyArr(myArr().map((val) => val + 1))
// ...there are a ton of immutalbe Array methods
