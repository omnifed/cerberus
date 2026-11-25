import { parseDate, type DateValue } from '@cerberus-design/react'

/**
 * The cards of the hero showcase. The one in `live` is the card the story is
 * currently acting out; it is the only card that moves.
 */
export type TripCard =
  | 'quote'
  | 'tags'
  | 'assign'
  | 'booked'
  | 'progress'
  | 'upload'
  | 'review'
  | 'vote'

export type TripPhase = 'idle' | 'pending' | 'done'

export interface TripState {
  live: TripCard | null
  dates: DateValue[]
  seats: string
  quote: TripPhase
  ready: boolean
  booked: boolean
  progress: number
  statusStep: number
  aboutOpen: boolean
  upload: number | null
  rating: number
  feedback: string
  followUp: boolean
  review: TripPhase
  vote: string | null
  writeIn: string
  ballot: TripPhase
  votes: [number, number, number]
}

/**
 * What the server renders and what reduced-motion visitors see: the Figma
 * comp's moment, mid-trip, fully interactive.
 */
export const RESTING_STATE: TripState = {
  live: null,
  dates: [],
  seats: '0',
  quote: 'idle',
  ready: false,
  booked: true,
  progress: 25,
  statusStep: 1,
  aboutOpen: false,
  upload: null,
  rating: 0,
  feedback: '',
  followUp: false,
  review: 'idle',
  vote: null,
  writeIn: '',
  ballot: 'idle',
  votes: [41, 33, 26],
}

/** The first frame of every loop: nothing booked yet. */
const START_STATE: TripState = {
  ...RESTING_STATE,
  booked: false,
  progress: 0,
  statusStep: 0,
}

export interface TripEvent {
  /** Milliseconds from the start of the loop. */
  at: number
  patch: Partial<TripState> | 'reset'
}

const FEEDBACK = 'Smooth crossing. Worth every obol.'

function buildScript(): { events: TripEvent[]; length: number } {
  const events: TripEvent[] = []
  const add = (at: number, patch: TripEvent['patch']) =>
    events.push({ at, patch })

  // Quote: dates, seats, request.
  add(0, 'reset')
  add(500, { live: 'quote' })
  add(1100, { dates: [parseDate('2026-12-21')] })
  add(1700, { dates: [parseDate('2026-12-21'), parseDate('2026-12-24')] })
  add(2300, { seats: '1' })
  add(2700, { seats: '2' })
  add(3300, { quote: 'pending' })
  add(4300, { quote: 'done', live: 'tags' })

  // Assigned and marked ready.
  add(5300, { live: 'assign' })
  add(5900, { ready: true })

  // Booked.
  add(6900, { live: 'booked', booked: true })

  // The crossing itself.
  add(8100, { live: 'progress', progress: 25, statusStep: 1 })
  add(8900, { progress: 40, statusStep: 2 })
  add(9700, { progress: 55, statusStep: 3, aboutOpen: true })
  add(12100, { aboutOpen: false, progress: 70, statusStep: 4 })
  add(12900, { progress: 85, statusStep: 5 })
  add(13700, { progress: 100, statusStep: 6 })

  // Photos from the far shore.
  add(14700, { live: 'upload', upload: 0 })
  add(15200, { upload: 30 })
  add(15700, { upload: 65 })
  add(16200, { upload: 100 })

  // Review: stars, typed feedback, follow-up, submit.
  let t = 17300
  add(t, { live: 'review' })
  for (let star = 1; star <= 5; star++) add((t += 220), { rating: star })
  t += 400
  for (let i = 1; i <= FEEDBACK.length; i++)
    add((t += 45), { feedback: FEEDBACK.slice(0, i) })
  add((t += 500), { followUp: true })
  add((t += 600), { review: 'pending' })
  add((t += 1000), { review: 'done' })

  // Name the ferry.
  add((t += 1000), { live: 'vote', vote: 'styx' })
  add((t += 800), { ballot: 'pending' })
  add((t += 1000), { ballot: 'done', votes: [38, 39, 23] })

  return { events, length: t + 3000 }
}

export const TRIP_SCRIPT = buildScript()

export function applyTripEvent(
  state: TripState,
  patch: TripEvent['patch'],
): TripState {
  if (patch === 'reset') return START_STATE
  return { ...state, ...patch }
}
