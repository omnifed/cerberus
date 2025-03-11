import { css } from 'styled-system/css'
import FingerPrintIcon from '../icons/finger-print-icon'

export default function TouchTarget() {
  return (
    <div
      className={css({
        h: 'full',
        position: 'relative',
        w: 'full',
      })}
    >
      <FingerPrintIcon
        className={css({
          position: 'absolute',
          left: '1',
          rotate: '45deg',
          scale: '25',
          top: '25%',
        })}
      />
    </div>
  )
}
