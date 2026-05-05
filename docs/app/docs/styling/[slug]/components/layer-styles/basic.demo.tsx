import { Center, HStack, Stack } from '@/styled-system/jsx'
import layerStylesMeta from '@/styled-system/specs/layer-styles.json'
import { For, Text } from '@cerberus-design/react'
import { CSSProperties } from 'react'

const layerStyles = {
  indicator: getNameByScope('indicator'),
  outline: getNameByScope('outline'),
  states: getStateStyles(),
}

function getNameByScope(name: string) {
  return layerStylesMeta.data.filter((layerStyle) => layerStyle.name.includes(name))
}

function getStateStyles() {
  return layerStylesMeta.data.filter(
    (layerStyle) =>
      layerStyle.name.includes('disabled') || layerStyle.name.includes('none'),
  )
}

function getLabel(name: string) {
  if (name === 'states') {
    return `${name}:`
  }
  return `${name}.*`
}

export function BasicDemo() {
  return (
    <Stack gap="2xl" py="lg" w="full">
      <For each={Object.keys(layerStyles)}>
        {(name) => (
          <Stack gap="md" w="full">
            <Text textStyle="heading-2xs">{getLabel(name)}</Text>
            <HStack flexWrap="wrap" gap="md" w="full">
              <For each={layerStyles[name as keyof typeof layerStyles]}>
                {(item) => <LayerStyle key={item.name} layerStyle={item.name} />}
              </For>
            </HStack>
          </Stack>
        )}
      </For>
    </Stack>
  )
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
