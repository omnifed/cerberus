'use client'

import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { type ISourceOptions } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

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
    image: 'radial-gradient(#4a0000, transparent)',
  },
} as ISourceOptions

export function Scene() {
  const [init, setInit] = useState<boolean>(false)
  const [options, setOptions] = useState<ISourceOptions>(fire)

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  // useEffect(() => {
  //   if (window) {
  //     const rootStyle = window.getComputedStyle(document.body)
  //     const textInitial = rootStyle.getPropertyValue(
  //       '--cerberus-colors-warning-text-initial',
  //     )
  //     setOptions((prev) => ({
  //       ...prev,
  //       particles: {
  //         ...prev.particles,
  //         color: {
  //           value: textInitial,
  //         },
  //       },
  //     }))
  //   }
  // }, [])

  if (init) {
    return <Particles id="tsparticles" options={options} />
  }

  return null
}
