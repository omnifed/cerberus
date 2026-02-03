'use server'

import { getShikiOptions } from '@/lib/shiki'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ReactNode } from 'react'
import { codeToHtml } from 'shiki'

export interface ExampleCodeReturn {
  code: string | ReactNode
  preview: ReactNode | null
  rawContent: string
  fallback?: boolean
}

export async function getExampleCode(
  id: string,
  fallback?: ReactNode,
): Promise<ExampleCodeReturn> {
  if (!id)
    return { code: fallback, preview: null, rawContent: '', fallback: true }

  const data = _getExampleData(id)
  const basePath = _getBasePath()
  const examplePath = _getExamplePath(data)

  const content = await readFile(
    join(process.cwd(), basePath, examplePath),
    'utf-8',
  ).catch(() => 'Example not found')
  const formattedContent = content.replaceAll('@cerberus-design', '@cerberus')

  const code = await codeToHtml(formattedContent, getShikiOptions('tsx'))

  return { code, rawContent: content, preview: null }
}

/**
 * Converts a code snippet to a shiki string. Mostly used for non-demo purposes.
 * @param snippet - The code snippet to convert.
 * @returns The code snippet as a string.
 */
export async function getCodeString(snippet: string): Promise<string> {
  try {
    return await codeToHtml(snippet, getShikiOptions('tsx'))
  } catch (error) {
    console.error('Error converting code to string:', error)
    return ''
  }
}

// Private

interface ExampleData {
  el: string
  demo: string
}

function _getExampleData(id: string): ExampleData {
  const [el, demo] = id?.split('.') ?? ['', '']
  return {
    el,
    demo,
  }
}

function _getBasePath(): string {
  return 'app/docs/components/[slug]/'
}

function _getExamplePath(data: ExampleData): string {
  return `components/${data.el}/${data.demo}.demo.tsx`
}
