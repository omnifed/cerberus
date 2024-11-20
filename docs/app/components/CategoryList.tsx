import categoryData from '@/app/data/categories.react.json'
import { css } from '@cerberus/styled-system/css'
import { cq, grid, gridItem } from '@cerberus/styled-system/patterns'
import CategoryCard from './ui/category-card'

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
              lg: 2,
              '2xl': 3,
            },
            gap: {
              base: 'md',
              '2xl': 'xl',
            },
            mb: 10,
          })}
        >
          {data.items.map((itemName: string) => (
            <li
              className={gridItem({
                h: '22.5rem',
                w: 'full',
              })}
              key={itemName}
            >
              <CategoryCard item={itemName} category={props.group} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
