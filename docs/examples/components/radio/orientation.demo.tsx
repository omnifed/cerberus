import { HStack } from '@/styled-system/jsx'
import { Field, For, Radio, RadioGroup, RadioProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.slotRecipes.radioGroup.variants.orientation
  .values as RadioProps['orientation'][]

export function OrientationDemo() {
  return (
    <HStack gap="md" w="3/4">
      <For each={variants}>
        {(orientation) => (
          <Field label={`${orientation} orientation`} key={String(orientation)}>
            <RadioGroup
              defaultValue="cerberus"
              orientation={orientation}
              justifyContent="center"
            >
              <Radio value="cerberus">Cerberus</Radio>
              <Radio value="hades">Hades</Radio>
              <Radio value="zeus">Zeus</Radio>
            </RadioGroup>
          </Field>
        )}
      </For>
    </HStack>
  )
}
