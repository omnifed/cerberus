import categoryData from '@/app/data/categories.json'
import navData from '@/app/react/side-nav.json'
import { Image as ImageIcon } from '@cerberus-design/icons'
import { Show } from '@cerberus-design/react'
import { css } from '@cerberus/styled-system/css'
import { cq, grid, gridItem, vstack } from '@cerberus/styled-system/patterns'
import Link from 'next/link'

interface CategoryCardProps {
  item: string
}

function CategoryCard(props: CategoryCardProps) {
  const item = navData.find((navItem) => navItem.label === props.item)
  return (
    <Show when={item != null}>
      <Link
        href={item!.route!}
        className={vstack({
          bgColor: 'neutral.surface.100',
          display: 'block',
          h: '15rem',
          overflow: 'hidden',
          rounded: 'xl !important',
          shadow: 'md',
          textDecoration: 'none !important',
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
          className={vstack({
            bgColor: 'neutral.surface.200',
            h: '2/3',
            justify: 'center',
            w: 'full',
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
              color: 'neutral.text.initial !important',
              textStyle: 'body-xl !important',
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
            color: 'neutral.text.initial !important',
            pb: '2 !important',
            textStyle: 'h2 !important',
          })}
        >
          {data.name}
        </p>
        <p
          className={css({
            textStyle: 'body-lg !important',
            pb: '3 !important',
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
              <CategoryCard item={itemName} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
