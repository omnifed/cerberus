import * as Icons from '@cerberus-design/icons'
import {
  container,
  grid,
  gridItem,
  vstack,
} from '@cerberus/styled-system/patterns'
import CopyToClipboard from './CopyToClipboard'

const sizes = [16, 20, 24, 32]
const PREVIEW_SIZE = '15rem'

interface IconDetailsProps {
  iconName: string
}

export default function IconDetails(props: IconDetailsProps) {
  const Icon = Icons[props.iconName as keyof typeof Icons]

  return (
    <div className={container()}>
      <section
        className={grid({
          columns: 12,
          lg: {
            borderBottom: '1px solid',
            borderColor: 'page.border.initial',
            mb: '8',
            pb: '8',
          },
        })}
      >
        <div
          className={gridItem({
            gridColumnStart: 1,
            gridColumnEnd: 10,
            lg: {
              gridColumnStart: 1,
              gridColumnEnd: 5,
            },
          })}
        >
          <div
            className={vstack({
              justify: 'center',
              bgColor: 'page.surface.200',
              h: PREVIEW_SIZE,
              rounded: 'md',
            })}
          >
            <Icon size="12rem" />
          </div>
        </div>

        <div
          className={gridItem({
            gridColumnStart: 10,
            gridColumnEnd: 13,
            lg: {
              gridColumnStart: 5,
              gridColumnEnd: 6,
            },
          })}
        >
          <ul
            className={vstack({
              justify: 'center',
              gap: '2',
              h: PREVIEW_SIZE,
            })}
          >
            {sizes.map((size) => (
              <li
                className={vstack({
                  bgColor: 'page.surface.200',
                  h: `calc(${PREVIEW_SIZE} / 4)`,
                  justify: 'center',
                  rounded: 'md',
                  w: 'full',
                })}
                key={size}
                title={`Size ${size}`}
              >
                <Icon size={size} />
              </li>
            ))}
          </ul>
        </div>

        <div
          className={gridItem({
            gridColumnStart: 1,
            gridColumnEnd: 13,
            mt: '4',
            lg: {
              gridColumnStart: 7,
            },
          })}
        >
          <h2>{props.iconName}</h2>
          <p>
            Available in {sizes.length} sizes: {sizes.join(' ')}.
          </p>

          <div>
            <CopyToClipboard componentName={props.iconName} />
          </div>
        </div>
      </section>
    </div>
  )
}
