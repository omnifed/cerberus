import { getVariantKeys } from '@/lib/design-system'
import { Center, HStack, Stack } from '@/styled-system/jsx'
import { For, Text } from '@cerberus-design/react'
import { CSSProperties } from 'react'

const variants = getVariantKeys('layerStyles')

const layerStyles = {
  indicator: getNameByScope('indicator'),
  outline: getNameByScope('outline'),
  states: getStateStyles(),
}

export default function LayerStyles() {
  return (
    <Stack gap="2xl" py="lg">
      <For each={Object.keys(layerStyles)}>
        {(name) => (
          <Stack key={name} gap="md" w="full">
            <Text textStyle="heading-2xs">{getLabel(name)}</Text>
            <HStack flexWrap="wrap" gap="lg" w="full">
              <For each={layerStyles[name as keyof typeof layerStyles]}>
                {(key) => <LayerStyle key={key} layerStyle={key} />}
              </For>
            </HStack>
          </Stack>
        )}
      </For>
    </Stack>
  )
}

function getNameByScope(name: string) {
  return variants.filter((key) => key === name)
}

function getStateStyles() {
  return variants.filter((key) => key === 'disabled' || key === 'none')
}

function getLabel(name: string) {
  if (name === 'states') return `${name}:`
  return `${name}.*`
}

interface Props {
  layerStyle: string
}

function LayerStyle({ layerStyle }: Props) {
  return (
    <Center
      colorPalette="info"
      flex="1"
      fontWeight="medium"
      height="12"
      layerStyle={layerStyle}
      userSelect="none"
      style={
        {
          '--layer-style': layerStyle,
        } as CSSProperties
      }
    >
      {layerStyle}
    </Center>
  )
}
