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

  const code = await codeToHtml(content, getShikiOptions('tsx'))

  return { code, rawContent: content, preview: null }
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
