import { BasicDemo } from './basic.demo'
import { FallbackDemo } from './fallback.demo'
import { LazyDemo } from './lazy.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
  lazy: { preview: <LazyDemo /> },
  fallback: { preview: <FallbackDemo /> },
}
