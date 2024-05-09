import { css } from '@/styled-system/css'
import Overview from './overview.mdx'

export default function PresetPage() {
  return (
    <main
      className={css({
        py: '6',
      })}
    >
      <Overview />
    </main>
  )
}
