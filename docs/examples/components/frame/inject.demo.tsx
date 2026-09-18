'use client'

import { Frame } from '@cerberus-design/react'
import { useRef } from 'react'

export function InjectDemo() {
  const ref = useRef<HTMLIFrameElement>(null)

  return (
    <Frame
      ref={ref}
      title="Custom Frame"
      onMount={() => {
        const doc = ref.current?.contentDocument
        if (!doc) return
        const script = doc.createElement('script')
        script.innerHTML = 'console.log("Hello from inside the frame!")'
        doc.body.appendChild(script)
      }}
      style={{
        backgroundColor: 'white',
        border: '1px solid #ccc',
        width: '100%',
        height: 'var(--height)',
      }}
    >
      <div style={{ padding: '40px' }}>
        <h1>Hello from inside the frame!</h1>
        <p>
          This content is rendered within our custom frame component using a Portal.
        </p>
      </div>
    </Frame>
  )
}
