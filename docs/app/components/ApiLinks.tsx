import { css } from '@cerberus/styled-system/css'
import { hstack } from '@cerberus/styled-system/patterns'
import { LogoGithub, LogoNpm, ArrowUpRight } from '@carbon/icons-react'
import { Show } from '@cerberus-design/react'

const apiLinkStyles = css({
  alignItems: 'center',
  border: '1px solid',
  borderColor: 'action.border.100',
  bgColor: 'action.bg.100.initial',
  display: 'inline-flex',
  gap: '2',
  h: 8,
  pxi: '2',
  rounded: 'full',
  textStyle: 'label-sm',
  textDecoration: 'none',
  transition: 'all 200ms ease-in-out',
  _hover: {
    bgColor: 'action.navigation.hover',
    color: 'page.text.inverse',
    textStyle: 'link',
  },
})

interface ApiLinksProps {
  npm?: string
  source?: string
  recipe?: string
  ark?: string
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
            rel="noopener noreferrer"
            target="_blank"
          >
            <LogoNpm />
            npm
            <ArrowUpRight
              size={12}
              className={css({ color: 'page.text.100' })}
            />
          </a>
        </li>
      </Show>

      <Show when={Boolean(props.source)}>
        <li>
          <a
            className={apiLinkStyles}
            href={`https://github.com/omnifed/cerberus/blob/main/packages/react/src/${props.source}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <LogoGithub />
            source
            <ArrowUpRight
              size={12}
              className={css({ color: 'page.text.100' })}
            />
          </a>
        </li>
      </Show>

      <Show when={Boolean(props.recipe)}>
        <li>
          <a
            className={apiLinkStyles}
            href={`https://github.com/omnifed/cerberus/tree/main/packages/panda-preset/src/recipes/${props.recipe}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <LogoGithub />
            recipe
            <ArrowUpRight
              size={12}
              className={css({ color: 'page.text.100' })}
            />
          </a>
        </li>
      </Show>

      <Show when={Boolean(props.ark)}>
        <li>
          <a
            className={apiLinkStyles}
            href={`https://ark-ui.com/react/docs/components/${props.ark}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              focusable="false"
              aria-hidden="true"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 242 242"
              fill="currentColor"
            >
              <path d="M109.577 101.869C101.049 126.756 92.5453 151.54 84.0999 176.344C83.6351 177.709 83.0286 178.127 81.5853 178.122C65.6442 178.064 49.7028 178.086 33.7614 178.086C33.2431 178.086 32.7248 178.085 32 178.085C46.4893 135.275 60.9102 92.6656 75.3404 50.0294C75.971 50.0294 76.5035 50.0294 77.036 50.0294C106.373 50.0292 135.711 50.0369 165.048 50C166.216 49.9985 166.755 50.3056 167.146 51.4246C181.605 92.8214 196.097 134.207 210.583 175.594C210.713 175.965 210.819 176.345 211 176.924C185.792 176.924 160.701 176.924 135.445 176.924C135.445 189.057 135.445 201.003 135.445 212.949C135.341 212.966 135.237 212.983 135.132 213C125.259 185.153 115.387 157.305 105.44 129.251C106.055 129.198 106.555 129.118 107.054 129.118C117.682 129.111 128.309 129.112 138.937 129.112C142.059 129.112 142.459 128.574 141.435 125.687C135.641 109.346 129.841 93.0069 124.043 76.6675C123.406 74.8705 122.803 73.06 122.104 71.287C121.916 70.8118 121.709 70.0387 121.087 70.0387C120.466 70.0387 120.256 70.846 120.086 71.3342C117.893 77.6121 115.746 83.9057 113.587 90.1953C112.263 94.0539 110.939 97.9126 109.577 101.869Z"></path>
            </svg>
            Ark
            <ArrowUpRight
              size={12}
              className={css({ color: 'page.text.100' })}
            />
          </a>
        </li>
      </Show>
    </ul>
  )
}
