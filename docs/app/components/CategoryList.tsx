import categoryData from '@/app/data/categories.json'
import navData from '@/app/react/side-nav.json'
import { Image as ImageIcon } from '@cerberus-design/icons'
import { Show } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'
import { cq, grid, gridItem, vstack } from '@cerberus/styled-system/patterns'
import Link from 'next/link'
import { NEUTRAL_TEXT_INVERSE } from '../utils/const'

interface CategoryCardProps {
  category: string
  item: string
}

function CategoryCard(props: CategoryCardProps) {
  const item = navData.find((navItem) => navItem.label === props.item)
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
              cerberusGradient: 'dark-purple',
              color: NEUTRAL_TEXT_INVERSE,
            },
            '&:is([data-category=communication])': {
              cerberusGradient: 'light-purple',
              color: 'info.text.100',
            },
            '&:is([data-category=containment])': {
              cerberusGradient: 'green',
              color: NEUTRAL_TEXT_INVERSE,
            },
            '&:is([data-category=navigation])': {
              cerberusGradient: 'light-blue',
              color: 'success.text.100',
            },
            '&:is([data-category=selection])': {
              cerberusGradient: 'neutral',
              color: NEUTRAL_TEXT_INVERSE,
            },
            '&:is([data-category=inputs])': {
              cerberusGradient: 'yellow',
              color: NEUTRAL_TEXT_INVERSE,
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
