import { Marquee } from '@cerberus-design/react'

export function VarsDemo() {
  return (
    <Marquee
      css={{
        '--marquee-duration': '30s',
        '--marquee-delay': '0s',
        '--marquee-loop-count': 'infinite',
        '--marquee-edge-color': 'colors.bg',
        '--marquee-edge-size': '20%',
      }}
    >
      {/* ... */}
    </Marquee>
  )
}
