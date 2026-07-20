import { processMdxForLlm } from '@/app/lib/llm-parser'
import { NextResponse } from 'next/server'
import { readFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'

export async function GET(
  request: Request,
  // 1. In Next.js 15+, params is a Promise
  props: { params: Promise<{ context: string; slug: string }> },
) {
  try {
    // 2. Await the params before destructuring
    const { context, slug: rawSlug } = await props.params

    // 3. Remove '.txt' from the URL parameter (e.g., "button.txt" -> "button")
    const slug = rawSlug.replace(/\.txt$/, '')

    const validContext = context as 'data-grid' | 'components'

    const docsDir = resolve(
      process.cwd(),
      'app/docs',
      validContext,
      '[slug]',
      'content',
    )

    const mdxPath = join(docsDir, `${slug}.mdx`)
    const mdPath = join(docsDir, `${slug}.md`)

    let rawContent = ''
    let filePath = mdxPath

    try {
      rawContent = await readFile(mdxPath, 'utf-8')
    } catch {
      try {
        rawContent = await readFile(mdPath, 'utf-8')
        filePath = mdPath
      } catch {
        return new NextResponse(`Documentation for ${slug} not found`, { status: 404 })
      }
    }

    const processedContent = await processMdxForLlm(rawContent, filePath, validContext)

    return new NextResponse(processedContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    // Log the actual raw error for easier debugging
    console.error(`Failed to generate LLM text:`, error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
