import { css } from '@cerberus/styled-system/css'
import WrenchIcon from '../icons/wrench-icon'

export default function Utilities() {
  return (
    <div
      className={css({
        h: 'full',
        position: 'relative',
        w: 'full',
      })}
    >
      <WrenchIcon
        className={css({
          position: 'absolute',
          left: '24',
          scale: '35',
          top: '33%',
        })}
      />
    </div>
  )
}
