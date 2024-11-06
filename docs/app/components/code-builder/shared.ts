import { getShikiOptions } from '@/app/lib/shiki'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { Fragment } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { codeToHast } from 'shiki/bundle/web'

export async function highlight(code: string) {
  const out = await codeToHast(code, getShikiOptions('tsx'))
  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
  })
}
