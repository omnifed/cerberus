import { css, cx } from '@cerberus/styled-system/css'
import { grid, gridItem, vstack } from '@cerberus/styled-system/patterns'
import * as Icons from '@carbon/icons-react'
import Link from 'next/link'

const listOfIcons = Object.entries(Icons)

interface IconsListProps {
  filter?: string
}

export default function IconsList(props: IconsListProps) {
  const { filter } = props
  const filteredIcons = listOfIcons.filter(([name]) =>
    name.toLowerCase().includes(filter?.toLocaleLowerCase() ?? ''),
  )

  return (
    <ul
      className={cx(
        css({
          marginInlineStart: 'auto',
          marginInlineEnd: 'auto',
          md: {
            gridTemplateColumns: 'repeat(13, 4rem)',
            gap: '3.5',
            w: 'max-content',
          },
        }),
        grid({
          columns: 6,
          mt: '8',
        }),
      )}
    >
      {filteredIcons.map(([name, Icon]) => (
        <li
          className={gridItem({
            h: '3rem',
            md: {
              h: '4rem',
            },
          })}
          key={name}
          title={name}
        >
          <Link
            className={vstack({
              display: 'flex !important',
              bgColor: 'page.surface.200',
              h: 'full',
              justify: 'center !important',
              w: 'full',
              rounded: 'md',
              transition: 'background-color, color 250ms ease-in-out',
              _hover: {
                bgColor: 'action.navigation.initial',
                color: 'page.surface.100 !important',
              },
            })}
            href={`/icons/${name}`}
          >
            <Icon size={24} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
