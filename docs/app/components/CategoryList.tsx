import categoryData from '@/app/data/categories.react.json'
import { sideNavData } from '@/app/react/side-nav'
import { Image as ImageIcon } from '@cerberus-design/icons'
import { Show } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'
import { cq, grid, gridItem, vstack } from '@cerberus/styled-system/patterns'
import Link from 'next/link'

interface CategoryCardProps {
  category: string
  item: string
}

function CategoryCard(props: CategoryCardProps) {
  const item = sideNavData.find((navItem) => navItem.label === props.item)
  return (
    <Show when={item != null}>
      <Link
        href={item!.route!}
        className={vstack({
          bgColor: 'page.surface.100',
          display: 'block',
          h: '15rem',
          overflow: 'hidden',
          rounded: 'xl',
          shadow: 'md',
          textDecoration: 'none',
          w: 'full',
          _hover: {
            transform: 'scale(1.05)',
          },
          _motionSafe: {
            transition: 'all 250ms ease-in-out',
          },
        })}
      >
        <div
          data-category={props.category}
          className={vstack({
            h: '2/3',
            justify: 'center',
            w: 'full',
            '&:is([data-category=actions])': {
              gradient: 'charon-dark',
            },
            '&:is([data-category=communication])': {
              gradient: 'charon-light',
            },
            '&:is([data-category=containment])': {
              gradient: 'nyx-dark',
            },
            '&:is([data-category=navigation])': {
              gradient: 'nyx-light',
            },
            '&:is([data-category=selection])': {
              gradient: 'amphiaraus-light',
            },
            '&:is([data-category=inputs])': {
              gradient: 'amphiaraus-dark',
            },
          })}
        >
          <ImageIcon size={24} />
        </div>
        <div
          className={css({
            p: '4',
          })}
        >
          <p
            className={css({
              color: 'page.text.initial',
              textStyle: 'body-xl',
            })}
          >
            {item!.label}
          </p>
        </div>
      </Link>
    </Show>
  )
}

interface CategoryListProps {
  group: keyof typeof categoryData
}

export default function CategoryList(props: CategoryListProps) {
  const data = categoryData[props.group]
  return (
    <div>
      <header>
        <p
          className={css({
            color: 'page.text.initial',
            pb: '2',
            textStyle: 'h2',
          })}
        >
          {data.name}
        </p>
        <p
          className={css({
            textStyle: 'body-lg',
            pb: '3',
          })}
        >
          {data.description}
        </p>
      </header>

      <div className={cq()}>
        <ul
          className={grid({
            columns: {
              base: 1,
              md: 2,
              lg: 3,
            },
            gap: '4',
            mb: '10',
          })}
        >
          {data.items.map((itemName: string) => (
            <li className={gridItem()} key={itemName}>
              <CategoryCard item={itemName} category={props.group} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
