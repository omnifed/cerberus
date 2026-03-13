import { Scrollable } from 'styled-system/jsx'
import { Text } from '@cerberus-design/react'

export function DirectionDemo() {
  return (
    <Scrollable direction="horizontal" w="3/4">
      <Text textWrap="nowrap">
        It was the best compliment that he'd ever received although the person who gave it likely
        never knew. It had been an off-hand observation on his ability to hold a conversation and
        actually add pertinent information to it on practically any topic. Although he hadn't
        consciously strived to be able to do so, he'd started to voraciously read the news when he
        couldn't keep up on topics his friends discussed because their conversations went above his
        head. The fact that someone had noticed enough to compliment him that he could talk
        intelligently about many topics meant that he had succeeded in his quest to be better
        informed.
      </Text>
    </Scrollable>
  )
}
