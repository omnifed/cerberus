import { WuTangLogo } from '@/app/components/icons/wu-tang-icon'
import {
  Admonition,
  AdmonitionDescription,
  AdmonitionHeading,
  Tag,
  type AdmonitionProps,
} from '@cerberus-design/react'
import { Circle, VStack } from '@cerberus-design/styled-system/jsx'
import { css } from '@cerberus/styled-system/css'

function PageAdmonition() {
  const styleProps = {
    palette: 'page',
    usage: 'filled',
  } as AdmonitionProps
  return (
    <Admonition {...styleProps}>
      <AdmonitionHeading {...styleProps}>When to use</AdmonitionHeading>
      <AdmonitionDescription {...styleProps}>
        Use this component when you want to display a page-level message.{' '}
        <a href="#">Learn more</a>
      </AdmonitionDescription>
    </Admonition>
  )
}

function OutlinedPageAdmonition() {
  const styleProps = {
    palette: 'page',
    usage: 'outlined',
  } as AdmonitionProps
  return (
    <Admonition {...styleProps}>
      <AdmonitionHeading {...styleProps}>When to use</AdmonitionHeading>
      <AdmonitionDescription {...styleProps}>
        Use this component when you want to display a page-level message.{' '}
        <a href="#">Learn more</a>
      </AdmonitionDescription>
    </Admonition>
  )
}

export function CustomAdmonition() {
  const styleProps = {
    palette: 'page',
    usage: 'outlined',
  } as AdmonitionProps

  return (
    <div
      className={css({
        w: '1/2',
      })}
    >
      <Admonition
        {...styleProps}
        className={css({
          bgColor: 'black',
          borderColor: 'yellow',
          color: 'yellow',
        })}
        icon={
          <Circle size="6">
            <WuTangLogo />
          </Circle>
        }
      >
        <AdmonitionHeading {...styleProps}>Wu-Tang Forever</AdmonitionHeading>
        <AdmonitionDescription {...styleProps}>
          President&apos;s are temporary, but Wu-Tang is forever.{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/search?q=wu+tang+clna&oq=wu+tang+clna&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRiPAjIHCAIQIRiPAtIBCDE5NTJqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8"
          >
            Learn more
          </a>
        </AdmonitionDescription>
      </Admonition>
    </div>
  )
}

export function OverviewVersions() {
  return (
    <VStack gap="lg">
      <VStack>
        <PageAdmonition />
        <Tag>Filled</Tag>
      </VStack>
      <VStack>
        <OutlinedPageAdmonition />
        <Tag>Outlined</Tag>
      </VStack>
    </VStack>
  )
}
