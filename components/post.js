import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Highlighted, WorkImage } from './text'
import Layout from './layouts/article'
import Section from './section'

const images = require('./images')

const PostSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`

const PostLabel = styled.b`
  margin-right: 1em;
`
function SwitchElement(element, id) {
  switch (element.type) {
    case 'year':
      return (
        <Title reference={'works'}>
          {' '}
          {id.charAt(0).toUpperCase() + id.slice(1).replace('_', ' ')}{' '}
          <Badge> {element.value}</Badge>{' '}
        </Title>
      )
    case 'text':
      return <p className="paragraph"> {element.value} </p>
    case 'list':
      return (
        <List ml={4} my={4}>
          {element.children.map(ListElement => {
            return (
              <ListItem key={Math.random()}>
                {SwitchElement(ListElement)}
              </ListItem>
            )
          })}
        </List>
      )
    case 'metadata':
      return (
        <>
          <Highlighted>{element.label}</Highlighted>
          {element.href ? (
            <Link href={`${element.href}`} target="_blank">
              {element.span} <ExternalLinkIcon mx="2px" />
            </Link>
          ) : (
            <span>{element.span}</span>
          )}
        </>
      )
    case 'image':
      return <WorkImage src={images[element.link].src} alt={element.link} />
  }
}

const Post = (content, id, hasTitle = false) => {
  if (!content) return null

  let delay = 0.0

  return (
    <Layout title={`${id}`}>
      <Container>
        {hasTitle && (
          <Section delay={delay} key={Math.random()}>
            <Title reference={'projects'}>
              {' '}
              {id.charAt(0).toUpperCase() + id.slice(1).replace('_', ' ')}
            </Title>
          </Section>
        )}
        {content.map(element => {
          delay += 0.1
          return (
            <Section delay={delay} key={Math.random()}>
              {SwitchElement(element, id)}
            </Section>
          )
        })}
      </Container>
    </Layout>
  )
}

module.exports = { PostSection, PostLabel, Post }
