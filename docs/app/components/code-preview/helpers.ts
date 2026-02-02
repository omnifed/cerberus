import { getShikiOptions } from '@/lib/shiki'
import { codeToHtml } from 'shiki'

const content = `
  import { useState } from 'react';

  export default function Example() {
    const [count, setCount] = useState(0);

    // This is a fake code snippet

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
`

export async function getExampleCode(id: string) {
  console.log(id)

  const code = await codeToHtml(content, getShikiOptions('tsx'))

  return code
}
