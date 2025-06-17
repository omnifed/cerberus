import { css } from 'styled-system/css'
import { grid, gridItem } from 'styled-system/patterns'
import CategoryCard from './ui/category-card'
import categoryData from '@/app/data/categories.react.json'
import { Cq } from '@/styled-system/jsx'

interface CategoryListProps {
  group: keyof typeof categoryData
}

export default function CategoryList(props: CategoryListProps) {
  const data = categoryData[props.group]
  return (
    <>
      <header>
        <h3
          className={css({
            color: 'page.text.initial',
            pb: '2',
            textStyle: 'heading-md',
          })}
        >
          {data.name}
        </h3>
        <p
          className={css({
            textStyle: 'body-lg',
            pb: '3',
          })}
        >
          {data.description}
        </p>
      </header>

      <Cq w="full">
        <ul
          className={grid({
            columns: {
              base: 1,
              lg: 2,
            },
            gap: {
              base: 'md',
            },
            mb: 10,
            w: 'full',
          })}
        >
          {data.items.map((itemName: string, idx: number) => (
            <li
              className={gridItem({
                h: '22.5rem',
                w: 'full',
              })}
              key={itemName}
            >
              <CategoryCard
                delay={200 * idx}
                item={itemName}
                category={props.group}
              />
            </li>
          ))}
        </ul>
      </Cq>
    </>
  )
}
