'use client'

import { useRootColors, useThemeContext } from '@cerberus-design/react'
import { type Engine, type ISourceOptions } from '@tsparticles/engine'
import Particles, { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useEffect } from 'react'

const particlesInit = async (engine: Engine) => {
  await loadSlim(engine)
}

export function Scene() {
  const { theme } = useThemeContext()
  const { colors, refetch } = useRootColors(colorList)

  const options = {
    ...fire,
    background: {
      image: `radial-gradient(75% 82% at 52% 100%, ${colors[colorList[0]]}40 0%, transparent 100%)`,
    },
  }

  useEffect(() => {
    if (window && theme) {
      // We need to wait for the theme to be applied to the root element
      setTimeout(async () => {
        await refetch()
      }, 10)
    }
  }, [theme, refetch])

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles id="tsparticles" options={options} />
    </ParticlesProvider>
  )

  // if (init) {
  //   return <Particles id="tsparticles" options={options} />
  // }

  // return null
}

const fire = {
  fpsLimit: 40,
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
      },
    },
    color: {
      value: ['#fdcf58', '#757676', '#f27d0c', '#800909', '#f07f13'],
    },
    opacity: {
      value: { min: 0.1, max: 0.5 },
    },
    size: {
      value: { min: 1, max: 3 },
    },
    move: {
      enable: true,
      speed: 6,
      random: false,
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  background: {
    image: 'radial-gradient(transparent, transparent)',
  },
} as ISourceOptions

const colorList = ['action-bg-initial']
