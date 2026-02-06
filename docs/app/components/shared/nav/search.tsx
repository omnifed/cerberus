import { DocSearch } from '@docsearch/react'
import '@docsearch/css'

export function Search() {
  return (
    <DocSearch
      appId="GH67DG1KS2"
      apiKey={process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY as string}
      indices={['Cerby Docs Website']}
      askAi={process.env.NEXT_PUBLIC_DOCSEARCH_AI_KEY}
    />
  )
}
