import { Image as ImageIcon } from '@cerberus-design/icons'
import { Show } from '@cerberus-design/react'
import { Box, VStack } from '@cerberus-design/styled-system/jsx'
import { vstack } from '@cerberus-design/styled-system/patterns'
import Link from 'next/link'
import { sideNavData } from '@/app/react/side-nav'
import Text from './text'

interface CategoryCardProps {
  category: string
  item: string
}

export default async function CategoryCard(props: CategoryCardProps) {
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
        <VStack
          data-category={props.category}
          h="2/3"
          justify="center"
          w="full"
          css={{
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
          }}
        >
          <ImageIcon size={24} />
        </VStack>
        <Box p="4">
          <Text color="page.text.initial" textStyle="body-xl">
            {item!.label}
          </Text>
        </Box>
      </Link>
    </Show>
  )
}
