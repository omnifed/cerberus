'use client'

import { LogoGithub, ArrowUpRight } from '@carbon/icons-react'
import { cerberus } from '@cerberus-design/react'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

export function EditOnGithubLink() {
  const pathname = usePathname()
  const editPageLink = useMemo(() => {
    const base = 'https://github.com/omnifed/cerberus/blob/main/docs/app'
    const directory = pathname?.split('/').slice(0, -1).join('/') ?? 'docs/components'
    const file = pathname?.split('/').pop() || 'index'
    const githubPathname = `${directory}/%5Bslug%5D/content/${file}`
    return {
      rawUrl: `https://raw.githubusercontent.com/omnifed/cerberus/refs/heads/main/docs/app${githubPathname}.mdx`,
      editUrl: `${base}${githubPathname}.mdx`,
    }
  }, [pathname])

  return (
    <cerberus.a
      href={editPageLink}
      target="_blank"
      rel="noopener noreferrer"
      css={{
        color: 'page.text.100',
        display: 'inline-flex',
        gap: 2,
        rounded: 'sm',
        textStyle: 'label-sm',
        textWrap: 'pretty',
        transitionProperty: 'color',
        transitionDuration: 'fast',
        _hover: {
          color: 'action.navigation.hover',
          textDecorationColor: 'action.navigation.hover',
          textDecoration: 'underline',
        },
      }}
    >
      <LogoGithub size="0.875rem" />
      Edit this page on Github
      <ArrowUpRight size="0.875rem" />
    </cerberus.a>
  )
}
