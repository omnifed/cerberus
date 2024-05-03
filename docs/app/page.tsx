import { AiGovernanceLifecycle } from '@cerberus-design/icons'
import { css } from '@/styled-system/css'
import { container, vstack } from '@/styled-system/patterns'

export default function Home() {
  return (
    <main
      className={container({
        h: 'full',
      })}
    >
      <div className={vstack()}>
        <section>
          <h1
            className={css({
              textStyle: 'h1',
            })}
          >
            Cerberus Design System
          </h1>
          <p>This is a test of the typography</p>
        </section>

        <AiGovernanceLifecycle />
      </div>
    </main>
  )
}
