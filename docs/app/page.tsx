import { vstack } from '@/styled-system/patterns'
import RootHeadline from './components/RootHeadline'

export default function Home() {
  return (
    <div
      className={vstack({
        pxi: '4',
        py: '20',
      })}
    >
      <main>
        <RootHeadline />
      </main>
    </div>
  )
}
