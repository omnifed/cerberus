import { blog, docs } from '#site/content'
import { processMdxForLlm } from '@/app/lib/llm-parser'
import { processMdx } from '@/utils/process-mdx'
import { NextResponse } from 'next/server'
import { readFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'

function isVeliteContent(context: string): boolean {
  return (
    context === 'blog' ||
    context === 'data-grid' ||
    context === 'get-started' ||
    context === 'signals'
  )
}

export async function GET(
  request: Request,
  props: { params: Promise<{ context: string; slug: string }> },
) {
  try {
    const { context, slug: rawSlug } = await props.params
    const slug = rawSlug.replace(/\.txt$/, '')

    const veliteContent: Record<'blog' | 'docs', typeof docs | typeof blog> = {
      blog: blog as typeof blog,
      docs: docs as typeof docs,
    }

    const isVelite = isVeliteContent(context)
    const validContext = context as 'data-grid' | 'components'

    let docsDir = null
    if (isVelite) {
      const key = context !== 'blog' ? 'docs' : 'blog'
      const collection = veliteContent[key]

      const document = collection.find((item) => {
        const itemSlug = (item as any).slugAsParams || item.slug
        return itemSlug === slug || itemSlug === `${context}/${slug}`
      })

      if (!document) {
        return new NextResponse(`Documentation for ${slug} not found`, { status: 404 })
      }

      const rawContent = document.raw
      const processedContent = await processMdx(rawContent)

      const metadataHeader = [
        `# ${document.title}`,
        `Category: ${document.category || context}`,
        document.description ? `\n> ${document.description}\n` : '',
        `---\n\n`,
      ].join('\n')

      return new NextResponse(metadataHeader + processedContent, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      })
    }

    // Not velite context, use old docs directory
    docsDir = resolve(process.cwd(), 'app/docs', validContext, '[slug]', 'content')

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
