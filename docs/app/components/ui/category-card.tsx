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
          display: 'block',
          h: 'full',
          rounded: 'lg',
          textDecoration: 'none',
          w: 'full',
        })}
      >
        <Box
          className="group"
          bgColor="page.surface.100"
          border="2px solid"
          borderColor="transparent"
          h="full"
          p="sm"
          rounded="inherit"
          transition="border-color 200ms"
          _hover={{
            borderColor: 'page.border.100',
          }}
        >
          <Box
            data-category={props.category}
            h="12.75rem"
            gradient="charon-light"
            rounded="inherit"
            transition="height 200ms"
            w="full"
            willChange="height"
            _groupHover={{
              h: '14.25rem',
            }}
          />
          <VStack alignItems="flex-start" gap="xs" pxi="xs" py="lg" w="full">
            <Text
              color="page.text.200"
              textStyle="heading-md"
              transition="color fast"
              _groupHover={{
                color: 'action.navigation.hover',
              }}
            >
              {item!.label}
            </Text>
            <Text color="page.text.initial" textStyle="body-md">
              Quick one sentence description about the component.
            </Text>
          </VStack>
        </Box>
      </Link>
    </Show>
  )
}
