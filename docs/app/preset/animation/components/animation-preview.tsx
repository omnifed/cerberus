import { vstack } from '@/styled-system/patterns'
import { circle, square } from '@cerberus/styled-system/patterns'

export function PingPreview() {
  return (
    <span
      className={vstack({
        justify: 'center',
        position: 'relative',
      })}
    >
      <span
        className={circle({
          bgColor: 'success.border.initial',
          position: 'absolute',
          size: '2',
          zIndex: 'decorator',
        })}
      />
      <span
        className={circle({
          animation: 'ping 2s infinite',
          bgColor: 'success.surface.initial',
          position: 'absolute',
          size: '2',
          zIndex: 'base',
        })}
      />
    </span>
  )
}

export function PulsePreview() {
  return (
    <div
      className={square({
        animation: 'pulse 2s infinite',
        bgColor: 'neutral.surface.300',
        rounded: 'md',
        size: '10rem',
      })}
    />
  )
}
