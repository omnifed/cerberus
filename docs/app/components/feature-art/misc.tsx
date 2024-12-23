import { css } from '@cerberus/styled-system/css'
import { IbmWatsonxOrchestrate } from '@carbon/icons-react'

export default function Misc() {
  return (
    <div
      className={css({
        h: 'full',
        position: 'relative',
        w: 'full',
      })}
    >
      <IbmWatsonxOrchestrate
        className={css({
          position: 'absolute',
          left: '20',
          rotate: '42deg',
          scale: '25',
          top: '8.5%',
        })}
      />
    </div>
  )
}
