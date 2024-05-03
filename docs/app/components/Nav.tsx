import { css } from '@/styled-system/css'
import { hstack } from '@/styled-system/patterns'
import Link from 'next/link'

export function Nav() {
  return (
    <nav
      className={hstack({
        justify: 'space-between',
        p: '4',
      })}
    >
      <Link href="/">Cerberus Design System</Link>

      <ul className={hstack()}>
        <li>
          <a href="/learn">Learn</a>
        </li>
        <li>
          <a href="/reference">Reference</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </nav>
  )
}
