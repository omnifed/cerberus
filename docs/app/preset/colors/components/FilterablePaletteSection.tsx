'use client'

import type { Sentiment } from '@cerberus-design/panda-preset'
import { PaletteFilterList } from './PaletteFilterList'
import { useCallback, useMemo, useState, type MouseEvent } from 'react'
import PaletteList from './PaletteList'
import { css } from '@cerberus/styled-system/css'
import paletteData from '@/app/data/palettes.json'

export function FilterablePaletteSection() {
  const [selectedPalette, setSelectedPalette] = useState<Sentiment>('page')
  const formattedPalette = useMemo(() => {
    return selectedPalette.replace(/-([a-z])/g, (g) =>
      g[1].toUpperCase(),
    ) as Sentiment
  }, [selectedPalette])

  const handlePaletteChange = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const { value } = e.currentTarget
      setSelectedPalette(value as Sentiment)
    },
    [],
  )

  return (
    <div>
      <PaletteFilterList
        activePalette={selectedPalette}
        onClick={handlePaletteChange}
      />

      <div
        className={css({
          pt: '10',
          pb: '8',
        })}
      >
        <h3
          className={css({
            mb: '2',
            textStyle: 'h3',
            textTransform: 'capitalize',
          })}
        >
          {selectedPalette} colors
        </h3>
        <p
          className={css({
            color: 'page.text.100',
          })}
        >
          {
            paletteData.results[
              selectedPalette as keyof typeof paletteData.results
            ].description
          }{' '}
          Click to see the details.
        </p>
      </div>

      <PaletteList palette={formattedPalette} />
    </div>
  )
}
