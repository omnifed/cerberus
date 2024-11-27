import { Show, Text } from '@cerberus-design/react'
import { Box, VStack } from '@cerberus-design/styled-system/jsx'
import { vstack } from '@cerberus-design/styled-system/patterns'
import Link from 'next/link'
import { sideNavData } from '@/app/react/side-nav'
import { categoryMeta } from '@/app/data/category-meta'

interface CategoryCardProps {
  category: string
  item: string
  delay?: number
}

export default function CategoryCard(props: CategoryCardProps) {
  const metaKey = props.item.toLowerCase().replaceAll(' ', '-')
  const item = sideNavData.find((navItem) => navItem.label === props.item)
  const meta = categoryMeta[metaKey as keyof typeof categoryMeta]
  const ImgFeature = meta.image
  const delay = props.delay ?? 0

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
          animationName="slideFromBottom, fadeIn"
          animationDelay={`${delay}ms`}
          animationDuration="slow"
          animationFillMode="forwards"
          className="group"
          bgColor="page.surface.100"
          border="2px solid"
          borderColor="transparent"
          h="full"
          opacity="0"
          p="sm"
          rounded="inherit"
          transition="border-color 200ms"
          _hover={{
            borderColor: 'page.border.100',
          }}
        >
          <Box
            data-category={props.category}
            h="14.25rem"
            gradient="nyx-light"
            overflow="hidden"
            position="relative"
            rounded="inherit"
            transitionProperty="height,background-image"
            transitionDuration="fast"
            w="full"
            willChange="height"
            zIndex="base"
            _before={{
              bgColor: 'action.bg.active',
              bottom: 0,
              content: '""',
              left: 0,
              mixBlendMode: 'hue',
              position: 'absolute',
              right: 0,
              top: 0,
              zIndex: 'decorator',
            }}
            _groupHover={{
              gradient: 'charon-light',
              h: '12.75rem',
            }}
          >
            <ImgFeature />
          </Box>
          <VStack alignItems="flex-start" gap="xs" pxi="xs" py="lg" w="full">
            <Text
              color="page.text.200"
              textStyle="heading-md"
              transition="color fast"
              _groupHover={{
                color: 'action.navigation.hover',
              }}
            >
              {meta.name ?? item!.label}
            </Text>
            <Show when={meta.description != null}>
              <Text color="page.text.initial" textStyle="body-md">
                {meta.description}
              </Text>
            </Show>
          </VStack>
        </Box>
      </Link>
    </Show>
  )
}
