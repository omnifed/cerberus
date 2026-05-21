import { createComputed, createSignal } from '@cerberus-design/signals'
import { bench, group, run } from 'mitata'
import { alien } from '../adapters/alien'
import { preact } from '../adapters/preact'
import { reactively } from '../adapters/reactively'
import { signia } from '../adapters/signia'

const DEPTH = 1000
const WIDTH = 10000

// ============================================================================
// TEST 1: DEEP DEPENDENCY CHAIN (1 -> 1 -> ... 1000 -> 1)
// ============================================================================
group(`Deep Dependency Chain (${DEPTH} nested)`, () => {
  // --- Cerberus ---
  const [cerbGet, cerbSet] = createSignal(0)
  let cerbHead = createComputed(() => cerbGet() + 1)
  for (let i = 1; i < DEPTH; i++) {
    const prev = cerbHead
    cerbHead = createComputed(() => prev() + 1)
  }
  cerbHead() // Warmup

  bench('Cerberus', () => {
    cerbSet(cerbGet() + 1)
    cerbHead()
  })

  // --- Alien-Signals ---
  const [alienGet, alienSet] = alien.createSignal(0)
  let alienHead = alien.createComputed(() => alienGet() + 1)
  for (let i = 1; i < DEPTH; i++) {
    const prev = alienHead
    alienHead = alien.createComputed(() => prev() + 1)
  }
  alienHead()

  bench('Alien-Signals', () => {
    alienSet(alienGet() + 1)
    alienHead()
  })

  // --- Reactively ---
  const [reactivelyGet, reactivelySet] = reactively.createSignal(0)
  let reactivelyHead = reactively.createComputed(() => reactivelyGet() + 1)
  for (let i = 1; i < DEPTH; i++) {
    const prev = reactivelyHead
    reactivelyHead = reactively.createComputed(() => prev.get() + 1)
  }
  reactivelyHead.get()

  bench('Reactively', () => {
    reactivelySet(reactivelyGet() + 1)
    reactivelyHead.get()
  })

  // --- Preact ---
  const [preactGet, preactSet] = preact.createSignal(0)
  let preactHead = preact.createComputed(() => preactGet() + 1)
  for (let i = 1; i < DEPTH; i++) {
    const prev = preactHead
    preactHead = preact.createComputed(() => prev.value + 1)
  }
  // oxlint-disable-next-line no-unused-expressions
  preactHead.value

  bench('Preact', () => {
    preactSet(preactGet() + 1)
    // oxlint-disable-next-line no-unused-expressions
    preactHead.value
  })

  // --- Signia ---
  const [signiaGet, signiaSet] = signia.createSignal(0)
  let signiaHead = signia.createComputed(() => signiaGet() + 1)
  for (let i = 1; i < DEPTH; i++) {
    const prev = signiaHead
    signiaHead = signia.createComputed(() => prev() + 1)
  }
  signiaHead()

  bench('Signia', () => {
    signiaSet(signiaGet() + 1)
    signiaHead()
  })
})

// ============================================================================
// TEST 2: WIDE FAN-OUT (1 Signal -> 10,000 Computeds)
// ============================================================================
group(`Wide Fan-Out (1 -> ${WIDTH})`, () => {
  // --- Cerberus ---
  const [cerbGet, cerbSet] = createSignal(0)
  const cerbNodes = new Array(WIDTH)
  for (let i = 0; i < WIDTH; i++) cerbNodes[i] = createComputed(() => cerbGet() + i)
  for (let i = 0; i < WIDTH; i++) cerbNodes[i]() // Warmup

  bench('Cerberus', () => {
    cerbSet(cerbGet() + 1)
    for (let i = 0; i < WIDTH; i++) cerbNodes[i]()
  })

  // --- Alien-Signals ---
  const [alienGet, alienSet] = alien.createSignal(0)
  const alienNodes = new Array(WIDTH)
  for (let i = 0; i < WIDTH; i++)
    alienNodes[i] = alien.createComputed(() => alienGet() + i)
  for (let i = 0; i < WIDTH; i++) alienNodes[i]()

  bench('Alien-Signals', () => {
    alienSet(alienGet() + 1)
    for (let i = 0; i < WIDTH; i++) alienNodes[i]()
  })

  // --- Reactively ---
  const [reactivelyGet, reactivelySet] = reactively.createSignal(0)
  const reactivelyNodes = new Array(WIDTH)
  for (let i = 0; i < WIDTH; i++)
    reactivelyNodes[i] = reactively.createComputed(() => reactivelyGet() + i)
  for (let i = 0; i < WIDTH; i++) reactivelyNodes[i].get()

  bench('Reactively', () => {
    reactivelySet(reactivelyGet() + 1)
    for (let i = 0; i < WIDTH; i++) reactivelyNodes[i].get()
  })

  // --- Preact ---
  const [preactGet, preactSet] = preact.createSignal(0)
  const preactNodes = new Array(WIDTH)
  for (let i = 0; i < WIDTH; i++)
    preactNodes[i] = preact.createComputed(() => preactGet() + i)
  // oxlint-disable-next-line no-unused-expressions
  for (let i = 0; i < WIDTH; i++) preactNodes[i].value

  bench('Preact', () => {
    preactSet(preactGet() + 1)
    // oxlint-disable-next-line no-unused-expressions
    for (let i = 0; i < WIDTH; i++) preactNodes[i].value
  })

  // --- Signia ---
  const [signiaGet, signiaSet] = signia.createSignal(0)
  const signiaNodes = new Array(WIDTH)
  for (let i = 0; i < WIDTH; i++)
    signiaNodes[i] = signia.createComputed(() => signiaGet() + i)
  for (let i = 0; i < WIDTH; i++) signiaNodes[i]()

  bench('Signia', () => {
    signiaSet(signiaGet() + 1)
    for (let i = 0; i < WIDTH; i++) signiaNodes[i]()
  })
})

// ============================================================================
// TEST 3: THE DIAMOND PROBLEM (1 -> 10,000 -> 1)
// ============================================================================
group(`The Diamond Problem (1 -> ${WIDTH} -> 1)`, () => {
  // --- Cerberus ---
  const [cerbGet, cerbSet] = createSignal(0)
  const cerbMid = new Array(WIDTH)
  for (let i = 0; i < WIDTH; i++) cerbMid[i] = createComputed(() => cerbGet() + i)
  const cerbSink = createComputed(() => {
    let sum = 0
    for (let i = 0; i < WIDTH; i++) sum += cerbMid[i]()
    return sum
  })
  cerbSink() // Warmup

  bench('Cerberus', () => {
    cerbSet(cerbGet() + 1)
    cerbSink()
  })

  // --- Alien-Signals ---
  const [alienGet, alienSet] = alien.createSignal(0)
  const alienMid = new Array(WIDTH)
  for (let i = 0; i < WIDTH; i++)
    alienMid[i] = alien.createComputed(() => alienGet() + i)
  const alienSink = alien.createComputed(() => {
    let sum = 0
    for (let i = 0; i < WIDTH; i++) sum += alienMid[i]()
    return sum
  })
  alienSink()

  bench('Alien-Signals', () => {
    alienSet(alienGet() + 1)
    alienSink()
  })

  // --- Reactively ---
  const [reactivelyGet, reactivelySet] = reactively.createSignal(0)
  const reactivelyMid = new Array(WIDTH)
  for (let i = 0; i < WIDTH; i++)
    reactivelyMid[i] = reactively.createComputed(() => reactivelyGet() + i)
  const reactivelySink = reactively.createComputed(() => {
    let sum = 0
    for (let i = 0; i < WIDTH; i++) sum += reactivelyMid[i].get()
    return sum
  })
  reactivelySink.get()

  bench('Reactively', () => {
    reactivelySet(reactivelyGet() + 1)
    reactivelySink.get()
  })

  // --- Preact ---
  const [preactGet, preactSet] = preact.createSignal(0)
  const preactMid = new Array(WIDTH)
  for (let i = 0; i < WIDTH; i++)
    preactMid[i] = preact.createComputed(() => preactGet() + i)
  const preactSink = preact.createComputed(() => {
    let sum = 0
    for (let i = 0; i < WIDTH; i++) sum += preactMid[i].value
    return sum
  })
  // oxlint-disable-next-line no-unused-expressions
  preactSink.value

  bench('Preact', () => {
    preactSet(preactGet() + 1)
    // oxlint-disable-next-line no-unused-expressions
    preactSink.value
  })

  // --- Signia ---
  const [signiaGet, signiaSet] = signia.createSignal(0)
  const signiaMid = new Array(WIDTH)
  for (let i = 0; i < WIDTH; i++)
    signiaMid[i] = signia.createComputed(() => signiaGet() + i)
  const signiaSink = signia.createComputed(() => {
    let sum = 0
    for (let i = 0; i < WIDTH; i++) sum += signiaMid[i]()
    return sum
  })
  signiaSink()

  bench('Signia', () => {
    signiaSet(signiaGet() + 1)
    signiaSink()
  })
})

await run()
