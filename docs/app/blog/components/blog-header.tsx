import { Avatar, DateFormatter, Tag, Text } from '@cerberus-design/react'
import { HStack, VStack } from '@/styled-system/jsx'
import authorData from '../data/authors.json'

type authors = 'caseyBaggz'

export interface BlogHeaderProps {
  author: authors
  title: string
  tag: string
  date: string
  description?: string
  timeToRead?: string
}

export default function BlogHeader(props: BlogHeaderProps) {
  const author = authorData[props.author]
  if (!author) {
    console.error(`Author ${props.author} not found in authorData`)
    return null
  }

  const formatter = new DateFormatter('en-US', {
    dateStyle: 'long',
    timeZone: 'America/New_York',
  })

  return (
    <header>
      <VStack alignItems="flex-start" gap="12" paddingBlockEnd="12" w="full">
        <HStack gap="4">
          <Tag palette="page" shape="square">
            {props.tag}
          </Tag>
          {' - '}
          <Text as="small" color="page.text.100" textStyle="label-md">
            {formatter.format(new Date(props.date))}
          </Text>
        </HStack>

        <Text
          as="h1"
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="bold"
          lineHeight="shorter"
          textStyle="heading-lg"
          w="full"
        >
          {props.title}
        </Text>

        <HStack>
          <Avatar
            alt="Author's profile picture"
            fallback={author.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
            src={author.avatar}
          />

          <VStack alignItems="flex-start" gap="xs">
            <Text color="inherit" textStyle="body-sm">
              {author.name}
            </Text>
            <Text color="page.text.100" textStyle="label-sm">
              {author.role}
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </header>
  )
}
