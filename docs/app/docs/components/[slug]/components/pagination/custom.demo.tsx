import { Pagination } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <Pagination
      count={5000}
      pageSize={10}
      siblingCount={2}
      css={{
        bgColor: 'page.bg.100',
        py: 'md',
        '& :is([data-scope=button])': {
          color: 'info.text.initial',
        },
      }}
    />
  )
}
