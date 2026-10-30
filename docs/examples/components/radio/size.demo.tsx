import { HStack } from '@/styled-system/jsx'
import { Field, For, Radio, RadioGroup, RadioProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.slotRecipes.radioGroup.variants.size
  .values as RadioProps['size'][]

export function SizeDemo() {
  return (
    <HStack gap="md" w="3/4">
      <For each={variants}>
        {(size) => (
          <Field label={`${size} size`} key={String(size)}>
            <RadioGroup defaultValue="cerberus" justifyContent="center">
              <Radio size={size} value="cerberus">
                Cerberus
              </Radio>
              <Radio size={size} value="hades">
                Hades
              </Radio>
              <Radio size={size} value="zeus">
                Zeus
              </Radio>
            </RadioGroup>
          </Field>
        )}
      </For>
    </HStack>
  )
}
