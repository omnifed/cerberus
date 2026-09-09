import { blog, docs } from '#site/content'
import { processMdx } from '@/utils/process-mdx'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    let fullLlmContent =
      '# Cerberus UI Platform Documentation\n\n> Index of all docs: /llms.txt'

    const allVeliteContent = [...blog, ...docs]

    for (const item of allVeliteContent) {
      const rawContent = (item as any).raw
      const processedContent = await processMdx(rawContent)
      const category =
        (item as any).group === 'release' ? 'Blog' : (item as any).group || 'Blog'

      // Construct the metadata header for RAG context
      const metadataHeader = [
        `\n\n---\n# ${item.title}`,
        `Category: ${category}`,
        item.description ? `\n> ${item.description}\n` : '',
      ].join('\n')

      fullLlmContent += `${metadataHeader}\n${processedContent}\n`
    }

    return new NextResponse(fullLlmContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('Failed to generate LLM txt:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
