import { css } from '@cerberus/styled-system/css'
import ListTreeIcon from '../icons/list-tree-icon'

export default function Forms() {
  return (
    <div
      className={css({
        h: 'full',
        position: 'relative',
        w: 'full',
      })}
    >
      <ListTreeIcon
        className={css({
          position: 'absolute',
          right: '15',
          rotate: '15deg',
          scale: '25',
          bottom: '35%',
        })}
      />
    </div>
  )
}
