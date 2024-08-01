import { css } from '@cerberus/styled-system/css'
import { hstack } from '@cerberus/styled-system/patterns'
import { LogoGithub, LogoNpm } from '@cerberus-design/icons'
import { Show } from '@cerberus-design/react'

// important used to override markdown styles
const apiLinkStyles = css({
  alignItems: 'center',
  border: '1px solid',
  borderColor: 'action.border.100',
  bgColor: 'action.bg.100.initial',
  display: 'inline-flex !important',
  gap: '2',
  pxi: '2',
  rounded: 'full !important',
  textStyle: 'body-xs',
  textDecoration: 'none',
  transition: 'all 200ms ease-in-out',
  _hover: {
    bgColor: 'action.navigation.hover',
    color: 'page.text.inverse !important',
    textStyle: 'link',
  },
})

interface ApiLinksProps {
  npm?: string
  source?: string
  recipe?: string
}

export default function ApiLinks(props: ApiLinksProps) {
  return (
    <ul
      className={hstack({
        gap: '4',
        mb: '8',
      })}
    >
      <Show when={Boolean(props.npm)}>
        <li>
          <a
            className={apiLinkStyles}
            href={`https://www.npmjs.com/package/${props.npm}`}
          >
            <LogoNpm />
            npm
          </a>
        </li>
      </Show>

      <Show when={Boolean(props.source)}>
        <li>
          <a
            className={apiLinkStyles}
            href={`https://github.com/omnifed/cerberus/blob/main/packages/react/src/${props.source}`}
          >
            <LogoGithub />
            source
          </a>
        </li>
      </Show>

      <Show when={Boolean(props.recipe)}>
        <li>
          <a
            className={apiLinkStyles}
            href={`https://github.com/omnifed/cerberus/tree/main/packages/panda-preset/src/recipes/${props.recipe}`}
          >
            <LogoGithub />
            recipe
          </a>
        </li>
      </Show>
    </ul>
  )
}
