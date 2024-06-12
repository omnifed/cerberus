import { css } from '@cerberus/styled-system/css'
import MenuIcon from '../icons/menu-icon'

export default function Menus() {
  return (
    <div
      className={css({
        h: 'full',
        position: 'relative',
        w: 'full',
      })}
    >
      <MenuIcon
        className={css({
          position: 'absolute',
          left: '15',
          rotate: '42deg',
          scale: '25',
          top: '8.5%',
        })}
      />
    </div>
  )
}
